import React, {useEffect,useState} from 'react';
import tmdb from './tmdb';
import './App.css';
import MovieRow from './components/movieRow';
import FeaturMovie from './components/FeatureMovie'
import Header from './components/Header';

export default () => {

  const[movieList,setMovieList] = useState([]);
  const [featureData,setFeatureData] = useState(null)
  const [blackHeader,setBlackHeader] = useState(false)

  useEffect(()=>{
    const loadAll = async () => {

      let list = await tmdb.getHomeList();
      setMovieList(list)

      let originals = list.filter(i=>i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length -1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id,'tv');
      setFeatureData(chosenInfo);
    }

    loadAll();
  },[]);

  useEffect(()=>{
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{setBlackHeader(false)
      }
    }

    window.addEventListener('scroll',scrollListener);

    return () => {
      window.removeEventListener('scroll',scrollListener)
    }
  },[]);

  return (
    <div className='page'>

      <Header black={blackHeader}/>

      {featureData &&
        <FeaturMovie item={featureData}/>}

      <section className='lists'>
        {movieList.map((item,key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}

      </section>
      <footer>
        Feito por FeSoSa<br/>
        Direitos de Imagem para Netflix<br/>
        Dados pegos pelo sote www.themoviedb.org
      </footer>

      {movieList.length <= 0 &&
      <div className='loading'>
        <img src='https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif' alt='Carregando'/>
      </div>
      }
    </div>
  );
}
import React, { useState } from "react";
import './FeatureMovie.css';
import { Link } from "react-router-dom";

export default ({item,type}) => {
    let firstDate = new Date(item.first_air_date);
    let genres = [];

    for(let i in item.genres){
        genres.push(item.genres[i].name);
    }

    let description = item.overview
    if(description.length > 200){
        description = description.substring(0,200)+'...';
    }

    const [textadd,setTextadd] = useState('+ Minha lista')
    function handleClick() {
        setTextadd('Adicionado');
      }

    return(
        <section className="feature" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="feature--vertical">
                <div className="feature-horizontal">
                    <div className="feature--name">{
                        type == 'movie'? 
                            item.title :
                            item.name

                    
                    }</div>
                    <div className="feature--info">
                        <div className="feature--points">{item.vote_average} pontos</div>
                        <div className="feature--year">{firstDate.getFullYear()}</div>
                        <div className="feature--seasons">{item.number_of_seasons} Temporada{item.number_of_seasons != 1 ? 's' : ''}</div>
                    </div>
                    <div className="feature--description">{description}</div>
                    <div className="feature--buttons">
                        <Link to={`/Sobre/${item.id}/${item.name}`}><a href={`/watch/${item.id}`} className='feature--watchbutton'>▶ Assistir</a></Link>
                        <a onClick={handleClick} className='feature--mylistbutton'>{textadd}</a>
                    </div>
                    <div className="feature--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
                </div>
            </div>
        </section>
    );

}
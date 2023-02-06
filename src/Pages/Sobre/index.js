import React, { useEffect, useState } from "react";
import './index.css'
import YouTube from 'react-youtube';
import { useParams } from "react-router-dom";
import Header from "../../components/Header"
import tmdb from "../../tmdb"
import Trailer from "../../components/Trailer";
import FeatureMovie from "../../components/FeatureMovie";

export default () => {

    const [trailer,setTrailer] = useState(null);
    const [movieInfo,setMovieInfo] = useState(null);
    const [blackHeader,setBlackHeader] = useState(false)
    const {ID , TV} = useParams();
    let type = ''

    if(TV == 'undefined'){
      type='movie'
    }else{
      type='tv'
    }

    useEffect(()=> {
        const load = async () => {
        let video = await tmdb.getTrailer(ID,type)
        console.log(video)
        setTrailer(video)
    }
    load();
    },[]);

    useEffect(() => {
        const load = async () => {
        let movie = await tmdb.getMovieInfo(ID,type)
        setMovieInfo(movie)
    }
    load();},[]);

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

    return(
        <div className="bloco">
            <Header black={blackHeader}/>
            {movieInfo && <FeatureMovie item={movieInfo} type={type} />}
        <div>
            {movieInfo && <Trailer item={trailer} />}
        </div>
        </div>
    )
}
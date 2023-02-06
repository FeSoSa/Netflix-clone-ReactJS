import { height, width } from "@mui/system";
import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import tmdb from "../tmdb";
import './Trailer.css'



export default (item) => {
console.log(item)
    return(
        <div className="Bloco">

            <div>
                {item.item.results.length > 0 ?
                <div>
                    <h2>Assista a Prévia!</h2>
                    <YouTube iframeClassName="video" videoId={`${item.item.results[0].key}`}/>
                </div>
                    :''}
            </div>


        </div>
    )
}
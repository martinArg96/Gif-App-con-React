import { getGifs } from "../helpers/getGifs"
import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(   category    );
    console.log({isLoading})



    return(
        <>
            <h3>{category}</h3>

            {//esto es un if (con un and logico) medio raaaaaaro
                isLoading && (<h2>Cargando...</h2>)    
            }

            <div className="card-grid">
                {
                    images.map( image => (
                        // <li key= {image.id}>{image.title}<img src={image.url} alt="hola" /></li>
                        <GifGridItem 
                            key={image.id}
                            { ...image  }
                        />
                        )
                    )
                }
            </div>
        </>
    )




}
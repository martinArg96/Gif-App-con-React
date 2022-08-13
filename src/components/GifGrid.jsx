import { getGifs } from "../helpers/getGifs"
import { useEffect } from "react";



export const GifGrid = ({category}) => {

    useEffect( ()=> {//sirve para que no se pidan a la api todo el tiempo
        getGifs(category)

    },[])//dependencias,, osea cuando se va a volver a ejecutar

    

    return(
        <>
            <h3>{category}</h3>

        
        </>
    )




}
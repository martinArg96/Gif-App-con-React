import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages)
        setIsLoading(false)
}

    useEffect( ()=> {//sirve para que no se pidan a la api todo el tiempo
        getImages()

    },[])//dependencias,, osea cuando se va a volver a ejecutar

    console.log(images)

    return {
        images,
        isLoading
    }
}

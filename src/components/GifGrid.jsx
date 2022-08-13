import { getGifs } from "../helpers/getGifs"
import { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";



export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])


const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages)
}

    useEffect( ()=> {//sirve para que no se pidan a la api todo el tiempo
        getImages()

    },[])//dependencias,, osea cuando se va a volver a ejecutar

    console.log(images)

    return(
        <>
            <h3>{category}</h3>

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
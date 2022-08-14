// import React from 'react'////despues de la version 17 de react no es necesario
import { useState } from "react"
import { AddCategory, GifGrid } from "./components"


const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([])

    const onAddCategory =( newCategory) => {
        console.log(newCategory)

        if(categories.includes(newCategory)) return
        setCategories([...categories,newCategory])
        //setCategories(categories.push('Homero simpson')) NO USAR PUSH PARA ESTO EN REACT
        // setCategories([...categories,'valorant'])
        // setInputVAlue('')
        
    
    }

    return (
        <>
            {/* titulo */}
            <h1>App de gifs de martin</h1>

            {/* input */}
            <AddCategory 
                onNewCategory={ (evento) => onAddCategory(evento)} 
            />


            <div className="container">

            { categories.map( (category) =>
                <GifGrid 
                key= {category}
                category = {category}
                />
                ) }
                </div>

            
        </>
    )
}

export default GifExpertApp
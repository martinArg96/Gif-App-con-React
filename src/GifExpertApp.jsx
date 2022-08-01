// import React from 'react'////despues de la version 17 de react no es necesario
import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import {GifGrid} from './components/GifGrid'

const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Maradona'])

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
            <h1>GifMartinApp</h1>

            {/* input */}
            <AddCategory 
                onNewCategory={ (evento) => onAddCategory(evento)} 
            />


            
            { categories.map( (category) =>
                <GifGrid 
                    key= {category}
                    category = {category}
                />
            ) }

            
        </>
    )
}

export default GifExpertApp
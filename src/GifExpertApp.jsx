// import React from 'react'////despues de la version 17 de react no es necesario
import { useState } from "react"
import { AddCategory } from "./components/AddCategory"


const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Maradona','Ginobili'])

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

            <button onClick={onAddCategory} >Agregar</button>
            <ol>
                { categories.map(category =>{
                    return <li key={ category }  >  {category}  </li>
                }) }
                {/* <li></li> */}
            </ol>
        </>
    )
}

export default GifExpertApp
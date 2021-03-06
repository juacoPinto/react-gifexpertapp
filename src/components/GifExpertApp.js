import React, { Fragment, useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {
  

    const [categories, setCategories] = useState(['One Punch']);
  
  
    return (
    <Fragment>
        <h2>GifExpertApp</h2>

        <AddCategory setCategories = {setCategories}/>
        
        <hr />

 

        <ol>
            {categories.map(category =>  (
                <GifGrid  
                    category = {category}
                    key = {category}    
                    />)
            
            )}
        </ol>


    </Fragment>
    
    
  )
}

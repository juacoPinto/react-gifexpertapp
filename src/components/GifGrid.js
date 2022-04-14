import React, { Fragment, /* useEffect, useState  */} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'; 
export const GifGrid = ({category}) => {
  
    const {data:images,loading} = useFetchGifs(category);
    
     
    
    return (
        <Fragment>
            <h3> {category} </h3>
            <p>{loading?'cargando':'data cargada'}</p>
            
                {
                    images.map(img => (
                        <GifGridItem 
                            key = {img.id}
                            {...img}

                        />
                    ))
                }
            
        </Fragment>
    
  )
}

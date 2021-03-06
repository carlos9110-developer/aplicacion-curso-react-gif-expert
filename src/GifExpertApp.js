// funcional components
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Category']); 
    
    return(
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={setCategories} />
            <ol>    
                {
                    categories.map( category => 
                        <GifGrid 
                            category={category}
                            key={category}
                        />
                    )
                }
            </ol>
        </>
    );
};



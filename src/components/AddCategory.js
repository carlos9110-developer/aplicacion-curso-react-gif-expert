import React, { useState } from 'react';
import PropTypes  from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit  =   (e) =>{
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            //setCategories( [inputValue, ...cateories] ); // podemos añadir pasando como referencia la lista de categorias, recibiendolas en las propiedades del componente
            setCategories( category => [ inputValue, ...category] ); // podemos añadir sin pasar como referencia la lista de categorias, si no que utilizamos el callback de la función
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={inputValue}
                onChange={ handleInputChange  }    
            />
        </form>
    );
};


AddCategory.propTypes  = {
    setCategories: PropTypes.func.isRequired
}

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs   = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });


    // esto se hace para que esta función solo se llame la primera vez que se renderiza el componente
    useEffect(  () =>{
        getGifs(category)
            .then( imgs => {

                setTimeout(() => {

                    setState({
                        data: imgs,
                        loading: false
                    }); 
                    
                }, 4000);

                
            });
    }, [ category ]); // aca le estamos diciendo que si la categoria cambia, vuelve a disparar esta función

    

    return state;

}
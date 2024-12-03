import { useEffect } from "react";
import { useState } from "react";


const Receipes = () => {
    const [receipes,setReceipes] =useState([])

    useEffect(()=>{
        fetch('recepies.json')
        .then(res =>res.json())
        .then(data=>setReceipes(data))

    },[])
    return (
        <div>
            
        </div>
    );
};

export default Receipes;
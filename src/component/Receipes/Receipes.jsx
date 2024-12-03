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
        <div className="md:w-2/3">
            <h1>Recipies:{receipes.length}</h1>
        </div>
    );
};

export default Receipes;
import { useEffect } from "react";
import { useState } from "react";
import Receipe from "../Receipe/Receipe";


const Receipes = () => {
    const [receipes,setReceipes] =useState([])

    useEffect(()=>{
        fetch('recepies.json')
        .then(res =>res.json())
        .then(data=>setReceipes(data))

    },[])
    return (
        <div className="md:w-2/4 grid grid-cols-3 gap-10 my-10">
            {/* <h1 className="text-3xl">Recipies:{receipes.length}</h1> */}
            {
                receipes.map(receipe => <Receipe key={receipe.id} receipe={receipe}></Receipe>)
            }
        </div>
    );
};

export default Receipes;
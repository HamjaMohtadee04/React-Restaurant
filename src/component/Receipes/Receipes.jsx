import { useEffect } from "react";
import { useState } from "react";
import Receipe from "../Receipe/Receipe";
import PropTypes from "prop-types";


const Receipes = ({handleAddtoCookTable}) => {
    const [receipes,setReceipes] =useState([])

    useEffect(()=>{
        fetch('recepies.json')
        .then(res =>res.json())



        
        .then(data=>setReceipes(data))

    },[])
    return (
        <div className="md:w-2/3 grid grid-cols-2 gap-10 my-10">
            {/* <h1 className="text-3xl">Recipies:{receipes.length}</h1> */}
            {
                receipes.map((receipe) => <Receipe
                     key={receipe.id} 
                     receipe={receipe}
                     handleAddtoCookTable={handleAddtoCookTable}
                     
                ></Receipe>)
            }
            
        </div>
    );
};
Receipes.propTypes ={
    handleAddtoCookTable:PropTypes.func
}

export default Receipes;
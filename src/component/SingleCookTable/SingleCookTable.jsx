import PropTypes from "prop-types";
// import { useState } from "react";

const SingleCookTable = ({singleCookTable,setCookTable}) => {
    const {recipe_name,preparing_time,calories,recipe_id} = singleCookTable 
//         const [cook,setCook] =useState(0)

//  const [cook,setCook] = useState(0)
  // const handlePrepareButton =(singleCookTable)=>{
    
    
   
  // }
  const handlePrepareButton = () => {
    // Filter out the selected recipe by recipe_id
    setCookTable((prevCookTable) =>
      prevCookTable.filter((item) => item.recipe_id !== recipe_id)
    );
  }
    return (
       
        <tr>
            <td>{recipe_id}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
             <td><button className=" bg-green-500 rounded-xl p-2" onClick={()=>handlePrepareButton(singleCookTable)}>Preparing</button></td>
          </tr>
         
    );
};

SingleCookTable.propTypes ={
    singleCookTable:PropTypes.object,setCookTable:PropTypes.func
}
export default SingleCookTable;
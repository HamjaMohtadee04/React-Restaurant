import PropTypes from "prop-types";

const SingleCookTable = ({singleCookTable}) => {
    const {recipe_name,preparing_time,calories,recipe_id} = singleCookTable 
    return (
       
        <tr>
            <td>{recipe_id}</td>
            <td>{recipe_name}</td>
            <td>{preparing_time}</td>
            <td>{calories}</td>
             <td><button className=" bg-green-500 rounded-xl p-2">Preparing</button></td>
          </tr>
         
    );
};

SingleCookTable.propTypes ={
    singleCookTable:PropTypes.object
}
export default SingleCookTable;
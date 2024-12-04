import PropTypes from 'prop-types';
import { FaRegClock } from "react-icons/fa";
import { GiBurningEye } from "react-icons/gi";
const Receipe = ({receipe,handleAddtoCookTable}) => {
  const {recipe_name,short_description,recipe_image,preparing_time,calories} = receipe;
    return (
        <div className=''>
           
    <div className="card bg-base-100 w-50 shadow-2xl rounded-xl p-5 justify-center">
  <figure>
    <img className='rounded-xl'
      src={recipe_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold mt-5">
      {recipe_name}
    </h2>
    <p className='text-center  mt-5'>{short_description}</p>
    <div className="card-actions justify-between flex p-2 mt-5 text-center">
      <div className="badge badge-outline flex gap-2 font-semibold"><FaRegClock /><span className='-my-1'>{preparing_time}</span></div>
      <div className="badge badge-outline flex gap-2 font-semibold"><GiBurningEye /><span className='-my-1'>{calories}</span></div>
    </div>
    <hr />
    <div className='bg-green-500 rounded-xl font-semibold text-center p-2 mt-5'>
    <button onClick={handleAddtoCookTable} className="btn btn-success">Want to cook</button>
    </div>
  </div>
</div>

        </div>
    );
};

Receipe.propTypes={
    receipe: PropTypes.object,
    handleAddtoCookTable:PropTypes.func
}
export default Receipe;
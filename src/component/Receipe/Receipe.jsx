import PropTypes from 'prop-types';
const Receipe = ({receipe}) => {
  const {recipe_name,short_description,recipe_image} = receipe;
    return (
        <div className=''>
           
           <div className="card bg-base-100 w-50 shadow-2xl rounded-xl p-5 justify-center">
  <figure>
    <img 
      src={recipe_image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">
      {recipe_name}
    </h2>
    <p className='text-center text-wrap'>{short_description}</p>
    <div className="card-actions justify-between flex p-2 mt-5">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
    <hr />
    <div className='bg-green-500 rounded-xl font-semibold text-center p-2 mt-5'>
    <button className="btn btn-success">Want to cook</button>
    </div>
  </div>
</div>

        </div>
    );
};

Receipe.propTypes={
    receipe: PropTypes.object
}
export default Receipe;
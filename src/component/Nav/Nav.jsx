// import image from '../../assets/images/restaurant.jpg'
import './Nav.css'
const Nav = () => {
    return (
       <div className='NavContainer justify-center text-center'>

        <div className=''>
        {/* <img className='rounded-xl w-25' src={image} alt="" /> */}
          <h2 className='text-5xl font-bold text-white p-2 m-5'>Discover an exceptional cooking <br /> <span> class tailored for you!</span></h2>
          <p className='text-2xl font-semibold text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas repudiandae, deleniti expedita debitis ut reprehenderit possimus rem similique dignissimos maxime, amet impedit nam. Eum, omnis distinctio officia fuga dignissimos libero!</p>
        </div>
        <div className='flex gap-10 mr-5 m-5 justify-center'>
        <button className="text-2xl  font-semibold bg-lime-700 rounded-xl p-2">Explore Now</button>
        <button id='button2' className="text-2xl  font-semibold bg-slate-200  rounded p-2">Our Feedback</button>
        </div>

       </div>
    );
};

export default Nav;
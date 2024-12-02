const Header = () => {
    return (
        <div className="flex justify-between items-center p-4 max-w-7xl mx-auto" >
        <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
         <ul className="flex gap-10 text-center text-2xl">
            <li>Home</li>
            <li>Receipes</li>
            <li>About</li>
            <li>Search</li>
         </ul>

         <div className="flex justify-between gap-5 font-bold ml-3">
 <div className="p-2 justify-center bg-yellow-50">
 <button className="btn btn-ghost btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </button>

         <input type="text" placeholder="Search" className="input input-bordered 
         w-24 md:w-auto" />

 </div>
      
<div className="w-10 rounded-full btn btn-ghost btn-circle avatar">
  <img
    alt="Tailwind CSS Navbar component"
    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
</div>
         </div>

        </div>
    );
};

export default Header;
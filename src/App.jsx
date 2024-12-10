import { useState } from 'react'
import './App.css'
import Content from './component/Content/Content'
import CookTable from './component/CookTable/CookTable'
import Header from './component/Header/Header'
import Nav from './component/Nav/Nav'
import Receipes from './component/Receipes/Receipes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const  [cookTable,setCookTable] = useState([])
  const [currentlyCooking, setCurrentlyCooking] = useState([]);

  const handleAddtoCookTable = (recipe) =>{
  //  const newCookTable = [...cookTable,receipe]
  //  setCookTable(newCookTable)
  //  //remove recipe_id
  // //  const remainingReceipe = cookTable.filter(cookTable => cookTable.recipe_id !==recipe_id)
  // //  setCookTable(remainingReceipe)
  // // 
   // Check if the recipe is already in the Want to Cook table
   const isAlreadyAdded = cookTable.some((item) => item.recipe_id === recipe.recipe_id);

   if (isAlreadyAdded) {
     // Show a toast notification if the recipe already exists
     toast.error("This recipe is already added to Want to Cook!");
   } else {
     // Add the recipe if it doesn't exist
     const newCookTable = [...cookTable, recipe];
     setCookTable(newCookTable);
   }
  }
  

  return (
    <>
      <div>
        <Header></Header>
     <div className='my-10 md:flex max-w-7xl mx-auto'>
     <Nav>
     </Nav>
     </div>
     <Content></Content>
    
<div className='md:flex my-10 justify-between mx-20 p-15 gap-20'>
<Receipes handleAddtoCookTable={handleAddtoCookTable}></Receipes>
<CookTable
 cookTable={cookTable} 
 setCookTable ={setCookTable} 
 currentlyCooking={currentlyCooking}
 setCurrentlyCooking={setCurrentlyCooking}
 ></CookTable>
</div>

      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App

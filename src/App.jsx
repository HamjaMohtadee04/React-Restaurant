import { useState } from 'react'
import './App.css'
import Content from './component/Content/Content'
import CookTable from './component/CookTable/CookTable'
import Header from './component/Header/Header'
import Nav from './component/Nav/Nav'
import Receipes from './component/Receipes/Receipes'
function App() {
  const  [cookTable,setCookTable] = useState([])

  const handleAddtoCookTable = receipe =>{
    console.log('adding soon')
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
<CookTable></CookTable>
</div>

      </div>
    </>
  )
}

export default App

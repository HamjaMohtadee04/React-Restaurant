import './App.css'
import Content from './component/Content/Content'
import CookTable from './component/CookTable/CookTable'
import Header from './component/Header/Header'
import Nav from './component/Nav/Nav'
import Receipes from './component/Receipes/Receipes'
function App() {

  return (
    <>
      <div>
        <Header></Header>
     <div className='my-10'>
     <Nav>
     </Nav>
     </div>
     <Content></Content>
    
<div className='md:flex  justify-between mx-20 p-15 gap-20'>
<Receipes></Receipes>
<CookTable></CookTable>
</div>

      </div>
    </>
  )
}

export default App

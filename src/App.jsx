import './App.css'
import Content from './component/Content/Content'
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
     <Receipes></Receipes>
      </div>
    </>
  )
}

export default App

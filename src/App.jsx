import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './login/Login'
import Registration from './registration/registration'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/registration' element={ <Registration/> } />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

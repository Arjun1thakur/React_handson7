import { Routes,Route } from 'react-router-dom';
import Home from './Home';
import Student from './student';
import About from './About';
import Entry from './Components/StudentEntry';
import Error0 from './Error';
import Navbar from "./Components/navbar"
import { createContext } from 'react';
import Update from './Components/CreateEle';



let ContextX = createContext()

function Main(){
    return (
        <>
        <Navbar/>
        {
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/student' element={<Student/>}/>
                <Route path='/edit' element={<Update/>}/>
                <Route path='/contact' element={<About/>}/>
                <Route path='/Entry-Data' element={<Entry/>}/>
                <Route path='*' element={<Error0/>}/>
            </Routes>
        }
        </>
    )
}
export default Main
export {ContextX}
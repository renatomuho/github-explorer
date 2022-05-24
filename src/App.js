import React from 'react'
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {GithubProvider} from "./context/github/GithubContext"
import {AlertProvider} from "./context/alert/AlertContext"
import User from "./Pages/User"

function App() {
    return (
        <GithubProvider>
            <AlertProvider>
                <Router>
                    <div className="flex flex-col justify-between h-screen">
                        <Navbar/>
                        <main className='container mx-auto px-3 pb-12'>
                            <Routes>
                                <Route path='/about' element={<About/>}/>
                                <Route path='/*' element={<NotFound/>}/>
                                <Route path='/user/:login' element={<User/>}/>
                                <Route exact path='/' element={<Home/>}/>
                            </Routes>
                        </main>
                        <Footer/>
                    </div>
                </Router>
            </AlertProvider>
        </GithubProvider>
    )
}

export default App

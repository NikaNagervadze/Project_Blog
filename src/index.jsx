import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BlogProvider } from '../src/assests/components/BlogContext';

import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import Login from './pages/Login';

class App extends Component{
    render(){
        return (
            <React.Fragment>
                <BrowserRouter>
                    <BlogProvider>
                        <Routes>
                            <Route path='/' index element={<Login />} />
                            <Route path='/home' element={<Home />} />
                            <Route path='/createBlog' element={<CreateBlog />} />
                        </Routes>
                    </BlogProvider>
                </BrowserRouter>
            </React.Fragment>   
        )
    }
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
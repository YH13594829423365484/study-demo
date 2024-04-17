import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { AuthRoute } from '@/components/AuthRoute';


import Login from '@/pages/login';
import Layout from '@/pages/layout';
const App = () => {
    return (
        <BrowserRouter>
        <div className='App'>
            <Routes>
                <Route path='/' element={<AuthRoute>{<Layout />}</AuthRoute>}></Route>
                
                <Route path='/login' element={<Login />}></Route>
            </Routes>
        </div>
        </BrowserRouter>
        
    );
};

export default App;
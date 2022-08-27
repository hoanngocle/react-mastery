import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function AppHome() {
    return (
        <div className='AppHome'>
            <Header title='React JS Blog' />
            <Nav />
            <Routes>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/post'>
                    <NewPost />
                </Route>
                <Route path='/post/:id'>
                    <PostPage />
                </Route>
                <Route path='/about' component={About} />
                <Route path='*' component={Missing} />
            </Routes>
            <Footer />
        </div>
    );
}

export default AppHome;

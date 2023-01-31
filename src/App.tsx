import React, {Suspense, useContext, useState} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.asycn";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {
    const {theme, handleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={handleTheme}>switch theme</button>
            <Link to={'/'}>
                Main page link
            </Link>
            <Link to={'/about'}>
                About page
            </Link>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/about'} element={<AboutPageAsync/>}/>
                        <Route path={'/'} element={<MainPageAsync/>}/>
                    </Routes>
                </Suspense>
        </div>
    );
};

export default App;
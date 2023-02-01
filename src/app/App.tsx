import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from "react-router-dom";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";

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
                        <Route path={'/about'} element={<AboutPage />}/>
                        <Route path={'/'} element={<MainPage />}/>
                    </Routes>
                </Suspense>
        </div>
    );
};

export default App;
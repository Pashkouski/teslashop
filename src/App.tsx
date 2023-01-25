import React from 'react';
import './App.css';
import {Header} from "./component/Header/Header";
import {Footer} from "./component/Footer/Footer";
import {HashRouter} from "react-router-dom";
import {Content} from "./component/Content/Content";


function App() {
    return (
        <div className="App">
            <HashRouter>
                <Header/>
                <Content/>
                <Footer/>
            </HashRouter>
        </div>
    );
}

export default App;

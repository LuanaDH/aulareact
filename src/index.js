import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
//import Post from './components/post';
import App from './components/app';

ReactDOM.render(
    ( <App title= "Formulário"/>
    // <div className="content">
    //     <div className="panel">
    //         <div className="penel-header">
    //             <h1 className="panel-title">Hello World</h1>
    //         </div> 
    //             <Post text= "Olá Mundo!" title= "Primeiro Post"/> 
    //             <Post text= "Eu sou um post" title= "Segundo Post"/>
    //             <Post text= "Eu sou outro post" title= "Terceiro Post"/>
    //     </div>
    // </div>
    ),
    document.getElementById('root')
);


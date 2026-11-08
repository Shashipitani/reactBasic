import React from 'react';
import ReactDOM from 'react-dom/client';
const el=React.createElement("div",{id:'heading'},
        React.createElement('h1',null,'Hello React'),
        React.createElement("div",null,
        [React.createElement('h2',null,'Hello React H2')]
    ))
    
    const root=ReactDOM.createRoot(document.getElementById('root'));
    root.render(el);
// const root=document.getElementById('root');
// const heading=document.createElement('h1');
// heading.textContent="Hello React";
// root.appendChild(heading);
     
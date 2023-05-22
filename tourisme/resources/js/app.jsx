import './bootstrap';
import App from "./Routes/App";
// import Store from "./config/store";
import ReactDOM from 'react-dom';
import React from 'react';
// const root = ReactDOM.createRoot(document.getElementById('app'));
// root.render(
//   <Provider store={Store}>
//     <App />
//   </Provider>
// );

if(document.getElementById('app')){
    ReactDOM.render(<App/>,document.getElementById('app'));
}

// ReactDOM.createRoot(document.getElementById('app')).render(
//         <App/>
// );
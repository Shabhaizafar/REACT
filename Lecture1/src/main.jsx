import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { useState } from 'react';


// createRoot(document.getElementById('root')).render(
//   <App />
// )

// var c = prompt();



const rootDiv = document.getElementById('root');

const render1 =  createRoot(rootDiv);

// render1.render(<App fname={c} />);


render1.render(<App/>);

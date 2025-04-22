import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from './Components/Layout'
import Cake from './Components/Cake'
import Cookies from './Components/Cookies'
import Bread from './Components/Bread'
import Home from './Components/Home'

export default function App(){
    return (
      
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="bread" element={<Bread/>}/>
              <Route path="cookies" element={<Cookies/>}/>
              <Route path="cake" element={<Cake/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

import './App.css'
import Header from './Components/header';
import Main from './Components/Main';
import Aside from './Components/Aside';
import Footer from './Components/Footer';

function App() {
 
  return (
    <div className="layout">
      <Header/>
      <div className="container">
        <Main/>
        <Aside/> 
      </div>
      <Footer/>
    </div>
  );
};

export default App;





import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './Pages/Home';
import AboutUs from './Pages/aboutUs';
import contactUs from './Pages/contactUs';
import Project from './Pages/project';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
          <Routes>
            <Route path="/" exact Component={Home}/>
            <Route path="/contactUs" exact Component={contactUs}/>
            <Route path="/aboutUs" exact Component={AboutUs}/>
            <Route path="/project" exact Component={Project}/>
           
          </Routes>
          <Footer/>
      </BrowserRouter>
      
      
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;

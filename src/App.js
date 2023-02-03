import logo from './logo.svg';
import './App.css';
import MyButton from './components/myButton';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import React, {useState} from "react";

const App =() => {
  const navHeading = "Navigation Bar";
  const navText = "Social Media";

  const clicked = () =>{
    return alert("button clicked!");
  }

  const paragraf = () =>{
    return (
      <div>
        <h3>Lorem Ipsum</h3>
        <marquee>Loreeem ipsuuum</marquee>
        <i>Lorem Ipsum </i>
      </div>
    );
  }


  const [getNavbarValue, setNavbarValue] = useState("")

  const changeNavbarValue = () =>{
    setNavbarValue("My Contact");
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar navValue = {getNavbarValue} navText={navText} navHeading={navHeading}></Navbar>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing ReactJs
        </p>
        <button onClick={() => changeNavbarValue()}>Ubah Navigasi</button>
        <MyButton clicked={clicked}></MyButton>
        <Footer paragraf={paragraf}></Footer>
      </header>
    </div>
  );
}

export default App;

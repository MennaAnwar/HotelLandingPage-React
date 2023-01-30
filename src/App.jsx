import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Contact />
    </>
  );
}

export default App;

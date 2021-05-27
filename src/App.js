import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './components/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index"
import About from "./pages/About"


function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Header />
                <Route exact path="/about" component={About} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
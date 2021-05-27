import React from "react";
import Navbar from "./components/Navbar/index"
// import {BrowserRouter as Router, Route } from "react-router";

function App () {
    return (
        // <Router>
            <div>
                <Navbar />
                {/* <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/porfolio" component={Porfolio} />
                <Route exact path="/contact" component={Contact} />
                <Footer /> */}
            </div>
        // </Router>
    );
}

export default App;
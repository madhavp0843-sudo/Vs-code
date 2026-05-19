import React from "react";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";

import myImage from "./images/welcome pic.jpg";

function App() {

  console.log("React app started");

  let userName = "Madhav";

  return (
    <div className="container mt-5">
      
      <div className="card text-center p-3 mx-auto" style={{width:"400px"}}>

        <h2 style={{color:"blue"}}>
          Welcome to React Learning, {userName}
        </h2>

        {/* Internal Image */}
        <img
          src={myImage}
          alt="local"
          className="img-fluid mx-auto"
          style={{width:"200px"}}
        />

        <br />

       
        <img
          src="https://www.istockphoto.com/vector/welcome-retro-style-lettering-stock-illustration-invitation-or-greeting-card-stock-gm2199847985-617583594?searchscope=image%2Cfilm"
          alt="react"
          className="img-fluid"
        />

        <p className="text-primary mt-3">
          This is your first card with images and styles!
        </p>

      </div>

    </div>
  );
}

export default App;
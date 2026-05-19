import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


import myPhoto from "./images/download.jpg";

function App() {

 
  const name = "Madhav";
  const description = "I am learning React and building simple projects.";

 
  const cardStyle = {
    border: "2px solid black",
    padding: "20px",
    backgroundColor: "#f2f2f2",
    width: "350px",
    textAlign: "center",
    borderRadius: "10px"
  };

  return (
    <div className="container d-flex justify-content-center mt-5">

      <div style={cardStyle}>

        <h2>{name}</h2>

        <p>{description}</p>

      
        <img
          src={Images} />
          alt="profile"
          width="200"
          className="img-fluid"
        

        <br /><br />

      
        <img
          src="https://www.magnific.com/free-vector/blue-circle-with-white-user_145857007.htm#fromView=keyword&page=1&position=0&uuid=8237edf7-dcd4-4644-b836-10d8cd665647&query=User+profile"
          alt="external"
          className="img-fluid"
        />

      </div>

    </div>
  );
}

export default App;
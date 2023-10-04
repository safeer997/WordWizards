import React, { useState } from "react";

export default function About(props) {
  // const [myStyle,setMyStyle] = useState({
  //     color:'black',
  //     backgroundColor:'white'
  // })

  let myStyle = {
    color: props.mode === "dark" ? "white" : "black",
    backgroundColor: props.mode === "dark" ? "#2e5c85" : "white",
  };

  return (
    <>
      <div className="container my-2" style={myStyle}>
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                About TextUtils
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                With a user-friendly interface and powerful features, TextUtils
                is your go-to platform for text editing and analysis.TextUtils
                is designed to help writers, students, and professionals
                streamline their text editing process.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Our Mission
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Our mission is to provide top-notch text manipulation tools that
                empower you to work efficiently.Explore a wide range of text
                formatting, transformation, and analysis tools right here at
                TextUtils.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Site information
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                Developed By : Safeer
                <br />
                Email : Example@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

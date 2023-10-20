import React from "react";

export default function About(props) {
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
                About WordWizards
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                With a user-friendly interface and powerful features,
                WordWizards is your go-to platform for text editing and
                analysis.WordWizards is designed to help writers, students, and
                professionals streamline their text editing process. Customize
                your viewing experience with dark and light modes. Switch
                between themes to suit your preference and reduce eye strain
                during extended usage.Quickly analyze your text with word and
                character counting functionality.WordWizards gives you accurate
                statistics about your text content.
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
                WordWizards.
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
                Made with &#10084; by Safeer Alam
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

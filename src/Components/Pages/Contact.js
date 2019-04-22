import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (


      <div className="contact" style={{color: 'white'}}>
        <h3>Contact Page</h3>

      <div>
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3 className="display-3 mb-4">Contact Martyria</h3>
                  <p className="lead"> We care about your experience!</p> <hr />
                  <p className="lead"> Record, Report, Testimony, Witness!</p>
                  <hr />
                  <h3>Meet the developers: </h3>
                  <div class="grid-container">
                    <div class="col-md-6">
                      <h3>Cameron LaVallie</h3>
                      <img
                        className="Cam"
                        src={require("../Img/cam.jpg")}
                        alt="Cam"
                      />

                      {/* <form
                        action="https://www.facebook.com/cameron.lavallie"
                        target="_blank"
                      >
                        <input
                          type="submit"
                          style={{ background: "#EFEDE1", color: "black" }}
                          value="Follow me"
                        />
                      </form> */}
                    </div>
                    <div class="col-md-6">
                      <h3>Matthew Gunderson</h3>
                      <img
                        className="Matt"
                        src={require("../Img/matt.jpg")}
                        alt="Matt"
                      />
                    </div>

                    <div class="col-md-6">
                      <h3>Morgan Muse</h3>
                      <img
                        className="Mo"
                        src={require("../Img/mo.jpg")}
                        alt="Mo"
                      />
                    </div>
                    <div class="col-md-6">
                      <h3>Paul Rase</h3>
                      <img
                        className="Paul"
                        src={require("../Img/paul.jpg")}
                        alt="Paul"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;

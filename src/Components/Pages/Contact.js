import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
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
                  <p>Meet the developers: </p>
                  <div class="grid-container">
                    <div class="col-md-6">
                      <h3>Cameron LaVallie</h3>
                      < img className = "Cam" src = {require('../Img/cam.jpg')} alt="Cam"/>
                      <p className="dev-info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit...
                      </p>

                      <p />
                    </div>
                    <div class="col-md-6">
                      <h3>Matthew Gunderson</h3>
                      < img className = "Matt" src = {require('../Img/matt.jpg')} alt="Matt"/>
                      <p className="dev-info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit...
                      </p>
                    </div>
                    <br />
                    <div class="col-md-6">
                      <h3>Morgan Muse</h3>
                      < img className = "Mo" src = {require('../Img/mo.jpg')} alt="Mo"/>
                      <p className="dev-info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit...
                      </p>
                    </div>
                    <div class="col-md-6">
                      <h3>Paul Rase</h3>
                      < img className = "Paul" src = {require('../Img/paul.jpg')} alt="Paul"/>
                      <p className="dev-info"> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit...
                      </p>
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

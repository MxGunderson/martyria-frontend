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
                  <h3 className="display-3 mb-4">The team behind Martyria</h3>
                  <p className="lead"> Record, Report, Testimony, Witness!</p>
                  <div class="grid-container">
                    <div class="col-md-6">
                      <h3>Cameron LaVallie</h3>
                      < img className="Cam" src={require('../Img/cam.jpg')} alt="Cam" />
                      <p className="dev-info">
                        Location: Fortworth, TX
                        <br />
                        Favorite Food: Surf and Turf
                        <br />
                        Whats next? -  coding with Christ and shooting for the moon... dreaming of work with NASA!
                      </p>

                      <p />
                    </div>
                    <div class="col-md-6">
                      <h3>Matthew Gunderson</h3>
                      < img className="Matt" src={require('../Img/matt.jpg')} alt="Matt" />
                      <p className="dev-info">
                        Location: Eureka, CA
                        <br />
                        Favorite Food: Old fashion burger and fries
                          <br />
                        Whats next? - I am excited for the future in starting my new career in web developing and making an impact in the industry.
                      </p>
                    </div>
                    <br />
                    <div class="col-md-6">
                      <h3>Morgan Muse</h3>
                      < img className="Mo" src={require('../Img/mo.jpg')} alt="Mo" />
                      <p className="dev-info">
                        Location: Dallas, TX
                        <br />
                        Favorite Food: Apples and peanut butter!
                          <br />
                        Whats next? -
                      </p>
                    </div>
                    <div class="col-md-6">
                      <h3>Paul Rase</h3>
                      < img className="Paul" src={require('../Img/paul.jpg')} alt="Paul" />
                      <p className="dev-info">
                        Location: Omaha, NE
                        <br />
                        Favorite Food:
                          <br />
                        Whats next?
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
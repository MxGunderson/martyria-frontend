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
                  <div className="contact-header">
                    <h3 className="display-3 mb-4">The team behind Martyria</h3>
                    <p className="lead"> Record, Report, Testimony, Witness!</p>
                  </div>
                  </div>
                  <div className="grid-container">
                    <div className="col-md-6">
                      <h3>Cameron LaVallie</h3>
                      < img className="Cam" src={require('../Img/cam.jpg')} alt="Cam" />
                      <p className="dev-info">
                        Location: Fort Worth, TX
                        <br />
                        Favorite Food: Surf and Turf
                        <br />
                        Whats next? - Looking to make a positive impact in the world and industry as a developer.
                      </p>
                      <a rel="noopener noreferrer"      href="https://www.linkedin.com/in/cameron-lavallie-53b5239a/"   target="_blank" >More about Cameron</a>

                    </div>
                    <div className="col-md-6">
                      <h3>Matthew Gunderson</h3>
                      < img className="Matt" src={require('../Img/matt.jpg')} alt="Matt" />
                      <p className="dev-info">
                        Location: Eureka, CA
                        <br />
                        Favorite Food: Old fashion burger and fries
                          <br />
                        Whats next? I am excited for the future in starting my new career in web developing and making an impact in the industry.
                      </p>
                      <a rel="noopener noreferrer" href="https://www.linkedin.com/in/matthew-gunderson-60bb55145/" target="_blank">More about Matt</a>
          
                    </div>
                    <br />
                    <div className="col-md-6">
                      <h3>Morgan Muse</h3>
                      < img className="Mo" src={require('../Img/mo.jpg')} alt="Mo" />
                      <p className="dev-info">
                        Location: Dallas, TX
                        <br />
                        Favorite Food: Apples and peanut butter!
                          <br />
                        Whats next ? Working on furthering education with web security to aid investigators in tracking sex traffickers.
                      </p>
                      <a href="https://www.linkedin.com/in/mmuse191/" rel="noopener noreferrer"
                      target="_blank">More about Morgan</a>
                      
                    </div>
                    <div className="col-md-6">
                      <h3>Paul Rase</h3>
                      < img className="Paul" src={require('../Img/paul.jpg')} alt="Paul" />
                      <p className="dev-info">
                        Location: Omaha, NE
                        <br />
                        Favorite Food: New York-style pizza 
                          <br />
                        Whats next? Full-Stack Development Full-Time
                      </p>
                      <a rel="noopener noreferrer" href="https://www.linkedin.com/in/paul-rase-000b7b171/" target="_blank">More about Paul</a>
                      
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
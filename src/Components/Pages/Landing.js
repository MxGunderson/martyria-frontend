import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Landing extends Component {
  render() {
    return (
      <div>
        <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
              <div className="landing-header">
                <h3 className="display-3 mb-4" style={{color: '#EFEDE1'}}>Welcome To Martyria</h3>
                <p className="lead" style={{color: '#EFEDE1'}}>
                 
                  Sign-up to share testimonies
                  and be encouraged in the goodness of God!
                </p>
                <hr />
                <Link to="/signup" className="btn btn-lg btn-info mr-2" style={{background: '#EFEDE1', color: 'black'}}>
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light" style={{background: '#EFEDE1', color: 'black'}}>
                  Login
                </Link>
              </div>            
              </div>

<div className="carousel-container">
  <div id="myCarousel" className="carousel slide" data-ride="carousel">

    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>


    <div className="carousel-inner">

      <div className="item active">
        <img src={require('../Img/lights.png')} alt="Cam" style={{ width: "100%;"}}/>
        < div className = "carousel-caption" >
          <h5>Alyssa</h5>
          <p> "God is near to us, and in His joyous heart we get new strength. Praying
          for each one of you to see radical blessings and increase of breakthrough come into your life.We all belong to God 's family, which means we belong to each other."</p>
        </div>
      </div>

      <div className="item">
        <img src={require('../Img/lights.png')} alt="Chicago" style={{ width: "100%;"}}/>
        <div className="carousel-caption">
          <h5>Elena</h5>
          <p>"6 years ago my husband and I were praying for healing because we hadn’t been able to get pregnant after years of trying. After a long process of praying, crying out to God, surrendering, remaining at peace and in faith, stepping out for more prayer when led..."</p><br/>
        </div>
      </div>
    
      <div className="item">
        <img src={require('../Img/lights.png')} alt="New York" style={{ width: "100%;"}}/>
        <div className="carousel-caption">
          <h5>Branden</h5>
          <p> "I recently got my first gig doing web development! Someone in my church started a business and I charged them $100 to make a static info site with html, css, and Netlify. Although very basic, I 'm getting paid AND I can use it in my portfolio later on..."</p>
        </div>
      </div>
  
    </div>


    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    
    )
  }
}


export default Landing;
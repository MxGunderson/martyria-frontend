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
                 
                  Signup to share testimonies
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

<div class="carousel-container">
  <div id="myCarousel" class="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>


    <div class="carousel-inner">

      <div class="item active">
        <img src={require('../Img/lights.png')} alt="Cam" style={{ width: "100%;"}}/>
        < div class = "carousel-caption" >
          <h5>Anonymous User</h5>
          <p> "God is near to us, and in His joyous heart we get new strength.Praying
          for each one of you to see radical blessings and increase of breakthrough come into your life.We all belong to God 's family, which means we belong to each other."</p>
        </div>
      </div>

      <div class="item">
        <img src={require('../Img/lights.png')} alt="Chicago" style={{ width: "100%;"}}/>
        <div class="carousel-caption">
          <h5>Anonymous User</h5>
          <p>"6 years ago my husband and I were praying for healing because we hadn’t been able to get pregnant after years of trying. After a long process of praying, crying out to God, surrendering, remaining at peace and in faith, stepping out for more prayer when led.. the Lord put a specific time in our hearts and sure enough we got pregnant with our son that very week. In two weeks from now he turns 5 years old and is such a gift to our family. Since then we’ve had two other beautiful children and we look forward to more if God wills it. He is our healer! He is faithful; He keeps His promises!"</p>
        </div>
      </div>
    
      <div class="item">
        <img src={require('../Img/lights.png')} alt="New York" style={{ width: "100%;"}}/>
        <div class="carousel-caption">
          <h5>Anonymous User</h5>
          < p > I recently got my first gig doing web development!Someone in my church started a business and I charged them $100 to make a static info site with html, css, and Netlify.Although very basic, I 'm getting paid AND I can use it in my portfolio later on. God is always looking to give us opportunities, be expectant!</p>
        </div>
      </div>
  
    </div>


    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
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
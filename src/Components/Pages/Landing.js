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
            <div className="front-testimony" 
            style={{ marginTop: '30px', 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            background: 'white', 
            opacity: .5, 
            width: '800px'
            }}> 
              <p className="text-center" style={{ color: 'black'}}>Author: Branden Kennedy</p>
          <div className="col-md-10">
            <h1 className="lead" style={{ color: 'black'}}>My First Web Job</h1><hr />
            < p className = "lead" style={{ color: 'black'}}> I recently got my first gig doing web development!Someone in my church started a business and I charged them $100 to make a static info site with html, css, and Netlify.Although very basic, I 'm getting paid AND I can use it in my portfolio later on. God is always looking to give us opportunities, be expectant!</p><br/>
            </div>
            </div>
          <div className="front-testimony" 
          style={{ marginLeft: 'auto',
           marginRight: 'auto', 
           marginTop: '10px', 
           alignContent: 'center', 
           background: 'white', 
           opacity: .5, 
           width: '800px'
           }}>  
          <p className="text-center" style={{ color: 'black'}}>Author: Jevens</p>
          <div className="col-md-10">
            <h1 className="lead" style={{ color: 'black'}}>Leading coworkers to Jesus!</h1><hr />
            <p className = "lead" style={{ color: 'black'}}>Just got to have my first deep convo with a coworker whose been struggling and is feeling far from God. It was awesome. I was thinking about giving her a book to read on vacation about identity and women stuff that was not preachy since she admits to being “away from god” and “in shame” and dealing with some old trauma she doesn’t want to revisit. Any suggestions of sweet tender women’s books that could just speak to her where she is right now and also not be “too intense” to receive from a random coworker?</p>
            </div>
            </div>
            <div className="front-testimony" 
            style={{ 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            marginBottom: '60px',
            marginTop: '10px', 
            alignContent: 'center', 
            background: 'white', 
            opacity: .5, 
            width: '800px'
            }}>  
          <p className="text-center" style={{ color: 'black'}}>Author: Alyssa Hughey</p>
          <div className="col-md-10">
            <h1 className="lead" style={{ color: 'black'}}>My encouragement for you!</h1><hr />
            <p className = "lead" 
            style={{ color: 'black'}}>God is near to us, and in His joyous heart we get new strength. Praying for each one of you to see radical blessings and increase of breakthrough come into your life. We all belong to God's family, which means we belong to each other.</p>
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
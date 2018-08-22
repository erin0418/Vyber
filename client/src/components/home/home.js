
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./home.css";
import TonePic from "./tone_thumb.jpg";
import FacePic from "./face_thumb.jpg";
import PersonalityPic from "./personality_thumb.jpg"



import React, { Component } from "react";


export default class Home extends Component {
  state = { link: "", selectedPost: 0, comment:"", post:[] };
  handleInputChange = event => {
    //used for setting link& comment
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  };
  makePost = ()=>{
    this.props.handlePost(this.state.link)
  }
  
 

  render() {
    return(
      <div>
        <div className="container">
        <div className="row">
            <div class="col s10 m5 l4">
                <div className="card">
                    <div className="card-image">
                        <img src={PersonalityPic}/>
                    </div>
                    <div className="card-content">
                        <p>Navigate to our Personality Page for a full personality analysis based on your online posts.</p>
                    </div>
                    <div className="card-action center">
                        <Link to="/personality" className="btn amber darken1 waves-effect waves-orange" >
                            <i className="material-icons left">insert_chart</i>Personality Page</Link>
                    </div>
                </div>
            </div>


            <div className="col s10 m5 l4">
                <div className="card">
                    <div className="card-image">
                        <img src={TonePic}/>
                    </div>
                    <div className="card-content">
                        <p>Navigate to our Tone Page for an analysis that guages the general attitude of your inputed text.</p>
                    </div>
                    <div className="card-action center">
                        <Link to="/tone" className="btn amber darken1 waves-effect waves-orange" >
                            <i className="material-icons left">record_voice_over</i>Tone Page</Link>
                    </div>
                </div>
            </div>

            <div className="col s10 m5 l4">
                <div className="card">
                    <div class="card-image">
                        <img src={FacePic}/>
                    </div>
                    <div className="card-content">
                        <p>Navigate to our Image Page to view the emotional pie chart, age, and smile data for your image.</p>
                    </div>
                    <div className="card-action center">
                        <Link to="/face" className="btn amber darken1 waves-effect waves-orange" >
                            <i className="material-icons left">photo_camera</i>Image Page</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    );
  }
}



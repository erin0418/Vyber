import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return(
      <div>
        <div className="container">
        <div className="row">
            <div class="col s10 m5 l4">
                <div className="card">
                    <div className="card-image">
                        <img src="images/placeholder_thumb.jpg"/>
                    </div>
                    <div className="card-content">
                        <p>Navigate to our Personality Page for a full personality analysis based on your online posts.</p>
                    </div>
                    <div className="card-action center">
                        <a href="personality.html" class="btn amber darken1 waves-effect waves-orange">
                            <i className="material-icons left">insert_chart</i>Personality Page</a>
                    </div>
                </div>
            </div>


            <div className="col s10 m5 l4">
                <div className="card">
                    <div className="card-image">
                        <img src="images/placeholder_thumb.jpg"/>
                    </div>
                    <div className="card-content">
                        <p>Navigate to our Tone Page for an analysis that guages the general attitude of your inputed text.</p>
                    </div>
                    <div className="card-action center">
                        <a href="tone.html" className="btn amber darken1 waves-effect waves-orange">
                            <i className="material-icons left">record_voice_over</i>Tone Page</a>
                    </div>
                </div>
            </div>

            <div className="col s10 m5 l4">
                <div className="card">
                    <div class="card-image">
                        <img src="images/placeholder_thumb.jpg"/>
                    </div>
                    <div className="card-content">
                        <p>Navigate to our Image Page to view the emotional pie chart, age, and smile data for your image.</p>
                    </div>
                    <div className="card-action center">
                        <a href="facImage.html" class="btn amber darken1 waves-effect waves-orange">
                            <i className="material-icons left">photo_camera</i>Image Page</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}



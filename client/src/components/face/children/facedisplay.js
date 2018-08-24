import React, { Component } from "react";

const imgStyle = {
    height: 100,
    width: 100
}


export default class Display extends Component {
    state = {
        age: 0,
        gender: "",
        beauty:{
            femaleScore: 0,
            maleScore: 0
        },
        emotion:{
            anger:0,
            disgust: 0,
            fear: 0,
            happines: 0,
            neutral: 0,
            sadness: 0,
            surpise: 0
        },
        faceQuality:{
            threshold:0,
            value: 0
        },
        skinStatus:{
            acne: 0,
            darkCircle: 0,
            health: 0,
            stain: 0
        },
        smile: {
            threshold: 0,
            value: 0
        }
    };
    componentDidMount() {
        console.log(this.props.results.faces[0].attributes.age)
            this.setState({
                age: this.props.results.faces[0].attributes.age.value,
                gender: this.props.results.faces[0].attributes.gender.value,
                beauty: {
                    femaleScore: this.props.results.faces[0].attributes.beauty.female_score,
                    maleScore: this.props.results.faces[0].attributes.beauty.male_score
                },
                emotion: {
                    anger: this.props.results.faces[0].attributes.emotion.anger,
                    disgust: this.props.results.faces[0].attributes.emotion.disgust,
                    fear: this.props.results.faces[0].attributes.emotion.fear,
                    happines: this.props.results.faces[0].attributes.emotion.happiness,
                    neutral: this.props.results.faces[0].attributes.emotion.neutral,
                    sadness: this.props.results.faces[0].attributes.emotion.sadness,
                    surpise: this.props.results.faces[0].attributes.emotion.surpise
                },
                faceQuality: {
                    threshold: this.props.results.faces[0].attributes.facequality.threshold,
                    value: this.props.results.faces[0].attributes.facequality.value
                },
                skinStatus: {
                    acne: this.props.results.faces[0].attributes.skinstatus.acne,
                    darkCircle: this.props.results.faces[0].attributes.skinstatus.darkCircle,
                    health: this.props.results.faces[0].attributes.skinstatus.health,
                    stain: this.props.results.faces[0].attributes.skinstatus.stain
                },
                smile: {
                    threshold: this.props.results.faces[0].attributes.smile.threshold,
                    value: this.props.results.faces[0].attributes.smile.value
                }
            })
    
    }

    render() {
        return (
            <div className="container">
                <div className="row">

                    <div className="col s6">
                        <img src={this.props.imgUrl} alt="userImage" style={imgStyle} />
                    </div>

                    <div className="col s6">
                        
                    </div>

                </div>
            </div>
        );
    }
}

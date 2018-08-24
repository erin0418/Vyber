import React, { Component, } from "react";
import Chart from "react-google-charts";

const imgStyle = {
    width: 350,
    border: "5px solid #8ce3d4"
}

const pieOptions = {
    title: "",
    pieHole: 0.1,
    slices: [
        {
            color: "#fa4141"
        },
        {
            color: "#ffb300"
        },
        {
            color: "#fff000"
        },
        {
            color: "#1c7cfa"
        },
        {
            color: "4be13c"
        },
        {
            color: "c864f5"
        },
        {
            color: "b0b0b0"
        }
    ],
    legend: {
        position: "bottom",
        alignment: "center",
        textStyle: {
            color: "233238",
            fontSize: 14
        }
    },
    tooltip: {
        showColorCode: true
    },
    chartArea: {
        left: 0,
        top: -50,
        width: "100%",
        height: "90%"
    },
    fontName: "Roboto"
};


export default class Display extends Component {
    state = {
        chartImageURI: "",
        age: 0,
        gender: "",
        beauty: {
            femaleScore: 0,
            maleScore: 0
        },
        emotion: {
            anger: 0,
            disgust: 0,
            fear: 0,
            happiness: 0,
            neutral: 0,
            sadness: 0,
            surpise: 0
        },
        faceQuality: {
            threshold: 0,
            value: 0
        },
        skinStatus: {
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
                happiness: this.props.results.faces[0].attributes.emotion.happiness,
                neutral: this.props.results.faces[0].attributes.emotion.neutral,
                sadness: this.props.results.faces[0].attributes.emotion.sadness,
                surprise: this.props.results.faces[0].attributes.emotion.surprise
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
        });
    }

    
    render() {
        const emotionChartHeader = "EMOTIONAL BREAKDOWN";
        const emotionData = [
            ["Emotion", "Value"],
            ["Anger", this.state.emotion.anger],
            ["Disgust", this.state.emotion.disgust],
            ["Fear", this.state.emotion.fear],
            ["Happiness", this.state.emotion.happiness],
            ["Sadness", this.state.emotion.sadness],
            ["Surprise", this.state.emotion.surprise],
            ["Neutral", this.state.emotion.neutral]
        ];

        const skinChartHeader = "SKIN STATUS";
        const skinData = [
            ["Skin Statue", "Value"],
            ["Acne", this.state.skinStatus.acne],
            ["Dark Circle", this.state.skinStatus.darkCircle],
            ["Health", this.state.skinStatus.health],
            ["Stain", this.state.skinStatus.stain]
        ];

        const smileChartHeader = "SMILE INTENSITY";
        const smileData = [
            ["Smile Intensity", "Value"],
            ["Smile", this.state.smile.value],
            ["No Smile", (100 - this.state.smile.value)],
        ];

        const maleBeautyChartHeader = "MALE BEAUTY SCORE";
        const maleBeautyData = [
            ["Male Beauty Score", "Value"],
            ["Male Beauty Score", this.state.beauty.maleScore],
            ["ugo factor", (100 - this.state.beauty.maleScore)],
        ];

        const femaleBeautyChartHeader = "FEMALE BEAUTY SCORE";
        const femaleBeautyData = [
            ["Female Beauty Score", "Value"],
            ["Female Beauty Score", this.state.beauty.femaleScore],
            ["ugo factor", (100 - this.state.beauty.femaleScore)],
        ];

        return (
            <div className="container">
                <div className="row faceRow">

                    <div className="col s4 faceNav">
                        <img src={this.props.imgUrl} alt="userImage" style={imgStyle} />
                        <p className="selector">Age: {this.state.age}</p>
                        <p className="selector">Gender: {this.state.gender}</p>
                        <p className="selector" onClick="">
                        Male Beauty Score: {this.state.beauty.maleScore}<br/>
                        Female Beauty Score: {this.state.beauty.femaleScore}
                        </p>
                        <p className="selector" onClick="">Emotion:
                        Anger: {this.state.emotion.anger}<br/>
                        Disgust: {this.state.emotion.disgust}<br/>
                        Fear: {this.state.emotion.fear}<br/>
                        Happiness: {this.state.emotion.happiness}<br/>
                        Sadness: {this.state.emotion.sadness}<br/>
                        Surprise: {this.state.emotion.surprise}<br/>
                        Neutral: {this.state.emotion.neutral}
                        </p>
                        <p className="selector" onClick="">
                        Smile Intensity: {this.state.smile.value}<br/>
                        No Smile: {(100 - this.state.smile.value)}
                        </p>
                        <p className="selector" onClick="">Skin Status:
                        Acne: {this.state.skinStatus.acne}<br/>
                        Dark Circle: {this.state.skinStatus.darkCircle}<br/>
                        Health: {this.state.skinStatus.health}<br/>
                        Stain: {this.state.skinStatus.stain}<br/>
                        </p>
                        <p className="selector">Face Quality: {this.state.faceQuality.value}</p>
                    </div>
                    <p className="chartTitle">{skinChartHeader}</p>
                    <div className="col s8 resultDisplay">
                        <Chart
                            chartType="PieChart"
                            data={skinData}
                            options={pieOptions}
                            graph_id="PieChart"
                            width={"100%"}
                            height={"400px"}
                            legend_toggle
                        />
                    </div>

                </div>
            </div>
        );
    }
}

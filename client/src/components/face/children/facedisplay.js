import React, { Component, } from "react";
import Chart from "react-google-charts";

const imgStyle = {
    width: 350,
    border: "5px solid #8ce3d4",
    // position:"fixed"
};

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
            color: "8ce3d4"
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

let emotionData = [];
let emotionBox = "";

let skinData = [];
let skinBox = "";

let smileData = [];
let smileBox = "";

let maleBeautyData = [];
let maleBeautyBox = "";

let femaleBeautyData = [];
let femaleBeautyBox = "";

let infoData = [];
let infoBox = "";

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
        },
        chart:[
            ["VYBER","Value"],
            ["VYBER", 100]
        ],
        chartHeader:"VYBER Facial Analysis",
        chartInfo:"Click headings under image to see analysis results"
    };

    infoHandler = () => {
        this.setState({
            chart:infoData,
            chartHeader:"VYBER Facial Analysis",
            chartInfo:infoBox,
        });
    };

    emotionHandler = () => {
        this.setState({
            chart:emotionData,
            chartHeader:"VISIBLE EMOTIONS",
            chartInfo:emotionBox,
        });
    };

    skinHandler = () => {
        this.setState({
            chart:skinData,
            chartHeader:"SKIN STATUS",
            chartInfo:skinBox
        });
    };

    maleBeautyHandler = () => {
        this.setState({
            chart:maleBeautyData,
            chartHeader:"MALE BEAUTY SCORE",
            chartInfo:maleBeautyBox
        });
    };

    femaleBeautyHandler = () => {
        this.setState({
            chart:femaleBeautyData,
            chartHeader:"FEMALE BEAUTY SCORE",
            chartInfo:femaleBeautyBox
        });
    };

    smileHandler = () => {
        this.setState({
            chart:smileData,
            chartHeader:"SMILE VISIBILITY",
            chartInfo:smileBox
        });
    };

    componentDidMount() {
        console.log(this.props.results.faces[0].attributes.age);
        console.log("FQ Value: " + this.props.results.faces[0].attributes.facequality.value);
        console.log("FQ Threshold: " + this.props.results.faces[0].attributes.facequality.threshold);

        if ((this.props.results.faces[0].attributes.facequality.value)<(this.props.results.faces[0].attributes.facequality.threshold)) {
            alert("Be Advised: Face Quality for this image is below 70%. The results for this image may not be as accurate.");
        };

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
                darkCircle: this.props.results.faces[0].attributes.skinstatus.dark_circle,
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
        emotionData = [
            ["Emotion", "Value"],
            [`Anger: ${(this.state.emotion.anger)}%`, this.state.emotion.anger],
            [`Disgust: ${(this.state.emotion.disgust)}%`, this.state.emotion.disgust],
            [`Fear: ${(this.state.emotion.fear)}%`, this.state.emotion.fear],
            [`Happiness: ${(this.state.emotion.happiness)}%`, this.state.emotion.happiness],
            [`Sadness: ${(this.state.emotion.sadness)}%`, this.state.emotion.sadness],
            [`Surprise: ${(this.state.emotion.surprise)}%`, this.state.emotion.surprise],
            [`Neutral: ${(this.state.emotion.neutral)}%`, this.state.emotion.neutral]
        ];

        emotionBox = `Anger: ${(this.state.emotion.anger)}%
        Disgust: ${(this.state.emotion.disgust)}%
        Fear: ${(this.state.emotion.fear)}%
        Happiness: ${(this.state.emotion.happiness)}%
        Sadness: ${(this.state.emotion.sadness)}%
        Surprise: ${(this.state.emotion.surprise)}%
        Neutral: ${(this.state.emotion.neutral)}%`;

        skinData = [
            ["Skin Statue", "Value"],
            [`Blemishes: ${(this.state.skinStatus.acne)}%`, this.state.skinStatus.acne],
            [`Dark Circle: ${(this.state.skinStatus.darkCirle)}%`, this.state.skinStatus.darkCircle],
            [`Health: ${(this.state.skinStatus.health)}%`, this.state.skinStatus.health],
            [`Stain: ${(this.state.skinStatus.stain)}%`, this.state.skinStatus.stain]
        ];

        skinBox = `
            Health: ${(this.state.skinStatus.health)}%
            Blemishes: ${(this.state.skinStatus.acne)}%
            Dark Circle: ${(this.state.skinStatus.darkCircle)}%
            Stain: ${(this.state.skinStatus.stain)}%
                  `;
        
        smileData = [
            ["Smile Intensity", "Value"],
            [`Smile Visibility: ${(this.state.smile.value)}%`, this.state.smile.value],
            [`No Smile: ${(100 - this.state.smile.value)}%`, (100 - this.state.smile.value)],
        ];

        smileBox = `Smile Visibility for this image is ${(this.state.smile.value)}%`;

        maleBeautyData = [
            ["Male Beauty Score", "Value"],
            [`Beauty Score: ${(this.state.beauty.maleScore)}%`, this.state.beauty.maleScore],
            [`Remainder: ${(100 - this.state.beauty.maleScore)}%`, (100 - this.state.beauty.maleScore)],
        ];

        maleBeautyBox = `Men would rate this face with a Beauty Score of ${(this.state.beauty.maleScore)}%`;

        femaleBeautyData = [
            ["Female Beauty Score", "Value"],
            [`Beauty Score: ${(this.state.beauty.femaleScore)}%`, this.state.beauty.femaleScore],
            [`Remainder ${(100 - this.state.beauty.femaleScore)}%`, (100 - this.state.beauty.femaleScore)],
        ];
        
        femaleBeautyBox = `Women would rate this face with a Beauty Score of ${(this.state.beauty.femaleScore)}%`;

        infoData = [
            ["Face Quality", "Value"],
            [`Face Quality: ${(this.state.faceQuality.value)}%`, this.state.faceQuality.value],
            [`Remainder: ${((100 - this.state.faceQuality.value))}%`, (100 - this.state.faceQuality.value)],
        ];

        infoBox = `Face Quality for this image is ${this.state.faceQuality.value}%. The higher the Face Quality the more accurate the results.`;
            
        return (
            <div className="container">
                <div className="row faceRow">
                    <div className="col s4 faceNav">
                        <img src={this.props.imgUrl} alt="userImage" style={imgStyle} />
                        <p className="selector1" onClick={this.infoHandler}>
                            Age: {this.state.age}<br/>
                            Gender: {this.state.gender}<br/>
                            Face Quality: {this.state.faceQuality.value}%
                        </p>
                        <p className="selector" onClick={this.emotionHandler}>Visible Emotions</p>
                        <p className="selector" onClick={this.maleBeautyHandler}>Male Beauty Score</p>
                        <p className="selector" onClick={this.femaleBeautyHandler}>Female Beauty Score</p>
                        <p className="selector" onClick={this.skinHandler}>Skin Status</p>
                        <p className="selector" onClick={this.smileHandler}>Smile Visibility</p>
                    </div>
                    
                    <div className="col s8 resultDisplay">
                    <p className="chartTitle">{this.state.chartHeader}</p>
                    <p className="chartInfo">{this.state.chartInfo}</p>
                        <Chart
                            chartType="PieChart"
                            data={this.state.chart}
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

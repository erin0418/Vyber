import React, { Component } from "react";

export default class Display extends Component {
  state = {
    openess: 0,
    conscientioness: 0,
    extraversion: 0,
    agreeableness: 0,
    neuroticism: 0,
    challenge: 0,
    closeness: 0,
    curiosity: 0,
    excitement: 0,
    harmony: 0,
    ideal: 0,
    liberty: 0,
    love: 0,
    practicality: 0,
    selfExpression: 0,
    stability: 0,
    structure: 0,
    conservation: 0,
    openessToChange: 0,
    hedonism: 0,
    selfEnhancement: 0,
    selfTransendence: 0
  };
  componentDidMount() {
    this.props.results.needs.map(results => {
      switch (results.name) {
        case "Challenge":
          this.setState({
            challenge: results.raw_score * 100
          });
          break;
        case "Closeness":
          this.setState({
            closeness: results.raw_score * 100
          });
          break;
        case "Curiosity":
          this.setState({
            curiosity: results.raw_score * 100
          });
          break;
        case "Excitement":
          this.setState({
            excitement: results.raw_score * 100
          });
          break;
        case "Harmony":
          this.setState({
            harmony: results.raw_score * 100
          });
          break;
        case "Ideal":
          this.setState({
            ideal: results.raw_score * 100
          });
          break;
        case "Liberty":
          this.setState({
            liberty: results.raw_score * 100
          });
          break;
        case "Love":
          this.setState({
            love: results.raw_score * 100
          });
          break;
        case "Practicality":
          this.setState({
            practicality: results.raw_score * 100
          });
          break;
        case "Self-expression":
          this.setState({
            selfExpression: results.raw_score * 100
          });
          break;
        case "Stability":
          this.setState({
            stability: results.raw_score * 100
          });
          break;
        case "Structure":
          this.setState({
            structure: results.raw_score * 100
          });
          break;
      }
    });
    this.props.results.personality.map(results => {
      switch (results.name) {
        case "Openness":
          this.setState({
            openess: results.raw_score * 100
          });
          break;
        case "Conscientiousness":
          this.setState({
            conscientioness: results.raw_score * 100
          });
          break;
        case "Extraversion":
          this.setState({
            extraversion: results.raw_score * 100
          });
          break;
        case "Agreeableness":
          this.setState({
            agreeableness: results.raw_score * 100
          });
          break;
        case "Emotional range":
          this.setState({
            neuroticism: results.raw_score * 100
          });
          break;
      }
    });
      this.props.results.values.map(results => {
          switch (results.name) {
              case "Conservation":
                  this.setState({
                      conservation: results.raw_score * 100
                  });
                  break;
              case "Openness to change":
                  this.setState({
                      openessToChange: results.raw_score * 100
                  });
                  break;
              case "Hedonism":
                  this.setState({
                      hedonism: results.raw_score * 100
                  });
                  break;
              case "Self-enhancement":
                  this.setState({
                      selfEnhancement: results.raw_score * 100
                  });
                  break;
              case "Self-transcendence":
                  this.setState({
                      selfTransendence: results.raw_score * 100
                  });
                  break;
          }
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s3">
            <p>Personality Traits:</p>
            <form action="#">
              <p class="range-field">
                <label> Openness: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.openess}
                />
              </p>
              <p class="range-field">
                <label> Conscientiousness: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.conscientioness}
                />
              </p>
              <p class="range-field">
                <label> Extraversion: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.extraversion}
                />
              </p>
              <p class="range-field">
                <label> Agreeableness: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.agreeableness}
                />
              </p>
              <p class="range-field">
                <label> Neuroticism: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.neuroticism}
                />
              </p>
            </form>
          </div>

          <div className="col s6">
            <p>Needs:</p>
            <form action="#">
              <p class="range-field">
                <label> Challenge: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.challenge}
                />
              </p>
              <p class="range-field">
                <label> Closeness: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.closeness}
                />
              </p>
              <p class="range-field">
                <label> Curiosity: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.curiosity}
                />
              </p>
              <p class="range-field">
                <label> Excitement: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.excitement}
                />
              </p>
              <p class="range-field">
                <label> Harmony: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.harmony}
                />
              </p>
              <p class="range-field">
                <label> ideal: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.ideal}
                />
              </p>
              <p class="range-field">
                <label> Liberty: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.liberty}
                />
              </p>
              <p class="range-field">
                <label> Love: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.love}
                />
              </p>
              <p class="range-field">
                <label> Practicality: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.practicality}
                />
              </p>
              <p class="range-field">
                <label> Self Expression: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.selfExpression}
                />
              </p>
              <p class="range-field">
                <label> Stability: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.stability}
                />
              </p>
              <p class="range-field">
                <label> Structure: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.structure}
                />
              </p>
            </form>
          </div>

          <div className="col s3">
            <p>Values List:</p>
            <form action="#">
              <p class="range-field">
                <label> Conservation: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.conversation}
                />
              </p>
              <p class="range-field">
                <label> Openess To Change: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.openessToChange}
                />
              </p>
              <p class="range-field">
                <label> Hedonism: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.hedonism}
                />
              </p>
              <p class="range-field">
                <label> Self-Enhancement: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.selfEnhancement}
                />
              </p>
              <p class="range-field">
                <label> Self-Transendense: </label>
                <input
                  type="range"
                  id="test5"
                  min="0"
                  max="100"
                  value={this.state.selfTransendence}
                />
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

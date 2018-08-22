import React from "react";

const Display = props => (
  <div>
    {props.results.utterances_tone.map(result => {
      console.log(result);
      return <div id={result.utterance_id}>{result.utterance_text}</div>;
    })}
  </div>
);

export default Display;

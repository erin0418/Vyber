import React from "react";

const CreatePost = props => (

  <div className="col sm6">
    <h4 className="center white-text">Create a Post for your Friends to View and Comment on!</h4>
    <br />

    <div className="input-field">
      <p>
        <label>
          <input class="with-gap" name="title" id="Tone" type="radio" onClick={props.handleClick} />
          <span>Tone</span>
        </label>
      </p>
      <p>
        <label>
          <input class="with-gap" name="title" id="Personality" type="radio" onClick={props.handleClick} />
          <span>Personality</span>
        </label>
      </p>
      <p>
        <label>
          <input class="with-gap" name="title" id="Face Recognition" type="radio" onClick={props.handleClick} />
          <span>Face Recognition</span>
        </label>
      </p>
      <input name="link" type="text" onChange={props.handleInput} />
      <label for="link" className="white-text" id="p1">Link</label>
    </div>
    <button class="submit btn amber lighten-5 waves-effect waves-orange" onClick={props.handlePost}>
      Create Post
    </button>
    <div>{props.completeMessage}</div>
  </div>
);

export default CreatePost;

import React from "react";

const CreatePost = props => (

  <div className="col sm8">
    <br/><br/>
    <h4 className="center manageHeader">CREATE A POST FOR YOUR FRIENDS TO VIEW AND COMMENT ON!</h4>
    <br/>

    <div className="input-field">
      <p>
        <label>
          <input class="with-gap" name="title" id="Tone" type="radio" onClick={props.handleClick} />
          <span className="radioText">Tone</span>
        </label>
      </p>

      <p>
        <label>
          <input class="with-gap" name="title" id="Personality" type="radio" onClick={props.handleClick} />
          <span className="radioText">Personality</span>
        </label>
      </p>

      <p>
        <label>
          <input class="with-gap" name="title" id="Face Recognition" type="radio" onClick={props.handleClick} />
          <span className="radioText">Face</span>
        </label>
      </p>

    </div>

    <br/>

    <div className="input-field">
      <label for="link" id="p1">Enter Twitter Username or Image URL for analysis</label>
      <input name="link" type="text" className="input-field" onChange={props.handleInput} />
    </div>
    <br/>
    <button class="submit btn cardBtn amber darken1 waves-effect waves-orange" onClick={props.handlePost}>
      Create Post
    </button>
    <div className="success">{props.completeMessage}</div>
  </div>
);

export default CreatePost;

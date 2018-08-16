import React, { Component } from 'react';


class Form extends Component {
  render() {
    return (
      <div className="formTest">

        <div className="toneRouteForm">
          < form action = "/toneRoute"
          method = "post"
          enctype = 'application/x-www-form-urlencoded' >
              <input name="name" type="text"/>
              <button type="submit">Submit</button>
          </form>
        </div>

        <div className="personalityForm">
          < form action = "/twitterName"
          method = "post"
          enctype = 'application/x-www-form-urlencoded' >
              <input name="name" type="text"/>
              <button type="submit">Submit</button>
          </form>
        </div>


            
      </div>
    );
  }
}

export default Form;
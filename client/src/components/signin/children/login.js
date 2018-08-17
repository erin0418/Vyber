import React from "react";

const LogIn = props => (
  <div className="toneRouteForm">
    <form
      action="/api/users"
      method="post"
      enctype="application/x-www-form-urlencoded"
    >
      <input name="username" type="text" />
      <input name="password" type="text" />

      <button type="submit">Submit</button>
    </form>
  </div>
);

export default LogIn;

import React from "react";


const UserCreate = props => (
<div className="toneRouteForm">
<h1> Create User </h1>
    <form
      action="/api/usersCreate"
      method="post"
      enctype="application/x-www-form-urlencoded"
    >
      <input name="username" type="text" />
      <input name="password" type="text" />

      <button type="submit">Submit</button>
    </form>
  </div>
);

export default UserCreate;
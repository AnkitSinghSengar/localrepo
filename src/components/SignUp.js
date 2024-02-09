import React from "react";

const SignUp = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <input name="userName" placeholder="Enter UserName" type="text"></input>
        <input name="email" placeholder="Enter Email" type="email"></input>
        <input
          name="password"
          placeholder="Enter Password"
          type="password"
        ></input>
        <input
          name="confirmPassword"
          placeholder="Confirm  Password"
          type="password"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};
export default SignUp;

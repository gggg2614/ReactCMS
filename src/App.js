import "./App.css";
import React from "react";
import { loginByUsername } from "./request/api";
import { Button } from 'antd';

function register() {
  loginByUsername({ username: "34523534", password: "password" }).then(
    () => {}
  );
}

function App() {
  const [num] = React.useState(1);
  return (
    <div>
      <div>{num}</div>
      <Button type="primary"  onClick={register()}>注册</Button>
    </div>
  );
}

export default App;

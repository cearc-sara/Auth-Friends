import React, {useState, useHistory} from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValue = {
  username: '',
  password: ''
}



function Login() {
  const [credentials, setCredentials] = useState(initialValue)
  let history = useHistory

 const handleChange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const login = (e) => {
    e.preventDefault();
  
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        history.push("/protected");
      })
      .catch((err) => {
        console.log(err)
      });
  };

  
    return (
      <div>
        <form onSubmit={login}>
          <label>Username&nbsp;</label>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <label>Password&nbsp;</label>
          <input
            type="text"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
        <p style={{ color: "red" }}></p>
      </div>
    );
  
}

export default Login;


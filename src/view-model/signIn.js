import { useState } from "react";
import axios from "../plugins/axios";

const SignInViewModel = ({ onSignIn, onAlert }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("token/login/", data).catch(e=>{
        if (onAlert) {
          onAlert({
            display: true,
            type: "error",
            text: JSON.parse(e.request.responseText).non_field_errors[0] == "Unable to log in with provided credentials."?"Invalid Email or Password":"",
          });
        }
        setTimeout(() => {
          if (onAlert) {
            onAlert({
              display: false,
              type: "",
              text: "",
            });
          }
  

        }, 5000);
        
        });
     
      localStorage.setItem("access", response.data.auth_token);

      const res = await axios.get("users/me/", {
        headers: {
          Authorization: `Token ${localStorage.getItem("access")}`,
        },
      });

      localStorage.setItem("name", res.data.first_name + " " + res.data.last_name);
      localStorage.setItem("id", res.data.id);
      localStorage.setItem("email", res.data.email);

      // setData({
      //   email: "",
      //   password: "",
      // });

      if (onAlert) {
        onAlert({
          display: true,
          type: "success",
          text: "Logging In",
        });
      }

      setTimeout(() => {
        if (onAlert) {
          onAlert({
            display: false,
            type: "",
            text: "",
          });
        }

        if (onSignIn) {
          onSignIn();
        }
      }, 2000);
    } catch (error) {
      let errorMessage = "";

      try {
        errorMessage = JSON.parse(error.request.response).uid[0];
      } catch (e) {}

      try {
        errorMessage = JSON.parse(error.request.response).detail;
      } catch (e) {}

      // if (onAlert) {
      //   onAlert({
      //     display: true,
      //     type: "error",
      //     text: errorMessage,
      //   });
      // }
    }
  };

  return { data, setData, handleSubmit };
};

export default SignInViewModel;

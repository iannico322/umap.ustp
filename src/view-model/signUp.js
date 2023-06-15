import { useState,useEffect } from "react";
import axios from "../plugins/axios";


const SignUpViewModel = ({ onSignUp, onAlert }) => {
    const [warningpassword, setwarningpassword] = useState();
  const [warningre_password, setwarningre_password] = useState();

  const [data, setData] = useState({
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    re_password: "",
  });

  let isItlong = false;
  let hasNumber = false;
  let isValid = false;

 

  
  useEffect(() => {
    if (data.password.length > 8) {
      isItlong = true;
    } else {
      isItlong = false;
    }

    if (/\d/.test(data.password)) {
      hasNumber = true;
    } else {
      hasNumber = false;
    }

    if (isItlong && hasNumber) {
      setwarningpassword("Great Password!");
    } else {
      setwarningpassword(
        "Invalid password it must has number and length is more than 8"
      );
    }

    if (data.password.length <= 1) {
      setwarningpassword("");
    }

    

  }, [data.password, data.re_password]);

  useEffect(() => {
    if (data.re_password == data.password) {
      setwarningre_password("Password Matched,Great!");
    } else {
      setwarningre_password("Password not Matched");
    }

    if (data.re_password.length < 1) {
      setwarningre_password("");
    }


  }, [data.password, data.re_password]);

  const handleSubmit = async (e) => {

  
        e.preventDefault();
       
        if (
          warningpassword == "Great Password!" &&
          data.re_password == data.password
        ) {
          isValid = true
        } else {
          isValid = false
        }
       

        
        if (isValid) {
            try {
                const response = await axios.post("users/", data).catch(e=>{
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
              }}

        
         
   

    
  };

  return { data, setData, handleSubmit };
};

export default SignUpViewModel;

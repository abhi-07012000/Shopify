import React from "react";
import "./Login.css";
import Stack from "@mui/material/Stack";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import ButtonMaterial from "../../UI/ButtonMaterial/ButtonMaterial";
import Input from "../../UI/Input/Input";

const Login = () => {
  return (
    <>
      <div className="container w-50">
        <div className="box rounded p-5">
        <h5 className="text-center">SIGN IN</h5>
        <form>
          <div class="mb-3">
            <Input type="email" lable="Email Address" id="EmailAddress"/>
          </div>
          <div class="mb-3">
          <Input type="password" lable="Password" id="password"/>
            <div className=" justify-content-end">
              <a href="#?">Forgot Password?</a>
            </div>
          </div>
          <ButtonMaterial className="mb-3" type='submit' text="Submit" />
        </form>
        <span className="or-hr bg-dark p-1 rounded text-light position-absolute">OR</span>
        <hr className="p-2"></hr>

        <Stack className="" spacing={3}>
          <ButtonMaterial icon={<GoogleIcon />} text="Continue with Google" />
          <ButtonMaterial
            icon={<FacebookIcon />}
            text="Continue with FaceBook"
          />
        </Stack>
        </div>
      </div>
    </>
  );
};

export default Login;

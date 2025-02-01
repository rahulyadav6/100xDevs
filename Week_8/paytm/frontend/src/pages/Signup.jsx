import { ButtonWarning } from "../components/ButtonWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/Inputbox";
import { SubHeading } from "../components/SubHeading";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className=" flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign up"} />
            <SubHeading label={"Enter your to create an account"}/>
            <InputBox onChange={e=>{
              setFirstName(e.target.value);
            }} placeholder="john"  label={"First Name"}/>
            <InputBox onChange={e=>{
              setLastName(e.target.value);
            }} placeholder="Doe"  label={"Last Name"}/>
            <InputBox onChange={e=>{
              setUserName(e.target.value);
            }} placeholder="rahulyadav@gmail.com"  label={"Email"}/>
            <InputBox onChange={e=>{
              setpassword(e.target.value);
            }} placeholder="12345" label={"Password"}/>
            <div className="pt-4">
                <Button onClick={async()=>{
                  const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
                    username,
                    firstName,
                    lastName,
                    password
                  });
                  localStorage.setItem("token", response.data.token); 
                  navigate("/dashboard")
                }} label={"Sign up"}/> 
            </div>
            <ButtonWarning label={"Alrady have an account?"} buttonText={"Signin"} to={"/signin"}/>
        </div>
      </div>
    </div>
  );
};

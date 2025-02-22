import { ButtonWarning } from "../components/ButtonWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/Inputbox";
import { SubHeading } from "../components/SubHeading";

export const Signin = () => {
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className=" flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox placeholder="rahulyadav@gmail.com" label={"Email"} />
          <InputBox placeholder="12345" label={"Password"} />
          <div className="pt-4">
            <Button label={"Sign in"} />
          </div>
          <ButtonWarning
            label={"Don't have an account?"}
            buttoText={"Signup"}
            to={"/signup"}
          />
        </div>
      </div>
    </div>
  );
};

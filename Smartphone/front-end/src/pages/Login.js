import {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Input from "../components/Input";
import Buttons from "../components/Buttons";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div className="vh-100 bg-success bg-gradient d-flex justify-content-center align-items-center">
            <form className="w-50">
                <Input type="email" id="Email" setInput={setEmail}/>
                <Input type="password" id="Password" setInput={setPassword}/>
                <Buttons major="Login" minor="Signup"/>
            </form>
        </div>
    );
};

export default Login;
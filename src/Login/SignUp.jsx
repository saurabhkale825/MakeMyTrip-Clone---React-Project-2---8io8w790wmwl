import { useState , useEffect } from "react";
import "./SignUp.css";

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // async function UserSingUp() {
  //   try {
  //     let item = {
  //       name: username,
  //       email: email,
  //       password: password,
  //       appType: "bookingportals",
  //     };
  //     const Header = {
  //       "Content-Type": "application/json",
  //       projectID: "8io8w790wmwl",
  //     };
  //     let getData = await fetch(`${process.env.REACT_APP_SINGUP_URL}`, {
  //       method: "POST",
  //       headers: Header,
  //       body: JSON.stringify(item),
  //     });

  //     let response = await getData.json();
  //     console.log(response);
  //     if (response.status === "success") {
  //       alert("You SingUp in Successfully");
  //       setName("");
  //       setEmail("");
  //       setPassword("");
  //       navigate("/signup");
  //     } else {
  //       alert(response.message);
  //     }

  //     localStorage.setItem("user-info", JSON.stringify(response));
  //   } catch (e) {
  //     console.log(e);
  //   }


  useEffect(() => {
    const userSignup = async () =>{
      
    }
  },[email]);


  return (
    <div className="singup-page">

      <div className="signup-page-input">
        <div className="mx-4 text-s  font-bold">Username</div>
        <input
          type="name"
          className="signup-page-input-values"
          autoComplete="false"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>

        <div className="mx-4 text-s  font-bold">E-mail</div>
        <input
          type="email"
          className="signup-page-input-values"
          autoComplete="false"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>

        <div className="mx-4 text-s  font-bold">Password</div>
        <input
          type="password"
          className="signup-page-input-values"
          autoComplete="false"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
      </div>

      <div className="signup-page-submit-button">
        SignUp
      </div>
    </div>
  );
}

export default SignUp;

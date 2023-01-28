import { Container } from "react-bootstrap";

import axios from "axios";

import { useState } from "react";





function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassword] = useState('');
    const [mobileNumber, setMobileNumber] = useState();
     



  const handleSubmit = (e) => {

    e.preventDefault();

    const user = {name,email,password,mobileNumber};

    console.log(user);

    axios.post("http://localhost:8200/user", user).then((response) => {

        console.log(response);

        alert("User Added");

        window.location.assign("/Login");

   

    })

}
  const myStyle = {

    backgroundImage: "url('https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",

   height:'100vh',

  backgroundSize: 'cover',

   backgroundRepeat: 'no-repeat',

  //  position:'fixed'

}
    return(
      <div style={myStyle}>
        

        <div class="text-light"  ><br></br><br></br>



       <center> <h1 >SignUp</h1></center>

       <hr></hr>

            <Container>

           <form onSubmit={handleSubmit} style={{ width: '30rem' }}>

  <div class="form-group">

    <label for="exampleInputEmail1">Username</label>

    <input type="text" required class="form-control" id="exampleInputUsername"  placeholder="Enter Username" value={name} onChange={(e)=>setName(e.target.value)}/>




  </div>

  <div class="form-group">

    <label for="exampleInputEmail1">Email</label>

    <input type="email" required class="form-control" id="exampleInputEmail1"  placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

    </div>

   

  <div class="form-group">

    <label for="exampleInputPassword1">Password</label>

    <input type="password" required class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

  </div>

  <div class="form-group">

    <label for="exampleInputPassword1">Mobile Number</label>

    <input type="number" required class="form-control" id="exampleInputPassword1" placeholder="mobile number" value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>

  </div>

  <br></br>

  <button type="submit" class="btn btn-primary">Register</button>

  <p>Already have an Account? <a href="/Login" class="link-primary">Login!</a></p>

</form>

</Container>

        </div>
        </div>
    )

}

export default Register;



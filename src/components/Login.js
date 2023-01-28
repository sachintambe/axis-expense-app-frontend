import { useState } from "react";

import axios from "axios";

import { Container } from "react-bootstrap";




function Login(){
  const[wrong, setWrong] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState();

const handleSubmit = (e) => {

e.preventDefault();

const user = {mobileNumber,password};

console.log("User input: ",user);
console.log(user.mobileNumber);
console.log("direct", mobileNumber);

axios.get("http://localhost:8200/user").then((response) => {
  // console.log(response.data[mobileNumber]);

  // console.log(response.data[0]);

  // console.log(name,password);

for(let i=0;i<response.data.length;i++){
  console.log(response.data[i].mobileNumber,response.data[i].password);

  if(mobileNumber==response.data[i].mobileNumber && password==response.data[i].password){

    console.log("password match");
    // localStorage.setItem('mobNumber', parseInt(mobileNumber));
    // let mNum = parseInt(localStorage.getItem('mobNumber'));
    
    // console.log(mNum+1);
    let session = sessionStorage.getItem("data");
    if (session === null) {
      sessionStorage.setItem("data", mobileNumber);
    } else {
      sessionStorage.removeItem("data");
      sessionStorage.setItem("data", mobileNumber);
    }

    // console.log(response.data[i].mobileNumber,response.data[i].password);

    // let session = sessionStorage.getItem("data");
    //     if (session === null) {
    //       sessionStorage.setItem("data", response.data[i].id);
    //     } else {
    //       sessionStorage.removeItem("data");
    //       sessionStorage.setItem("data",response.data[i].id );
    //     }
    window.location.assign("/home");
    alert("Welcome");
   break;

  }
  else{
    setWrong("Please Enter Correct Mobile Number and Password");
  }

}

  //alert("Welcome");

  // window.location.assign("/expense-list");



})

}

const myStyle = {

  backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",

  height:'100vh',

  backgroundSize: 'cover',

  backgroundRepeat: 'no-repeat',

  // position:'fixed'

}




  return(

 

    <div style={myStyle}>

      <Container>

        <br></br>

        <br></br>

       <center><h1 class="display-2">Login</h1></center>

       <hr></hr>

       <br></br>

       <br></br>

       <form onSubmit={handleSubmit} style={{ width: '30rem' }}>

  
  <div class="form-group">

    <label for="exampleInputEmail1">Mobile Number</label>

    <input type="number" required class="form-control" id="exampleInputUsername"  placeholder="Enter mobile number" value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)}/>
  </div>

 

   

  <div class="form-group">

    <label for="exampleInputPassword1">Password</label>

    <input type="password" required class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

  </div>

  <br></br>

  <button type="submit" class="btn btn-primary">Login</button>
  <p class="text-danger" >{wrong}</p>

  <p>Not a member? <a href="/" class="link-primary">Register</a></p>

</form>

</Container>

    </div>

  )

}

export default Login;
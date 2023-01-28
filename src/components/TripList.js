import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Header from "./Header";




function TripList(){

    const [val, setVal]=useState([]);
    let mobileNumber = sessionStorage.getItem('data');
    function getId(id){
        console.log(id);
    }
    console.log(mobileNumber);
    useEffect(()=>{
        axios.get("http://localhost:8200/trip").then((response)=>{
            setVal(response.data);
            
        })
    },[])

    const myStyle = {

        backgroundImage: "url('https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')",
  
        height:'100vh',
  
        backgroundSize: 'cover',
  
        backgroundRepeat: 'no-repeat',
  
        // position:'fixed'
  
      }


    return(
        <div style={myStyle}>
            <Header></Header>
            <Container><center>
            <h1>
                Trip List
            </h1></center><hr/>
            <div class="row">
            {
                
                val.map((ele)=>{
                    console.log(ele);
                    
    function myFunction() {
        let myTripId = parseInt(getId(ele.tripId));
        console.log("output: ",ele.tripId);
        
        sessionStorage.setItem("tripData", ele.tripId);
        window.location.assign("/expense-list")
      }
                    if(ele.mobileNumber==mobileNumber){
                        
                        return(
                            <div class="col-4"><Container>
                                <div class="card text-light bg-success" style={{ width: '20rem' }}>
                                    <h4 class="card-header text-light bg-dark">
                                        
                                    {
                                       
                                        ele.tripName
                                    }
                                    </h4> 
                                    <div class="card-body">
                                        <a href="#" class="btn btn-dark" onClick={myFunction}>View Details</a>-
                                        <a href="/add-expense" class="btn btn-dark" >Add Expense</a>
                                        {/* <Button variant="info">View Details</Button> */}
                                    </div>
                                </div><br/>
                               
                                </Container>

  
                                

                                {/* <p onClick={()=>getId(ele.tripId)}>
                                    {
                                        ele.tripName
                                    }
                                </p> */}
                            </div>
                        )
                    }
                })
            }

            </div>
            <p></p>
            </Container>
            
        </div>
    );
}
export default TripList;
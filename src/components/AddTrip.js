import { Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Header from "./Header";




function AddTrip(){
    const [tripName, setTripName] = useState('');
    let mobileNumber = parseInt(sessionStorage.getItem("data"));
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("User input: ",tripName);
        console.log(typeof mobiledata)
        const tripData = {tripName, mobileNumber};
        console.log("trip data: ",tripData);
        axios.post("http://localhost:8200/trip", tripData).then((response) => {
            alert("Trip Created")
            


            window.location.assign("/trip-list")
        })
    }

    return(
        <div>
            <Header></Header>
            <br/><center><h1>Add Trip</h1></center>
            <Container>
                {/* //<h3>Add trip</h3> */}
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Trip Name</label>
                        <input type="text" required class="form-control" id="exampleInputTripname"  placeholder="Enter trip name" value={tripName} onChange={(e)=>setTripName(e.target.value)}/>
                    </div>
                    <br></br>
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </Container>
        </div>
    );
}
export default AddTrip;
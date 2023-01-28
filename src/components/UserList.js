import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import 'react-toastify/dist/ReactToastify.css';
function UserList(){

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8100/user").then((response) => {
          console.log(response.data);
          setUsers(response.data);
          
          
        });
      }, []);

    return(
        <div>
             {users.map((user)=>{
                      return (
                        <div>
                        <div class="card text-light bg-dark" >

                          <h4 class="card-header text-info">{users.name}</h4>
                          <div class="card-body">
                          
                          <p class="card-text" key={user.id}>
                            ID: {users.id} | Name: {user.name}  </p>
                            <a href="/update-user" class="btn btn-warning">Update</a>-
                          {/* <Button variant="danger" onClick={()=>deleteuser(user.id)}>Delete</Button> */}
                          </div>
                        </div><br/>
                        </div>
                      );
                    })}

        </div>
    );
}
export default UserList;
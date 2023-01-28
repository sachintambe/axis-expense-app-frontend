import { Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import Header from "./Header";

function UpdateExpense(){
        const [id, setId] = useState();
        const [name, setName] = useState('');
        const [amount, setAmount] = useState();
        const [payment_type, setPayment_type] = useState('');
        

        const handleSubmit = (e) => {
            e.preventDefault();
            const expense = {name,amount,payment_type};
            console.log(expense);
            axios.put(`http://localhost:8200/expense/${id}`, expense).then((response) => {
                console.log(response);
                alert("Expense Updated");
                window.location.reload("true");
            })
        }
 

    return(
        <div>
            <Header></Header>
            <Container><br/><br/>
            <h1>Update Expense</h1>
            <hr/>
            <form onSubmit={handleSubmit} >
            <div class="form-group ">
                    <label for="formGroupExampleInput">Expense id</label>
                    <input type="number" required class="form-control" min="1" id="formGroupExampleInput" placeholder="001" value={id} onChange={(e)=>setId(e.target.value)}/>
                </div><br/>
                <div class="form-group">
                    <label for="formGroupExampleInput">Expense name</label>
                    <input type="text" required class="form-control" id="formGroupExampleInput" placeholder="Grocery" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div><br/>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Amount</label>
                    <input type="number" required class="form-control" id="formGroupExampleInput2" placeholder="1000" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <br/>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Payment type</label>
                    <input type="text" required class="form-control" id="formGroupExampleInput2" placeholder="Cash" value={payment_type} onChange={(e)=>setPayment_type(e.target.value)}/>
                </div><br/>
               
                <div>
                    <button type="submit" class="btn btn-primary">Update Expense</button><br/><br/>
                </div>
                
            </form>
            
           
            </Container>
        </div>
    );
}
export default UpdateExpense;
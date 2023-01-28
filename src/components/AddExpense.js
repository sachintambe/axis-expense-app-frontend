import axios from "axios";
import { useState } from "react";
import { Container } from "react-bootstrap";
import React from 'react';
import Header from "./Header";



function AddExpense(){
   

    

    
        const [name, setName] = useState('');
        const [amount, setAmount] = useState();
        const [payment_type, setPayment_type] = useState('');
        
    

    const handleSubmit = (e) => {
        e.preventDefault();
        let mobNumber = sessionStorage.getItem('data');
        let mobileNumber = parseInt(mobNumber);
        let tId = sessionStorage.getItem('tripData');
        let tripId = parseInt(tId);
        console.log("session data: ",mobileNumber,tripId);
       
        let expense = {name,amount,payment_type,mobileNumber,tripId};
        console.log("expense:",expense);
        axios.post("http://localhost:8200/expense", expense).then((response) => {
            console.log(response.data);
            alert("Expense Added");
            window.location.assign("/expense-list");
        
        })
    }

    return(
        <div>
            <Header></Header>
            <Container><br/><br/>
            <h1>Add Expense</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
            
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
                    <button type="submit" class="btn btn-primary">Add Expense</button>
                </div>
                
            </form>
            
            {/* <button onClick={()=>postExpenseData(expense.id,expense.name,expense.Amount,expense.payment_type,expense.remarks)}>Post expense data</button> */}
            </Container>
            
        </div>
    );
}
export default AddExpense;
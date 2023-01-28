import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import 'react-toastify/dist/ReactToastify.css';
import { Nav } from "react-bootstrap";
import Header from "./Header";
import React from "react";
import {Pie} from "react-chartjs-2";
import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";

Chart.register(

  Tooltip, Title, ArcElement, Legend

);

let chartData = {
  labels: [],
  datasets: [{
    data: [],
    backgroundColor: [
      '#F96167',
      '#FCE77D',
      '#4831D4',
      '#317773',
      '#990011FF',
      '#8AAAE5',
      '#FCF6F5FF',
      '#FF69B4',
      '#CBD18F',
      '#783937FF',
      '#AA96DA',
      '#201E20',
    ],
    hoverOffset: 4
  }]

}

var expenseNameArray = [];
var expenseAmountArray = [];

function ExpenseList(){
    const [expenses, setExpenses] = useState([]);
    let tripId = sessionStorage.getItem('tripData');
    // console.log("tripdata:",tripId)
    const [val, setVal]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8200/expense").then((response) => {
          // console.log("setexpenses:",response.data);
          console.log("responsedata: ",response.data);
          setExpenses(response.data);
          // console.log("expenses:",expenses);
          let total =0;

          for(var i=0; i<response.data.length; i++)

          {
            if(response.data[i].tripId==tripId){
              expenseNameArray[i] = response.data[i].name;
              expenseAmountArray[i] = response.data[i].amount;
            }
            
          }
          let nameList = [];
          let amountList3 = [];
          let k = 0;

          for(let i=0; i<expenseNameArray.length;i++){
            if(expenseNameArray[i]!=null && expenseAmountArray[i]!=null){
              // console.log("asd",expenseNameArray[i]);
              // chartData.labels = expenseNameArray;
              nameList[k]=expenseNameArray[i];
              amountList3[k]=expenseAmountArray[i];
              k++;
              
            }

          }
          var nameList2 = [];
          var amountList5 = [];
          let map = new Map();
          for(var i=0; i<nameList.length;i++)
          {
            if(map.has(nameList[i]))
            {
              map.set(nameList[i], map.get(nameList[i])+amountList3[i]);
            }
            else
            {
              map.set(nameList[i], amountList3[i]);
            }
          }
          console.log(map);
          var ki=0;

          for(let [key, value] of map)
          {
            amountList5[ki]=value;
            nameList2[ki++]=key;
          }

          chartData.labels = nameList2;

          
          chartData.datasets[0].data = amountList5;


          for(let i=0; i<response.data.length;i++){
            if(response.data[i].tripId==tripId){
              total += response.data[i].amount;
            }
            

          }
          console.log(total);
          document.getElementById("returnTotal").innerHTML = total;
        
       
         
         
          {expenses.map((expense)=>{
            return (
              <div>
                {expense.amount}
              </div>

              );
            })}
          
        });
      }, []);


      
      function updateExpense(id){
        let requestBody={
          name: "Travel",
        amount: 7000,
        payment_type: "Net Banking",
        remarks: "Successful"

        }
        axios.put(`http://localhost:8200/expense/${id}`, requestBody).then((response) =>{
          console.log(response);
        }); 
      }
      function deleteExpense(id){
        axios.delete(`http://localhost:8200/expense/${id}`).then((response) =>{
          console.log(response);
          alert("Expense Deleted");
          window.location.assign("/expense-list");
        }); 
      }
      function PieChart()

      {

          return(

              <React.Fragment>

                  <Pie data={chartData}/>

              </React.Fragment>

          )

      }
    return(
        <div>
          <Header></Header>
          <Container>
            <br/><br/>
            <center><h1 class="text-secondary">Expense List</h1></center><hr/>
            <div class="flex">
            <div class="d-flex flex-row">
              <div class="p-2"><h1 class="text-secondary">Total Expenses:</h1></div>
              <div class="p-2 right text-danger"><h1 id="returnTotal"></h1></div>
              
              </div>
              
              {
                
                expenses.map((ele)=>{
                  console.log("ele: ",ele);
                  console.log(ele.id)
                  if(ele.tripId==tripId){
                    // let myElements = document.getElementById(my);
                    // let newTotal = 0;
                    // for(let i = 0 ; i < myElements.length; i++){
                    //   newTotal += myElements[i].amount;
                    //   console.log("new total: ",newTotal);
                    // }
                    console.log("ele amount:",ele.amount);
                    console.log("id",ele.tripId);
                      return(
                        <div>
                          
                          <div class="card text-light bg-dark" >
                          <h4 class="card-header text-info ">{ele.name}</h4>
                          <div class="card-body">
                          <h5>Money spent: Rs.<span class="my">{ele.amount}</span></h5>
                          {
                            function displayTotal(){
                              let elementsList = document.getElementsByClassName("my");
                              console.log("elementsList:",elementsList);
                              return(
                                <div>
                                  elementsList
                                   
                                </div>
                              );
                            }
                          }
                          <p class="card-text" key={ele.id}>Id: {ele.id} | Payment type: {ele.payment_type}</p>
                          <a href="/update-expense" class="btn btn-warning">Update</a>-
                          <Button variant="danger" onClick={()=>deleteExpense(ele.id)}>Delete</Button>
                          </div>
                          
                          
                          
                          </div><br/>
                        </div>
                      );
                  }
                })
              }
             
              

                    
            </div>
            
            <div class="row">

              <div class="col-5">
              {expenses.map((expense)=>{
               let myamount=expense.amount;
               
                      // return (
                      //   <div>
                        
                      //     {
                      //       function Total(){
                      //         let elements = document.getElementsByClassName("theamount");
                      //         let total = 0;
                      //         for(let i = 0; i < elements.length; i++){
                      //           total += parseInt(elements[i].value);
                      //           console.log(total);
                      //         }
                      //       }
                      //     }
                      //   <div class="card text-light bg-dark" >

                      //     <h4 class="card-header text-info ">{expense.name}</h4>
                      //     <div class="card-body">
                      //     <h5 class="card-title">Money spent: Rs.{expense.amount}</h5>
                      //     <p class="card-text" key={expense.id}>
                      //       ID: {expense.id} | Payment type: {expense.payment_type} | Paid by: {expense.remarks}{" "} </p>
                      //       <a href="/update-expense" class="btn btn-warning">Update</a>-
                      //     <Button variant="danger" onClick={()=>deleteExpense(expense.id)}>Delete</Button>
                      //     </div>
                          
                      //   </div><br/>

                      //   {/* {expense.amount.map((price)=>{
                      //     return(
                      //       <div>
                      //         // <p>{price}</p>
                      //       </div>
                      //     );
                      //   })} */}
                      //   </div>
                      // );
                    })}

           </div>

           <div class="row">

<div class="col-3"></div>

<div class="col-6 mx-auto">
  <center><h1 class="text-secondary">Expenditure Summary</h1></center><hr/>
<br/>
    <PieChart/>
    
    <hr/>

</div>

<div class="col-3"></div>

</div>

                      </div>
          </Container>
            {/* {expenses.map((expense)=>{
              return <p>{expense.name}</p>
            })} */}

                       
        </div>
    );
}
export default ExpenseList;

//new code

// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import 'react-toastify/dist/ReactToastify.css';
// import { Nav } from "react-bootstrap";
// import Header from "./Header";
// import React from "react";
// import {Pie} from "react-chartjs-2";
// import { Chart, Tooltip, Title, ArcElement, Legend } from "chart.js";

// Chart.register(

//   Tooltip, Title, ArcElement, Legend

// );

// let chartData = {
//   labels: [],
//   datasets: [{
//     data: [],
//     backgroundColor: [
//       '#F96167',
//       '#FCE77D',
//       '#4831D4',
//       '#317773',
//       '#990011FF',
//       '#8AAAE5',
//       '#FCF6F5FF',
//       '#FF69B4',
//       '#CBD18F',
//       '#783937FF',
//       '#AA96DA',
//       '#201E20',
//     ],
//     hoverOffset: 4
//   }]

// }

// var expenseNameArray = [];
// var expenseAmountArray = [];

// function ExpenseList(){
//     const [expenses, setExpenses] = useState([]);
//     let tripId = sessionStorage.getItem('tripData');
//     // console.log("tripdata:",tripId)
//     const [val, setVal]=useState([]);
//     useEffect(() => {
//         axios.get("http://localhost:8200/expense").then((response) => {
//           // console.log("setexpenses:",response.data);
//           console.log("responsedata: ",response.data);
//           setExpenses(response.data);
//           // console.log("expenses:",expenses);
//           let total =0;

//           for(var i=0; i<response.data.length; i++)

//           {
//             if(response.data[i].tripId==tripId){
//               expenseNameArray[i] = response.data[i].name;
//               expenseAmountArray[i] = response.data[i].amount;
//             }
            
//           }
//           let nameList = [];
//           let k = 0;

//           for(let i=0; i<expenseNameArray.length;i++){
//             if(expenseNameArray[i]!=null){
//               // console.log("asd",expenseNameArray[i]);
//               // chartData.labels = expenseNameArray;
//               nameList[k]=expenseNameArray[i];
//               k++;
              
//             }

//           }
//           console.log("nameList: ",nameList);
//           chartData.labels = nameList;

//           let amountList = [];
//           let v = 0;
//           for(let i=0; i<expenseAmountArray.length;i++){
//             if(expenseAmountArray[i]!=null){
//               // chartData.datasets[0].data = expenseAmountArray;
//               amountList[v] = expenseAmountArray[i];
//               v++;
//             }
//           }
          
          
//           chartData.datasets[0].data = amountList;
//           // console.log("expenseNameArray: ",expenseNameArray);


//           for(let i=0; i<response.data.length;i++){
//             if(response.data[i].tripId==tripId){
//               total += response.data[i].amount;
//             }
            

//           }
//           console.log(total);
//           document.getElementById("returnTotal").innerHTML = total;
        
       
         
         
//           {expenses.map((expense)=>{
//             return (
//               <div>
//                 {expense.amount}
//               </div>

//               );
//             })}
          
//         });
//       }, []);


      
//       function updateExpense(id){
//         let requestBody={
//           name: "Travel",
//         amount: 7000,
//         payment_type: "Net Banking",
//         remarks: "Successful"

//         }
//         axios.put(`http://localhost:8200/expense/${id}`, requestBody).then((response) =>{
//           console.log(response);
//         }); 
//       }
//       function deleteExpense(id){
//         axios.delete(`http://localhost:8200/expense/${id}`).then((response) =>{
//           console.log(response);
//           alert("Expense Deleted");
//           window.location.assign("/expense-list");
//         }); 
//       }
//       function PieChart()

//       {

//           return(

//               <React.Fragment>

//                   <Pie data={chartData}/>

//               </React.Fragment>

//           )

//       }
//     return(
//         <div>
//           <Header></Header>
//           <Container>
//             <br/><br/>
//             <center><h1 class="text-secondary">Expense List</h1></center><hr/>
//             <div class="flex">
//             <div class="d-flex flex-row">
//               <div class="p-2"><h1 class="text-secondary">Total Expenses:</h1></div>
//               <div class="p-2 right text-danger"><h1 id="returnTotal"></h1></div>
              
//               </div>
              
//               {
                
//                 expenses.map((ele)=>{
//                   console.log("ele: ",ele);
//                   console.log(ele.id)
//                   if(ele.tripId==tripId){
//                     // let myElements = document.getElementById(my);
//                     // let newTotal = 0;
//                     // for(let i = 0 ; i < myElements.length; i++){
//                     //   newTotal += myElements[i].amount;
//                     //   console.log("new total: ",newTotal);
//                     // }
//                     console.log("ele amount:",ele.amount);
//                     console.log("id",ele.tripId);
//                       return(
//                         <div>
                          
//                           <div class="card text-light bg-dark" >
//                           <h4 class="card-header text-info ">{ele.name}</h4>
//                           <div class="card-body">
//                           <h5>Money spent: Rs.<span class="my">{ele.amount}</span></h5>
//                           {
//                             function displayTotal(){
//                               let elementsList = document.getElementsByClassName("my");
//                               console.log("elementsList:",elementsList);
//                               return(
//                                 <div>
//                                   elementsList
                                   
//                                 </div>
//                               );
//                             }
//                           }
//                           <p class="card-text" key={ele.id}>Id: {ele.id} | Payment type: {ele.payment_type}</p>
//                           <a href="/update-expense" class="btn btn-warning">Update</a>-
//                           <Button variant="danger" onClick={()=>deleteExpense(ele.id)}>Delete</Button>
//                           </div>
                          
                          
                          
//                           </div><br/>
//                         </div>
//                       );
//                   }
//                 })
//               }
             
              

                    
//             </div>
            
//             <div class="row">

//               <div class="col-5">
//               {expenses.map((expense)=>{
//                let myamount=expense.amount;
               
//                       // return (
//                       //   <div>
                        
//                       //     {
//                       //       function Total(){
//                       //         let elements = document.getElementsByClassName("theamount");
//                       //         let total = 0;
//                       //         for(let i = 0; i < elements.length; i++){
//                       //           total += parseInt(elements[i].value);
//                       //           console.log(total);
//                       //         }
//                       //       }
//                       //     }
//                       //   <div class="card text-light bg-dark" >

//                       //     <h4 class="card-header text-info ">{expense.name}</h4>
//                       //     <div class="card-body">
//                       //     <h5 class="card-title">Money spent: Rs.{expense.amount}</h5>
//                       //     <p class="card-text" key={expense.id}>
//                       //       ID: {expense.id} | Payment type: {expense.payment_type} | Paid by: {expense.remarks}{" "} </p>
//                       //       <a href="/update-expense" class="btn btn-warning">Update</a>-
//                       //     <Button variant="danger" onClick={()=>deleteExpense(expense.id)}>Delete</Button>
//                       //     </div>
                          
//                       //   </div><br/>

//                       //   {/* {expense.amount.map((price)=>{
//                       //     return(
//                       //       <div>
//                       //         // <p>{price}</p>
//                       //       </div>
//                       //     );
//                       //   })} */}
//                       //   </div>
//                       // );
//                     })}

//            </div>

//            <div class="row">

// <div class="col-3"></div>

// <div class="col-6 mx-auto">
//   <center><h1 class="text-secondary">Expenditure Summary</h1></center><hr/>
// <br/>
//     <PieChart/>
    
//     <hr/>

// </div>

// <div class="col-3"></div>

// </div>

//                       </div>
//           </Container>
//             {/* {expenses.map((expense)=>{
//               return <p>{expense.name}</p>
//             })} */}

                       
//         </div>
//     );
// }
// export default ExpenseList;
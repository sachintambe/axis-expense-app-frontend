import { Container } from "react-bootstrap";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Header from "./Header";



function Home(){
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return(
        
        <div>
            <Header></Header>
            <div class="jumbotron"><br/>
            <div class="container"><br/>
                <h1 class="display-3">We're here for you...</h1><hr/>
                <Container>
                    <h5>As the world moves online, we at Expense Manager are making sure you and your friends are part of this digital revolution too.</h5>
                    <p>A simple management app and for all kinds of business as well as your personal expenses. You can manage your daily income, sale and expenses, credit and debit entries and all your day-to-day expenses and transactions easily.</p>
                    <p>This digital, easy-to-use petty app will help you manage your cashflow and your cashbox balance. You can manage multiple businesses' transactions. Many businesses use the it as a ledger book.</p>
                    
                    <a class="btn btn-outline-primary btn-lg" href="/trip-list" role="button">Start</a>
                  
                </Container>
            </div>
            </div>
            
            
        </div>
    );
}
export default Home;
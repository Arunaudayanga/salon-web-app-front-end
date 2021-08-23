import React from "react";
import "./adminPanel.css";
import Card from "../../components/Card/Card";
import cardDetails from "../../components/Card/cardDetails"
//import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function Admin(){
    return(
        <div className="admin-home">
            
                <h1>Admin Panel</h1>
             
                 {cardDetails.map( (cardDetails) => {
                    return(
            <div>

                <Card 
                    key = {cardDetails.id}
                    name = {cardDetails.name}
                    img  = {cardDetails.img}
                />

            </div>
    );
})}

        </div>
    );
}
export default Admin;
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "../views/Home/Home";
import Admin from "../views/adminPanel/adminPanel";
import MyAccount from "../views/myAccount/myAccount";
import Expenses from "../views/Expenses/Expenses";
import Payment from "../views/Payment/Payment";
import AddExpenses from "../views/Expenses/AddExpenses";
import Service from "../views/Service/Services/Service";
import AddService from "../views/Service/AddService/AddService";
import SingleItem from "../views/Service/SingleItem/SingleItem";



function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/myAccount">
            <MyAccount />
          </Route>
          <Route exact path="/adminPanel">
            <Admin />
          </Route>
          <Route exact path="/Expenses">
            <Expenses />
          </Route>
          <Route exact path="/Payment">
            <Payment />
          </Route>
          <Route exact path="/AddExpense">
            <AddExpenses />
          </Route>
          <Route exact path="/Service">
            <Service />
          </Route>
          <Route exact path="/AddService">
            <AddService />
          </Route>
          <Route exact path="/SingleItem">
            <SingleItem />
          </Route>
      
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}
export default App;

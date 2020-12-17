import "./App.css";
// import AddEmployeeComponent from "./component/AddEmployeeComponent";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetEmployeeComponent from "./component/GetEmployeeComponent";
import AddUpdateEmployeeComponent from "./component/AddUpdateEmployeeComponent";


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Router>
        <Switch>
          <Route path="/" exact component={GetEmployeeComponent}></Route>
          <Route path="/add-update-employee/:id" component={AddUpdateEmployeeComponent}></Route>
          {/* <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> */}
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;


// http://localhost:3001/add-employee/-1
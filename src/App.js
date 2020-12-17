import "./App.css";
// import AddEmployeeComponent from "./component/AddEmployeeComponent";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/HeaderComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GetEmployeeComponent from "./component/GetEmployeeComponent";
import AddEmployeeComponent from "./component/AddEmployeeComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Router>
        <Switch>
          <Route path="/" exact component={GetEmployeeComponent}></Route>
          <Route path="/add-employee" component={AddEmployeeComponent}></Route>
        </Switch>
      </Router>
      <FooterComponent />
    </div>
  );
}

export default App;

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Explores from './Pages/Home/Explores/Explores';
import About from './Pages/Home/About/About';
import Details from './Pages/Home/Details/Details';
import Orders from './Pages/Home/Orders/Orders';
import Dashboard from './Pages/Dashboard/Dashboard/Dasboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Review from './Pages/Home/Review/Review';
import Pay from './Pages/Home/Pay/Pay';


function App() {
  return (
    
    <div className="App">
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
         </Route>
         <Route path="/register">
         <Register></Register>
         </Route>
         <Route path="/explore">
         <Explores></Explores>
         </Route>
         <Route path="/about">
         <About></About>
         </Route>
         <Route path="/orders">
         <Orders></Orders>
         </Route>
         <Route exact path="/review">
        <Review></Review>
         </Route>
         <Route exact path="/pay">
        <Pay></Pay>
         </Route>
         <Route path="/dashboard">
        <Dashboard></Dashboard>
         </Route>
         <PrivateRoute exact path="/details/:serviceId">
         <Details></Details>
         </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;

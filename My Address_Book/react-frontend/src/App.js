
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
// import HeaderComponent from './components/HeaderComponent';
import CreateUserComponent from './components/CreateUserComponent';
import Sidebar from './components/Sidebar';




function App() {
  return (
    <div>
      <Router>

        {/* <HeaderComponent /> */}
 {/*  <SideBarComponent/> */}
 <Sidebar/>
        <div className="container">
        
          <Switch>
            
            <Route path="/" exact component={ListUserComponent}></Route>
            <Route path="/users" component={ListUserComponent}></Route>
            <Route path="/add-user" component={CreateUserComponent}></Route>
            
          </Switch>
        </div>

      </Router>
    </div>


  );
}

export default App;

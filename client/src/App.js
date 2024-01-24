import logo from './logo.svg';
import './App.css';
import UserList from './Components/UserList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddNewUser from './Components/AddNewUser';
function App() {
  return (
    <div className="App">
      <AddNewUser/>
     <UserList/>
    </div>
  );
}

export default App;

import './App.css';
import {useState ,useEffect} from "react";
import Axios from "axios"; 

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username,setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); 

  const createUser = (user) => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username
    })
    .then((response) => {
      setListOfUsers([...listOfUsers, {
      name,
      age,
      username
      }])
    })
  }

  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Username</th>
          </tr>
        </thead>
        <tbody>
          {listOfUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
  
      <div>
        <h2>Add User</h2>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" 
          onChange={(event)=>{
            setName(
            event.target.value
            )}} />
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" 
        onChange={(event)=>{
          setAge(
            event.target.value
            )}}/>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" 
        onChange={(event)=>{
          setUsername(
            event.target.value
            )}}/>
        <button onClick={createUser}>Add</button>
      </div>
    </div>
  );
  
}


export default App;

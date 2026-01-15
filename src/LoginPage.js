import React, { useState } from "react"; 
import axios from "axios";

const Login = () => {
  const [name, setName] = useState(""); 
  const [pass, setPass] = useState(""); 
  const [result, setresult] = useState(""); 
  const [users, setUsers] = useState([]); 
  const [auth, setAuth] = useState(false); 

  // let usersdata = [{
  //   "id" : 1,
  //   "name" : "john",
  //   "email" : "konos2001@hotmail.com"
  // },{
  //   "id" : 2,
  //   "name" : "const",
  //   "email" : "gg@hotmail.com"
  // }];
  const getUsers = async () => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUsers(response.data);
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error saving request:", error);
      });
    
    
  };
  
   
  
  const handleSubmitt = (e) => {
    e.preventDefault();
    const username = name;
    const userpass = pass;

    if(username !== 'admin' || userpass !== 'Root123'){
        console.log('Λυπούμαστε, δεν είστε διαχειριστής της διαδικτυακής εφαρμογής');
            
    }
    else{
        setAuth(true);
        getUsers();
        
    }
       

    }
    


    return (
      <div className="container">
        <section className="forma">
          <form id="login" onSubmit={handleSubmitt}>
           
            <label htmlFor="onoma">Όνομα Χρήστη</label>
            <input
              type="text"
              id="onoma"
              onChange={(e) => setName(e.target.value)}
              required
            />
          
            <label htmlFor="pass">Κωδικός Πρόσβασης</label>
            <input
              type="text"
              id="pass"
              onChange={(e) => setPass(e.target.value)}
              required
            />
    
        
            <button className="koubi" type="submit">
              Σύνδεση Διαχειριστή
            </button>
          </form>
    
       
          <span htmlFor="length">{result}</span>
        </section>
    
        <section className="forma">
       
          {auth && (
          <table>
            <thead>
              <tr>
                <th>Όνομα</th>
                <th>Email</th>
                <th>Ρόλος</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => {
                return (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          )}
        </section>
      </div>
    );
    

};
export default Login;

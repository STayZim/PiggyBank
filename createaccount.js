function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [username, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext); 


  function validate(field, label){
      if (!field) {
        setStatus(' ' + label);  
        setTimeout(() => setStatus(''),3000);  
        return false;
      }
        return true;
         
  }


  function handleCreate(){
    console.log(username,email,password);
    if (!validate(username,     'Must enter a name.')) return;
    if (!validate(email,    'Must enter a valid email.'))    return;
    if (!validate(password, 'Must enter a password.')) return;
    if (!validate(password.length>7, 'Password should be at least 8 characters')) return;
       
    ctx.users.push({username, email, password, balance: 200});
    setShow(false); 
     
  } 


  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  
  }



  return (
    <Card
      header="Create Account"
      status={status}
      body={show ? (
              
              <>
              Name<br/>
              <input type="input" className="form-control"  id="username" placeholder="Enter name" autoComplete="off" value={username} onChange={e => setName(e.currentTarget.value)}/><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" autoComplete="off" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" autoComplete="off" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button type="submit" id = "submit"  className="btn btn-light" onClick={handleCreate}>Create Account</button>
              </>
     
            ):(
      
              <>
              <h5>Success</h5>
              <button type="submit" value="Submit" id="submit-input" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
          
            )}
    />
  )
}



  /*let currentUserIndex = 0;
  let users = [...ctx.users];
  let userID = users[i].id
  let balance = users[currentUserIndex].balance;
  let userName = users[currentUserIndex].username;
  

 function assignUserID (userID) {
   currentUserIndex = userID-1;
   return currentUserIndex;
 }*/
const Deposit = () => {
  const [balance, setBalance] = React.useState(userBal);
  const [transaction, setTransaction]  = React.useState(0);
  const [validTransaction, setValidTransaction] = React.useState(false);
  const [show, setShow]  = React.useState(true);
  const ctx = React.useContext(UserContext);

  let userBal = ctx.users[0].balance;
  let status =  `Account Balance $${userBal}.00`;
 

  const handleChange = (event) => {
    console.log(Number(event.target.value));
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false);
    }
    if (!Number(event.target.value)) {
      setValidTransaction(false);
      return alert("Entry must be a positive number!");
    } 
      else {
      setValidTransaction(true)
     
    }
      setTransaction(Number(event.target.value));
  };

  const handleSubmit = (event) => { 
    ctx.users[0].balance += parseInt(transaction);
    setBalance(ctx.users[0].balance);
    userBal = balance;
    //setValidTransaction(false);
    setShow(false);
    event.preventDefault();
  };
    

  function clearForm(){
    setShow(true);
  }

  return (
    <Card
      header="Deposit"
      body={show ? (
      <form onSubmit={handleSubmit}>
        <>
          <h4 id="total">{status}</h4>
          <label className="label huge">
                    <h4>Amount To Deposit</h4>
                    <input id="input" type="input" width="200" autoComplete="off" onChange={handleChange}></input>
                    <input type="submit" disabled={!validTransaction} width="200" value="Submit" id="submit-input"></input>
          </label>
            
        </>
      </form>
      ):(
        <>
        <h5>Success!</h5>
              <button type="submit" value="Submit" id="submit-input" className="btn btn-light" onClick={clearForm}>Click to make another deposit!</button>
        </>
      )}
    />
  );
};



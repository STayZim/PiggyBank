function Spa() {

 
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:200}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/createaccount/" component={CreateAccount} />
          <Route path="/deposit/" component={Deposit}/>
          <Route path="/withdraw/" component={Withdraw}/>
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>   
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);

function AllData(){
  const ctx = React.useContext(UserContext);
  return(
    <Card
      header="All User Data"

     
      body={JSON.stringify(ctx.users)}
    />    
  )
};



  
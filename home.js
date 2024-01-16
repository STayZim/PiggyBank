function Home(){
  return (
    <Card
      txtcolor="black"
      header="PIGGY BANK"
      title="Welcome!"
      text="Click an option above to see what we can do with your money!"
      body={(<img src="piggybank.jpg" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}

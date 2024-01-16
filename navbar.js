

function NavBar(){


  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand btn btn-light" span title="Wee, wee, wee all the way HOME!" style={{color: "maroon"}} href="#">Piggy Bank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
          <a className="nav-link btn btn-light"   title="New To Piggy! Sign up here!"  style={{color: "maroon"}} href="#/createaccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-light" title ="Feed the piggy!" style={{color: "maroon"}} href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-light" title="Get your money!" style={{color: "maroon"}} href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn btn-light" title="Data, data, data!" style={{color: "maroon"}} href="#/alldata/"> AllData</a>
          </li>          
        </ul>
      </div>      
    </nav>
    </>
  );
}


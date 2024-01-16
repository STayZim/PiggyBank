const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);



function Card(props){
    function classes(){
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : '  ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' ';
      return 'card mb-3 ' + bg + txt;
    }
  
    return (
      <div className={classes()} style={{maxWidth: "auto", borderStyle: "solid", borderColor: "white", borderWidth: "3em", objectFit: "cover"}}>
        <div className="card-header" style={{color: "white", background: "maroon"}}>{props.header}</div>
        <div className="card-body" style={{background: "pink"}}>
          {props.title && (<h5 className="card-title" style={{color: "maroon"}}>{props.title}</h5>)}
          {props.text && (<p className="card-text" style={{color: "maroon"}}>{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        </div>
      </div>      
    );    
  }
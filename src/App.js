import React from 'react';
import { connect } from "react-redux";
import { mapStateToProps } from "./selector";
import { mapDispatchToProps } from './actions'


function App({ button_pressed, click }  ) {
  
  var msg = ""
  if (button_pressed === "yes") { msg = "Hello! 👋"}

  return (
    <div className="App">
      <button onClick={click} >Press me</button>
      <h1>{ msg }</h1>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
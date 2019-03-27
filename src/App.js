import React, { Component } from 'react';
import './App.css';
import Travel from './Components/Travel'


class App extends Component {
  render() {
    return (
      <div className="App">
       <Travel
       destination="Hobbiton"
       country="Nouvelle-Zelande"
       photo="https://www.valizstoriz.com/wp-content/uploads/2018/01/pays-a-visiter-en-2018-NOUVELLE-ZELANDE.jpg"
       distance="18 942 km"
       />
        <Travel
       destination="Petra"
       country="Jordanie"
       photo="https://www.valizstoriz.com/wp-content/uploads/2018/01/pays-a-visiter-en-2018-jordanie.jpg"
       distance="4 713 km"
       />

      </div>
    );
  }
}

export default App;

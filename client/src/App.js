import React from 'react';
import './App.css';
import data from "./data";
import Card from './Components/Card'



class App extends React.Component {
  constructor() { 
    super();
    this.state = {
      women: []
    };
  }
  componentDidMount() {
   
      console.log(data);
      // set cities on state for use in CitiesList
      this.setState({ women: data.data });

}

  render() {
    return (

   <div className="container">
      <h1>Women's World Cup players</h1>
      <h3>Ranked by search interest from Google Trends, June-July 2019, worldwide</h3>
 


      <div className="list">
     {this.state.women.map(x => {
       return (

        <Card name={x.name} country={x.country} searches={x.searches} />

  
       )
     })} 

</div>

</div>
    );
  }
} 

export default App;

import React , {useState} from 'react';
import './App.css';
import List from "./List"
import AddList from './AddList'

export interface IState {
  people:{
    name: string
    age:number
    url:string
    note:string
  }[]
}
function App() {
  const [people, setPeople]= useState<IState["people"]>([
    {
      name:"lebron james",
      url:"https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
      age:35,
      note:"cool"
    }
    

  ])
  
  
  return (
    <div className="Head">
      <h1>people Invited to my Party</h1>
      <List people={people}/>
      <AddList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;

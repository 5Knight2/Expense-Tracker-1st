
import React,{useState} from 'react'
import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense'

const App=()=> {
  const data=[{title:'Food',amount:240,date:new Date(2024,1,25),location:"Akola"},
  {title:'Party',amount:1240,date:new Date(2024,2,25),location:"Akola"},
  {title:'gym',amount:2400,date:new Date(2024,1,21),location:'pune'}]

  const [expenses,setExpenses]=useState(data);
  const addExpenseHandler=async(expense)=>{
    
   await setExpenses((prevState)=> [expense,...prevState])
console.log('app.js',expenses)
  }
  return (
    <div>
      <h2>Let's get started!</h2>
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses items={expenses}  ></Expenses>

    </div>
  );
}

export default App;

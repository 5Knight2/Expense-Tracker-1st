import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense'

const App=()=> {
  const data=[{title:'Food',amount:240,date:new Date(2024,1,25),location:"Akola"},
  {title:'Party',amount:1240,date:new Date(2024,2,25),location:"Akola"},
  {title:'gym',amount:2400,date:new Date(2024,1,21),location:'pune'}]

  const addExpenseHandler=(expense)=>{
console.log('app.js',expense)
  }
  return (
    <div>
      <h2>Let's get started!</h2>
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses items={data}  ></Expenses>

    </div>
  );
}

export default App;

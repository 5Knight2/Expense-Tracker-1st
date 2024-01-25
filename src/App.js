import ExpenseItem from './Components/ExpenseItem'
import Food from './Components/Food'

function App() {
  const data=[{title:'Food',amount:240,date:new Date(2024,1,25),location:"Akola"},
  {title:'Party',amount:1240,date:new Date(2024,2,25),location:"Akola"},
  {title:'gym',amount:2400,date:new Date(2024,1,21),location:'pune'}]
  return (
    <div>
      <h2>Let's get started!</h2>
  
        <ExpenseItem title={data[0].title} amount={data[0].amount} date={data[0].date } location={data[0].location } ></ExpenseItem>
      <ExpenseItem title={data[1].title} amount={data[1].amount} date={data[1].date} location={data[1].location }></ExpenseItem>
      <ExpenseItem title={data[2].title} amount={data[2].amount} date={data[2].date} location={data[2].location }></ExpenseItem>
      
    </div>
  );
}

export default App;

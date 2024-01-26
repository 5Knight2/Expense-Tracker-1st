import Expenses from './Components/Expenses'

function App() {
  const data=[{title:'Food',amount:240,date:new Date(2024,1,25),location:"Akola"},
  {title:'Party',amount:1240,date:new Date(2024,2,25),location:"Akola"},
  {title:'gym',amount:2400,date:new Date(2024,1,21),location:'pune'}]
  return (
    <div>
      <h2>Let's get started!</h2>
  
        <Expenses items={data}  ></Expenses>

    </div>
  );
}

export default App;

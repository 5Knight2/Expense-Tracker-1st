import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from '../UI/Card'

const ExpenseItem=(props) =>{
    
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails location={props.location} title={props.title} price={props.price}></ExpenseDetails>
      
    </Card>
  );
}

export default ExpenseItem;

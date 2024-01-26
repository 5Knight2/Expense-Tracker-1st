import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
import Card from './Card'

function ExpenseItem(props) {
    
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails location={props.location} title={props.title} amount={props.amount}></ExpenseDetails>
      
    </Card>
  );
}

export default ExpenseItem;

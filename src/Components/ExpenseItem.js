import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'

function ExpenseItem(props) {
    
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <ExpenseDetails location={props.location} title={props.title}></ExpenseDetails>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
}

export default ExpenseItem;

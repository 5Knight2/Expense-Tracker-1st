import "./ExpenseForm.css";
import React,{useState} from "react";
const ExpenseForm=()=> {
  const[title,setTitle]=useState('');
  const[amount,setAmount]=useState('');
  const[date,setDate]=useState('');

  const titleChangeHandler=(event)=>{
    setTitle(event.target.value);
    console.log(event.target.value)
  }
  const amountChangeHandler=(event)=>{
    setAmount(event.target.value);
    console.log(event.target.value)
  }
  const dateChangeHandler=(event)=>{
    setDate(event.target.value);
    console.log(event.target.value)
  }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="title">Title</label>
          <input type="text" name="title" onChange={titleChangeHandler}></input>
        </div>
        <div className="new-expense__control">
          <label for="amount">Amount</label>
          <input type="number" onChange={amountChangeHandler} name="amount"></input>
        </div>
        <div className="new-expense__control">
          <label for="date">Date</label>
          <input type="Date" onChange={dateChangeHandler} name="date"></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit"> Add</button>
        </div>
     </div>
     </form>
  );
}

export default ExpenseForm;

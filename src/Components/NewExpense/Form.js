import "./Form.css";
import React from "react";
function Form() {
  const titlechangehandler=(event)=>{
    console.log(event.target.value)
  }
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label for="title">Title</label>
          <input type="text" name="title" onChange={titlechangehandler}></input>
        </div>
        <div className="new-expense__control">
          <label for="amount">Amount</label>
          <input type="number" name="amount"></input>
        </div>
        <div className="new-expense__control">
          <label for="date">Amount</label>
          <input type="Date" name="date"></input>
        </div>
        <div className="new-expense__actions">
          <button type="submit"> Add</button>
        </div>
      </div>
    </form>
  );
}

export default Form;


function ExpenseDetails(props){

    return (
    <div>
        <div className="expense-item__description">
    <h2> {props.title}</h2>
  </div>
  <div className="expense-item__location">
    <h2> {props.location} </h2>
  </div>
  </div>);
}

export default ExpenseDetails;
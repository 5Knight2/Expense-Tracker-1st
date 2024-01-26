import './ExpenseDate.css'
function ExpenseDate(props){
    const month=props.date.toLocaleString('en-us',{month:'long'});
    const year=props.date.getFullYear();
    const date=props.date.getDate();
    return (
        <div className='expense-date'>
        <div className='expense-date__date'>{date}</div>
        <div className='.expense-date__month'>{month}</div>
        <div className='.expense-date__year'>{year}</div>
      </div>
    );
}

export default ExpenseDate; 
import './ExpenseItem.css'
function ExpenseItem(){
    const Title='Food'
    const Date1=new Date(2024,1,25);
    const Amount=2420;
    const location="Akola"
    return (
        
        <div className='expense-item'>
        <div >{Date1.toDateString()}</div>
        <div className='expense-item__description'><h2>  {Title}</h2></div>
        <div className='expense-item__description'><h2>  {location}</h2></div>
        <div className='expense-item__price'>{Amount}</div>
        </div>
        
        );
}

export default ExpenseItem; 
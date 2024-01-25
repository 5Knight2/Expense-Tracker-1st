import './ExpenseItem.css'
function ExpenseItem(){
   
    return (
        <div className='expense-item'>
        <div >25-01-24</div>
        <div className='expense-item__description'><h2>Food</h2></div>
        <div className='expense-item__price'>240</div>
        </div>
        
        );
}

export default ExpenseItem; 
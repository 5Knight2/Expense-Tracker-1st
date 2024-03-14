import "./Expenses.css";
import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from '../UI/Card'
import ExpensesChart from "./ExpensesChart";
const Expenses=(props)=>{
const [expenseArray,setExpenseArray]=useState(props.items);

const [filteredYear,setFilteredYear]=useState('2020');
    const filterchangeHandler=(selectedYear)=>{
        setFilteredYear(selectedYear)
        setExpenseArray(props.items.filter((currentExpense)=>currentExpense.date.getFullYear()==selectedYear))
    }

    let expensesContent=<p>No expenses available</p>

    if(expenseArray.length>0) expensesContent=expenseArray.map((expense)=>{
        return <ExpenseItem key={expense.id} title={expense.title} price={expense.amount} date={expense.date} location={expense.location}></ExpenseItem>
    })
    
    return(
        <Card className="expenses">
            
            <ExpensesFilter value={filteredYear} onChangeFilter={filterchangeHandler}></ExpensesFilter>
            <ExpensesChart expenses={expenseArray} />
            {expenseArray.map((expense)=>{
                return <ExpenseItem key={expense.id} title={expense.title} price={expense.amount} date={expense.date} location={expense.location}></ExpenseItem>
            })}
        {/* <ExpenseItem title={props.items[0].title} price={props.items[0].amount} date={props.items[0].date} location={props.items[0].location }></ExpenseItem>
        <ExpenseItem title={props.items[1].title} price={props.items[1].amount} date={props.items[1].date} location={props.items[1].location }></ExpenseItem>
        <ExpenseItem title={props.items[2].title} price={props.items[2].amount} date={props.items[2].date} location={props.items[2].location }></ExpenseItem> */}
        </Card>
    )
}
export default Expenses;
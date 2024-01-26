import React,{useState} from "react";
const ExpenseDetails=(props)=>{

  const [title,setTitle]=useState(props.title);
  const [price,setPrice]=useState(props.price);

  const deleteClicked=()=>{
    console.log('delete clicked');
  }
  const changepPriceClicked=()=>{
    setPrice(100);
  }

  const changeTitleClicked=()=>{
    setTitle('clicked');
  }

    return (
    <div className="expense-item__description">
        
    <h2> {title}</h2>


    <h2> {props.location} </h2>

  <div className="expense-item__price">{price}</div>
  <button  onClick={changeTitleClicked}> Change Title</button>
  <button className="delete" onClick={deleteClicked}> Delete</button>
  
  <button className="delete" onClick={changepPriceClicked}>Price to 100</button>
  
  </div>);
}

export default ExpenseDetails;
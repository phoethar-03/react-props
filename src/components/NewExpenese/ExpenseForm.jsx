import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title,setTitle] = useState("");
  const [amount,setAmount] = useState("");
  const [dateValue,setDateValue] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   dateValue: "",
  // });

  const titleHandler = (e) => {
    setTitle(e.target.value);
  }

  const amountHandler = (e) => {
    setAmount(e.target.value);
  }

  const dateHandler = (e) => {
    setDateValue(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const expense = 
      {
        title,
        amount,
        date: new Date(dateValue),
      };
      props.onSaveExpenseData(expense);
      // console.log(expense);
      setTitle("");
      setAmount("");
      setDateValue("");
  }

  return (
    <form onSubmit={submitHandler}>
    <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} min="0.01" step="0.01" onChange={amountHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={dateValue} min="2019-01-01" step="2023-12-31" onChange={dateHandler}/>
        </div>
        <div className="new-expense__actions"> 
          <button type="submit">Add Expense</button>
        </div>
    </div>
    </form>
  )
}

export default ExpenseForm
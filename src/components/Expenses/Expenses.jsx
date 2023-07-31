import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpenseChart from "./ExpenseChart";

const Expenses = ({item}) => {
    const [filterYear, setFilterYear] = useState("selectYear");
    const filterChangeHandler = (filterYearVal) => {
        setFilterYear(filterYearVal);
    };
    const filteredExpenses = item.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;        
    });

    // let expenseContent = <p>No Expense Found</p>
    // if(filteredExpenses.length > 0){
    //     <ExpenseList items={filteredExpenses} />
    // }

    let allExpenseItems = [...item];

    return(
        <div>
            <ExpenseChart expenses={filteredExpenses} years={filterYear}/>
            <ExpenseFilter 
                selected = {filterYear} 
                onChangeFilter = {filterChangeHandler}
            />
            {
                filterYear === "selectYear" 
                ?( <ExpenseList items={allExpenseItems} />)
                : ( <ExpenseList items={filteredExpenses} /> )
            }
            
        </div>
    )
}
export default Expenses;
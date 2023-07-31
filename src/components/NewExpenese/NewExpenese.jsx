
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (newExpenseData) => {
        const newExpenseObj =  {
            ...newExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(newExpenseObj);
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;
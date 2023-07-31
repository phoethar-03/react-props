
import "./ExpenseItem.css";
import ExpenseData from "./ExpenseData";
import ExpenseTitle from "./ExpenseTitle";
import ExpenseAmount from "./ExpenseAmount";
import Card from "../UI/Card";

const ExpenseItem = ({date, title, amount}) => {
  

  return (
    <li>
        <Card className="expense-item">
          <ExpenseData date={date}/>
          <div>
            <ExpenseTitle title={title}/>
            <ExpenseAmount amount={amount}/>
          </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

import React from 'react'
import ExpenseItem from './ExpenseItem';
import "./ExpenseList.css";

const ExpenseList = ({items}) => {
    if(items.length === 0){
        return <h2 className='expenses-list__fallback'>No Items Found!</h2>
    } else if (items.length > 0){
        return (
            <ul className='expenses-list'>
              {
                  items.map((expense) => (
                      <ExpenseItem
                          key={expense.id}
                          title={expense.title}
                          amount={expense.amount}
                          date={expense.date}
                      />
                  ))
              }
            </ul>
            )
    }
}

export default ExpenseList;
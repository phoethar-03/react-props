import React from 'react'
import Chart from "../Chart/Chart";

const chartDataPoint = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Set", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
];


const ExpenseChart = ({expenses, years}) => {
    for(let expense of expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoint[expenseMonth].value += expense.amount;
    }
  return (
    <Chart dataPoints={chartDataPoint} year={years}/>
  )
}

export default ExpenseChart;
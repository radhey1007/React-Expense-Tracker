import React , { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear , setFilteredYear] = useState('2020');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    }

    const filterExpenses = props.expenses.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear
    });
 
    return (
        <Card className="expenses">     
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/> 
         <ExpensesChart expenses = {filterExpenses}/>
        <ExpensesList expense= {filterExpenses} />
    </Card>
    )
}

export default Expenses;

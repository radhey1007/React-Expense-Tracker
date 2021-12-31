import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';

function App() {
  const expenses = [
    {
    id:'e1',  
    title:'Car Insurance', 
    date:new Date(2021, 8,30),
    amount:5000
  },
  {
    id:'e2',  
    title:'Bike Insurance', 
    date:new Date(2021, 9, 10),
    amount:1000
  },
  {
    id:'e3',  
    title:'LED TV', 
    date:new Date(2021, 10,20),
    amount:500
  },
  {
    id:'e4',  
    title:'Microwave', 
    date:new Date(2021, 11,25),
    amount:200
  }
]

  const addExpenseHandler = (expense) => {
    console.log(expense , 'in App Js');
  }

  return (
    <div>      
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses expenses={expenses} / >
    </div>
  );
}

export default App;

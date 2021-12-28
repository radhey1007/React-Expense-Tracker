import ExpenseItem from "./components/ExpenseItem";

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

  return (
    <div>      
      <h2>Let's get started!</h2>
      <ExpenseItem 
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem 
      title={expenses[1].title}
      amount={expenses[1].amount}
      date={expenses[1].date}>
  </ExpenseItem>
  <ExpenseItem 
    title={expenses[2].title}
    amount={expenses[2].amount}
    date={expenses[2].date}>
</ExpenseItem>
<ExpenseItem 
    title={expenses[3].title}
    amount={expenses[3].amount}
    date={expenses[3].date}>
</ExpenseItem>
    </div>
  );
}

export default App;

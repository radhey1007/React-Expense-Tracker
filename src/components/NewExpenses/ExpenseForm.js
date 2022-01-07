import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm  = (props) => {
    const [enteredTitle, setEnteredTitle]  = useState('');
    const [enteredAmount, setEnteredAmount]  = useState('');
    const [enteredDate, setEnteredDate]  = useState('');


    //   *** Inspite of creating separte state create object type state ***
    // const [userInput,setUserInput]  = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // It will not give the updated state 
        // setUserInput({
        //     ...userInput,
        //     enteredTitle:event.target.value
        // });

        // best way to update the state , It will always give the latest state
        // setUserInput((prevState) => {
        //     console.log(prevState , 'prevstate' , event.target.value);
        //     return {
        //         ...prevState,    // it will copy the previous key value pair of state
        //         enteredTitle:event.target.value
        //     }
        // });
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount:event.target.value
        // });

        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,    
        //         enteredAmount:event.target.value
        //     }
        // })
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate:event.target.value
        // });
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,  
        //         enteredDate:event.target.value
        //     }
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault();       
        const expenseData = {
            title:enteredTitle,
            date:new Date(enteredDate),
            amount:+enteredAmount
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (        
            <form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" min="0.0.1" step="0.0.1" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
                </div>
                <div className='new-expense__actions'>
                    <button type="submit"> Add Expense </button>
                </div>
            </form>
    )
}

export default ExpenseForm;

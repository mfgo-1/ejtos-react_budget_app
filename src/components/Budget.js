
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget } = useContext(AppContext);
    const {dispatch,remaining,expenses,currency}= useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const upperLimitValue = 20000;
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    const handleKeyDown = (e) => {
        if ( e.key === 'Enter' && newBudget <= upperLimitValue) {
          dispatch({ type: "SET_BUDGET", payload: newBudget });
        }else if (newBudget > upperLimitValue) {
            alert("The value cannot exceed remaining funds  £"+remaining);   
        }
        else if(newBudget<expenses){
            alert("You cannot reduce the  budget value lower than the spending");
        }
      };
    return (
<div className='alert alert-secondary' style={{width:'250px'}}>
<span style={{width:'15%'}}id='a'>Budget:{currency}</span>
<input style={{width:'60%'}} id='b' type="number" step="10" value={newBudget} onChange={handleBudgetChange} onKeyDown={handleKeyDown}></input>
</div>
    );
};
export default Budget;
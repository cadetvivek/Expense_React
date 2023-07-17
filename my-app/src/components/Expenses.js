import ExpensItem from './Expenseltem';
import './Expenses.css'
import Card from './Card';
import React from 'react';
const Expenses=(props)=>{
return (
<Card className="expenses">

      <ExpensItem title={props.items[0].title}
       amount={props.items[0].amount}
       date={props.items[0].date}
      />
       <ExpensItem title={props.items[0].title}
       amount={props.items[0].amount}
       date={props.items[0].date}
      />
       <ExpensItem title={props.items[0].title}
       amount={props.items[0].amount}
       date={props.items[0].date}
      />
       <ExpensItem title={props.items[0].title}
       amount={props.items[0].amount}
       date={props.items[0].date}
      />
      </Card>
);
}
export default Expenses;
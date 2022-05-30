import { useRef } from "react";

import classes from "./FindBookForm.module.css";
import Card from '../ui/Card';

function FindBookForm(props) {
  const titleRef = useRef();
  const agentsTypeRef = useRef();
  const agentsNameRef = useRef();
  const agentsBirthDateMinRef = useRef();
  const agentsBirthDateMaxRef = useRef();
  const agentsDeathDateMinRef = useRef();
  const agentsDeathDateMaxRef = useRef();
  const descriptionRef = useRef();
  

  const formHandler = (event) => {
    event.preventDefault();
    let query = "";
    const enteredTitle = titleRef.current.value;
    const enteredAgentsType = agentsTypeRef.current.value;
    const enteredAgentName = agentsNameRef.current.value;
    const enteredAgentsBirthDateMin = agentsBirthDateMinRef.current.value;
    const enteredAgentsBirthDateMax = agentsBirthDateMaxRef.current.value;
    const enteredAgentsDeathDateMin = agentsDeathDateMinRef.current.value;
    const enteredAgentsDeathDateMax = agentsDeathDateMaxRef.current.value;
    const enteredDescription = descriptionRef.current.value;

    if (enteredTitle) {
      query += `title_contains=${enteredTitle}&`;
    }
    if (enteredAgentsType) {
      query += `has_agent_type=${enteredAgentsType}&`;
    }
    if (enteredAgentName) {
      query += `agent_name_contains=${enteredAgentName}&`;
    }
    if (enteredAgentsBirthDateMin) {
      query += `agent_birth_date_range_min=${enteredAgentsBirthDateMin}&`;
    }
    if (enteredAgentsBirthDateMax) {
      query += `agent_birth_date_range_max=${enteredAgentsBirthDateMax}&`;
    }
    if (enteredAgentsDeathDateMin) {
      query += `agent_death_date_range_min=${enteredAgentsDeathDateMin}&`;
    }
    if (enteredAgentsDeathDateMax) {
      query += `agent_death_date_range_max=${enteredAgentsDeathDateMax}&`;
    }
    if(enteredDescription){
      query+=`description_contains=${enteredDescription}&`
    }

    props.onSearchHandler(query);
  };

  return (
    <Card>
      <h1>Haven't found something matching?</h1>
      <p>Browse the PG catalogue to find something interesting.</p>
    
      <form className={classes["form"]} onSubmit={formHandler}>
        <label htmlFor="title" className={classes["form__label"]}>Title Contains:</label>
        <input type="text" id="title" className={classes["form__input"]}ref={titleRef}/>

        <label htmlFor="agents_type" className={classes["form__label"]}>Agents type:</label>
        <input type="text" id="agents_type" className={classes["form__input"]} ref={agentsTypeRef}></input>

        <label htmlFor="agents_name" className={classes["form__label"]}>Agents person name contains:</label>
        <input type="text" id="agents_name" className={classes["form__input"]} ref={agentsNameRef}/>

        <label className={classes["form__label"]}>Agents person birth date is in range:</label>
        <div className={classes['range-container']}>
          <input type="text" className={[classes["form__input"], classes["range-container__input"]].join(" ")} placeholder="min" ref={agentsBirthDateMinRef}/><span>-</span>
          <input type="text" className={[classes["form__input"], classes["range-container__input"]].join(" ")} placeholder="max" ref={agentsBirthDateMaxRef}/>
        </div>

        <label className={classes["form__label"]}>Agents person death date is in range:</label>
        <div className={classes['range-container']}>
          <input type="text" className={[classes["form__input"], classes["range-container__input"]].join(" ")} placeholder="min" ref={agentsDeathDateMinRef}/><span>-</span>
          <input type="text" className={[classes["form__input"], classes["range-container__input"]].join(" ")} placeholder="max" ref={agentsDeathDateMaxRef}/>
        </div>

        <label htmlFor="description" className={classes["form__label"]}> Description Contains:</label>
        <input type="text" id="description" className={classes["form__input"]} ref={descriptionRef}/>

        <button className={classes["form__button"]}>Search</button>
      </form>
    </Card>
  );
}

export default FindBookForm;

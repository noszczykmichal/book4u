import { useRef } from 'react';

import { agentsTypeArray, languagesArray, validationHandler } from './FormDataAndValidation';
import classes from './FindBookForm.module.css';
import Card from '../../ui/Card';

function FindBookForm(props) {

  const titleRef = useRef();
  const descriptionRef = useRef();
  const agentsTypeRef = useRef();
  const agentsNameRef = useRef();
  const agentsBirthDateMinRef = useRef();
  const agentsBirthDateMaxRef = useRef();
  const agentsDeathDateMinRef = useRef();
  const agentsDeathDateMaxRef = useRef();
  const downloadRangeMinRef = useRef();
  const downloadRangeMaxRef = useRef();
  const languageRef = useRef();

  const inputsRefObj = {
    title: titleRef,
    description: descriptionRef,
    agentsType: agentsTypeRef,
    agentsName: agentsNameRef,
    agentsBirthDateMin: agentsBirthDateMinRef,
    agentsBirthDateMax: agentsBirthDateMaxRef,
    agentsDeathDateMin: agentsDeathDateMinRef,
    agentsDeathDateMax: agentsDeathDateMaxRef,
    downloadRangeMin: downloadRangeMinRef,
    downloadRangeMax: downloadRangeMaxRef,
    language: languageRef
  }

  const formHandler = (event) => {
    event.preventDefault();
    let query = validationHandler(inputsRefObj)

    props.onSearchHandler(query);
  }

  return (
    <Card>
      <form className={classes['form']} onSubmit={formHandler}>
        <label htmlFor="title" className={classes['form__label']}>Title Contains:</label>
        <input type="text" id="title" className={classes['form__input']} ref={titleRef} />

        <label htmlFor="description" className={classes['form__label']}>Description Contains:</label>
        <input type="text" id="description" className={classes['form__input']} ref={descriptionRef} />

        <label htmlFor="agents_type" className={classes['form__label']}>Agents type:</label>
        <select className={classes['form__select']} name="agents_type" id="agents_type" ref={agentsTypeRef}>
          {agentsTypeArray.map((type) => {
            const key = Math.random().toString();

            return <option className={classes['select__option']} key={key} value={type}>{type}</option>
          })}
        </select>

        <label htmlFor="agents_name" className={classes['form__label']}>Agents person name contains:</label>
        <input type="text" id="agents_name" className={classes['form__input']} ref={agentsNameRef} />

        <label className={classes['form__label']}>Agents person birth date is in range:</label>
        <div className={classes['range-container']}>
          <input type="text" className={[classes['form__input'], classes['range-container__input']].join(' ')} placeholder="min" ref={agentsBirthDateMinRef} />
          <span>-</span>
          <input type="text" className={[classes['form__input'], classes['range-container__input']].join(' ')} placeholder="max" ref={agentsBirthDateMaxRef} />
        </div>

        <label className={classes['form__label']}>Agents person death date is in range:</label>
        <div className={classes['range-container']}>
          <input type="text" className={[classes['form__input'], classes['range-container__input']].join(' ')} placeholder="min" ref={agentsDeathDateMinRef} />
          <span>-</span>
          <input type="text" className={[classes['form__input'], classes['range-container__input']].join(' ')} placeholder="max" ref={agentsDeathDateMaxRef} />
        </div>

        <label className={classes['form__label']}>Downloads is in range:</label>
        <div className={classes['range-container']}>
          <input type="text" className={[classes['form__input'], classes['range-container__input']].join(' ')} placeholder="min" ref={downloadRangeMinRef} />
          <span>-</span>
          <input type="text" className={[classes['form__input'], classes['range-container__input']].join(' ')} placeholder="max" ref={downloadRangeMaxRef} />
        </div>

        <label htmlFor="language" className={classes['form__label']}>Select language:</label>
        <select className={classes['form__select']} name="language" id="language" ref={languageRef}>
          {languagesArray.map((type) => {
            const key = Math.random().toString();

            return <option className={classes['select__option']} key={key} value={type}>{type}</option>
          })}
        </select>

        <button className={classes['form__button']}>Search</button>
      </form>
    </Card >
  )
}

export default FindBookForm

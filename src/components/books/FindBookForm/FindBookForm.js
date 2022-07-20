import { useContext, useRef, useEffect } from 'react';

import { agentsTypeArray, languagesArray, validationHandler } from './FormDataAndValidation';
import classes from './FindBookForm.module.css';
import Card from '../../ui/Card';
import GlobalContext from '../../../store/global-context';
import GearIcon from './GearIcon';
import Select from './Select';
import RefreshIcon from './RefreshIcon';

function FindBookForm(props) {
  const globalCtx = useContext(GlobalContext);

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

  const toggleBarRef = useRef();
  const formRef = useRef();

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
  
    // console.log(query);
    props.onSearchHandler(query);
  }

  const setElementHeight = useRef(globalCtx);

  useEffect(() => {
    setElementHeight.current.toggleBarHeightSetter(toggleBarRef);
    setElementHeight.current.formHeightSetter(formRef);
  }, [])

  return (
    <Card animated="true">
      <div className={classes['toggle-bar']} ref={toggleBarRef}>
        <div className={classes['actions']}>
        <button className={[classes['actions__button'], classes['actions__button--animated']].join(' ')} onClick={globalCtx.clearInputValues}><RefreshIcon/>Clear</button>
        <button className={classes['actions__button']} onClick={globalCtx.findBookFormVisibilitySetter}><GearIcon />Filters</button>
        </div>
        <p className={classes['toggle-bar__text']}>Haven't found something matching?<br />Use ours filters to browse the PG
          catalogue.</p>
      </div>
      <form className={classes['form']} onSubmit={formHandler} ref={formRef}>
        <label htmlFor="title" className={classes['form__label']}>Title Contains:</label>
        <input type="text" id="title" name="title_contains" className={classes['form__input']} onChange={globalCtx.inputValueSetter} ref={titleRef} />

        <label htmlFor="description" className={classes['form__label']}>Description Contains:</label>
        <input type="text" id="description" name="description_contains" className={classes['form__input']} onChange={globalCtx.inputValueSetter} ref={descriptionRef} />

        <label htmlFor="agents_type" className={classes['form__label']}>Agents type:</label>
        <Select nameForSelect="has_agent_type" options={agentsTypeArray} ref={agentsTypeRef}/>

        <label htmlFor="agents_name" className={classes['form__label']}>Agents person name contains:</label>
        <input type="text" id="agents_name" name="agent_name_contains" className={classes['form__input']} onChange={globalCtx.inputValueSetter} ref={agentsNameRef} />

        <label className={classes['form__label']}>Agents person birth date is in range:</label>
        <div className={classes['range-container']}>
          <input type="text" name="agent_birth_date_range_min" className={[classes['form__input'], classes['range-container__input']].join(' ')} placeholder="min" onChange={globalCtx.inputValueSetter} ref={agentsBirthDateMinRef} />
          <span>-</span>
          <input type="text" name="agent_birth_date_range_max" className={[classes['form__input'], classes['range-container__input']].join(' ')} placeholder="max" onChange={globalCtx.inputValueSetter} ref={agentsBirthDateMaxRef} />
        </div>

        <label className={classes['form__label']}>Agents person death date is in range:</label>
        <div className={classes['range-container']}>
          <input type="text" name="agent_death_date_range_min" className={[classes['form__input'], classes['range-container__input']].join(' ')} placeholder="min" onChange={globalCtx.inputValueSetter} ref={agentsDeathDateMinRef} />
          <span>-</span>
          <input type="text" name="agent_death_date_range_max" className={[classes['form__input'], classes['range-container__input']].join(' ')} placeholder="max" onChange={globalCtx.inputValueSetter} ref={agentsDeathDateMaxRef} />
        </div>

        <label className={classes['form__label']}>Downloads is in range:</label>
        <div className={classes['range-container']}>
          <input type="text" name="downloads_range_min" className={[classes['form__input'], classes['range-container__input']].join(' ')} placeholder="min" onChange={globalCtx.inputValueSetter} ref={downloadRangeMinRef} />
          <span>-</span>
          <input type="text" name="downloads_range_max" className={[classes['form__input'], classes['range-container__input']].join(' ')} placeholder="max" onChange={globalCtx.inputValueSetter} ref={downloadRangeMaxRef} />
        </div>

        <label htmlFor="language" className={classes['form__label']}>Select language:</label>
        <Select nameForSelect="languages" options={languagesArray} ref={languageRef}/>

        <button className={classes['form__button']}>Search</button>
      </form>
    </Card >
  )
}

export default FindBookForm

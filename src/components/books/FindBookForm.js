import { useRef } from 'react';

import classes from './FindBookForm.module.css';
import Card from '../ui/Card';

function FindBookForm(props) {
  const agentTypeArray = [
    '',
    'Annotator',
    'Author',
    'Commentator',
    'Compiler',
    'Composer',
    'Contributor',
    'Editor',
    'Illustrator',
    'Other',
    'Photographer',
    'Translator',
  ]
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

  const formHandler = (event) => {
    event.preventDefault();
    let query = '';
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredAgentsType = agentsTypeRef.current.value;
    const enteredAgentName = agentsNameRef.current.value;
    const enteredAgentsBirthDateMin = agentsBirthDateMinRef.current.value;
    const enteredAgentsBirthDateMax = agentsBirthDateMaxRef.current.value;
    const enteredAgentsDeathDateMin = agentsDeathDateMinRef.current.value;
    const enteredAgentsDeathDateMax = agentsDeathDateMaxRef.current.value;
    const enteredDownloadRangeMin = downloadRangeMinRef.current.value;
    const enteredDownloadRangeMax = downloadRangeMaxRef.current.value;

    if (enteredTitle) {
      query += `title_contains=${enteredTitle}&`;
    }
    if (enteredDescription) {
      query += `description_contains=${enteredDescription}&`;
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
    if (enteredDownloadRangeMin) {
      query += `downloads_range_min=${enteredDownloadRangeMin}&`;
    }
    if (enteredDownloadRangeMax) {
      query += `downloads_range_max=${enteredDownloadRangeMax}&`;
    }

    props.onSearchHandler(query);
  }

  return (
    <Card>
      <form className={classes['form']} onSubmit={formHandler}>
        <label htmlFor="title" className={classes['form__label']}>
          Title Contains:
        </label>
        <input
          type="text"
          id="title"
          className={classes['form__input']}
          ref={titleRef}
        />

        <label htmlFor="description" className={classes['form__label']}>
          Description Contains:
        </label>
        <input
          type="text"
          id="description"
          className={classes['form__input']}
          ref={descriptionRef}
        />

        <label htmlFor="agents_type" className={classes['form__label']}>
          Agents type:
        </label>
        <select className={classes['form__select']} name="agents_type" id="agents_type" ref={agentsTypeRef}>
          {agentTypeArray.map((type) => {
            const key = Math.random().toString();

            return <option className={classes['select__option']} key={key} value={type}>{type}</option>
          })}
        </select>

        <label htmlFor="agents_name" className={classes['form__label']}>
          Agents person name contains:
        </label>
        <input
          type="text"
          id="agents_name"
          className={classes['form__input']}
          ref={agentsNameRef}
        />

        <label className={classes['form__label']}>
          Agents person birth date is in range:
        </label>
        <div className={classes['range-container']}>
          <input
            type="text"
            className={[
              classes['form__input'],
              classes['range-container__input'],
            ].join(' ')}
            placeholder="min"
            ref={agentsBirthDateMinRef}
          />
          <span>-</span>
          <input
            type="text"
            className={[
              classes['form__input'],
              classes['range-container__input'],
            ].join(' ')}
            placeholder="max"
            ref={agentsBirthDateMaxRef}
          />
        </div>

        <label className={classes['form__label']}>
          Agents person death date is in range:
        </label>
        <div className={classes['range-container']}>
          <input
            type="text"
            className={[
              classes['form__input'],
              classes['range-container__input'],
            ].join(' ')}
            placeholder="min"
            ref={agentsDeathDateMinRef}
          />
          <span>-</span>
          <input
            type="text"
            className={[
              classes['form__input'],
              classes['range-container__input'],
            ].join(' ')}
            placeholder="max"
            ref={agentsDeathDateMaxRef}
          />
        </div>

        <label className={classes['form__label']}>
          Downloads is in range:
        </label>
        <div className={classes['range-container']}>
          <input
            type="text"
            className={[
              classes['form__input'],
              classes['range-container__input'],
            ].join(' ')}
            placeholder="min"
            ref={downloadRangeMinRef}
          />
          <span>-</span>
          <input
            type="text"
            className={[
              classes['form__input'],
              classes['range-container__input'],
            ].join(' ')}
            placeholder="max"
            ref={downloadRangeMaxRef}
          />
        </div>

        <button className={classes['form__button']}>Search</button>
      </form>
    </Card >
  )
}

export default FindBookForm

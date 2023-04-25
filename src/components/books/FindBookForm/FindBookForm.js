/* eslint-disable jsx-a11y/label-has-associated-control */
import PropTypes from "prop-types";
import { useContext, useRef, useEffect } from "react";

import {
  agentsTypeArray,
  languagesArray,
  validationHandler,
} from "./FormDataAndValidation";
import classes from "./FindBookForm.module.css";
import Card from "../../ui/Card";
import UIContext from "../../../store-context/uiContext";
import GearIcon from "./GearIcon";
import Select from "./Select";
import RefreshIcon from "./RefreshIcon";
import Input from "./Input";

function FindBookForm({ onSearchHandler }) {
  const uiContext = useContext(UIContext);
  const {
    inputStoredValueObj,
    clearInputValues,
    findBookFormVisibilitySetter,
  } = uiContext;
  const toggleBarRef = useRef();
  const formRef = useRef();
  const setElementHeight = useRef(uiContext);

  const formHandler = (event) => {
    event.preventDefault();
    const query = validationHandler(inputStoredValueObj);

    // console.log(query);
    onSearchHandler(query);
  };

  useEffect(() => {
    setElementHeight.current.elementHeightSetter("toggleBar", toggleBarRef);
    setElementHeight.current.elementHeightSetter("form", formRef);
  }, []);

  return (
    <Card animated="true">
      <div className={classes["toggle-bar"]} ref={toggleBarRef}>
        <div className={classes.actions}>
          <button
            type="button"
            className={[
              classes.actions__button,
              classes["actions__button--animated"],
            ].join(" ")}
            onClick={clearInputValues}
          >
            <RefreshIcon />
            Clear
          </button>
          <button
            type="button"
            className={classes.actions__button}
            onClick={findBookFormVisibilitySetter}
          >
            <GearIcon />
            Filters
          </button>
        </div>
        <p className={classes["toggle-bar__text"]}>
          Haven&apos;t found something matching?
          <br />
          Use ours filters to browse the PG catalogue.
        </p>
      </div>
      <form className={classes.form} onSubmit={formHandler} ref={formRef}>
        <label htmlFor="title" className={classes.form__label}>
          Title Contains:
          <br />
          <Input
            htmlType="text"
            htmlId="title"
            htmlName="title_contains"
            htmlClass={["form__input"]}
          />
        </label>

        <label htmlFor="description" className={classes.form__label}>
          Description Contains:
          <br />
          <Input
            htmlType="text"
            htmlId="description"
            htmlName="description_contains"
            htmlClass={["form__input"]}
          />
        </label>

        <label htmlFor="agents_type" className={classes.form__label}>
          Agents type:
          <Select nameForSelect="has_agent_type" options={agentsTypeArray} />
        </label>

        <label htmlFor="agents_name" className={classes.form__label}>
          Agents person name contains:
          <br />
          <Input
            htmlType="text"
            htmlId="agents_name"
            htmlName="agent_name_contains"
            htmlClass={["form__input"]}
          />
        </label>

        <label className={classes.form__label}>
          Agents person birth date is in range:
          <div className={classes["range-container"]}>
            <Input
              htmlType="text"
              htmlName="agent_birth_date_range_min"
              htmlClass={["form__input", "range-container__input"]}
              htmlPlaceholder="min"
            />
            <span>-</span>
            <Input
              htmlType="text"
              htmlName="agent_birth_date_range_max"
              htmlClass={["form__input", "range-container__input"]}
              htmlPlaceholder="max"
            />
          </div>
        </label>

        <label className={classes.form__label}>
          Agents person death date is in range:
          <div className={classes["range-container"]}>
            <Input
              htmlType="text"
              htmlName="agent_death_date_range_min"
              htmlClass={["form__input", "range-container__input"]}
              htmlPlaceholder="min"
            />
            <span>-</span>
            <Input
              htmlType="text"
              htmlName="agent_death_date_range_max"
              htmlClass={["form__input", "range-container__input"]}
              htmlPlaceholder="max"
            />
          </div>
        </label>

        <label className={classes.form__label}>
          Downloads is in range:
          <div className={classes["range-container"]}>
            <Input
              htmlType="text"
              htmlName="downloads_range_min"
              htmlClass={["form__input", "range-container__input"]}
              htmlPlaceholder="min"
            />
            <span>-</span>
            <Input
              htmlType="text"
              htmlName="downloads_range_max"
              htmlClass={["form__input", "range-container__input"]}
              htmlPlaceholder="max"
            />
          </div>
        </label>

        <label htmlFor="language" className={classes.form__label}>
          Select language:
          <Select nameForSelect="languages" options={languagesArray} />
        </label>

        <button type="submit" className={classes.form__button}>
          Search
        </button>
      </form>
    </Card>
  );
}

FindBookForm.propTypes = {
  onSearchHandler: PropTypes.func.isRequired,
};

export default FindBookForm;

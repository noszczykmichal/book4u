/* eslint-disable jsx-a11y/label-has-associated-control */
import { useContext, useRef, useEffect, FC, FormEvent } from "react";

import {
  agentsTypeConfig,
  languagesArray,
  validationHandler,
} from "../../../utils/FormDataAndValidation";
import classes from "./FindBookForm.module.css";
import Card from "../../ui/Card";
import UIContext from "../../../store-context/uiContext";
import GearIcon from "./GearIcon";
import Select from "./Select";
import RefreshIcon from "./RefreshIcon";
import Input from "./Input";

interface FindBookFormProps {
  onSearchHandler: (query: string | null) => void;
}

const FindBookForm: FC<FindBookFormProps> = ({ onSearchHandler }) => {
  const uiContext = useContext(UIContext);
  const {
    searchFormValues,
    clearInputValues,
    setFindBookFormVisibilityHandler,
    setElementHeight,
  } = uiContext;
  const toggleBarRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const clearButtonClasses = [
    classes.actions__button,
    classes["actions__button--animated"],
  ].join(" ");

  const formHandler = (event: FormEvent) => {
    event.preventDefault();
    const query = validationHandler(searchFormValues);

    onSearchHandler(query);
  };

  useEffect(() => {
    setElementHeight("toggleBar", toggleBarRef);
    setElementHeight("form", formRef);
  }, []);

  return (
    <Card animated>
      <div className={classes["toggle-bar"]} ref={toggleBarRef}>
        <div className={classes.actions}>
          <button
            type="button"
            className={clearButtonClasses}
            onClick={clearInputValues}
          >
            <RefreshIcon />
            Clear
          </button>
          <button
            type="button"
            className={classes.actions__button}
            onClick={setFindBookFormVisibilityHandler}
          >
            <GearIcon />
            Filters
          </button>
        </div>
        <p className={classes["toggle-bar__text"]}>
          Haven&apos;t found something matching?
          <br />
          Use our filters to browse the PG catalogue.
        </p>
      </div>
      <form className={classes.form} onSubmit={formHandler} ref={formRef}>
        <label className={classes.form__label}>
          Title Contains:
          <Input
            htmlType="text"
            htmlName="title_contains"
            htmlClass={["form__input"]}
          />
        </label>

        <label className={classes.form__label}>
          Description Contains:
          <Input
            htmlType="text"
            htmlName="description_contains"
            htmlClass={["form__input"]}
          />
        </label>

        <label htmlFor="agents_type" className={classes.form__label}>
          Agents type:
          <Select nameForSelect="has_agent_type" options={agentsTypeConfig} />
        </label>

        <label className={classes.form__label}>
          Agents person name contains:
          <Input
            htmlType="text"
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

        <label className={classes.form__label}>
          Select language:
          <Select nameForSelect="languages" options={languagesArray} />
        </label>

        <button type="submit" className={classes.form__button}>
          Search
        </button>
      </form>
    </Card>
  );
};

export default FindBookForm;

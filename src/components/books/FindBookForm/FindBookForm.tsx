import { useContext, useRef, useEffect, FC, FormEvent } from "react";

import {
  agentsTypeConfig,
  languagesArray,
  validationHandler,
} from "@/utils/FormDataAndValidation";
import Card from "@/components/ui/Card/Card";
import UIContext from "@/store-context/uiContext";
import GearIcon from "@/components/books/FindBookForm/GearIcon/GearIcon";
import Select from "@/components/books/FindBookForm/Select/Select";
import RefreshIcon from "@/components/books/FindBookForm/RefreshIcon/RefreshIcon";
import Input from "@/components/books/FindBookForm/Input/Input";
import classes from "@/components/books/FindBookForm/FindBookForm.module.css";

interface FindBookFormProps {
  onSearchHandler: (query: string | null) => void;
}

const FindBookForm: FC<FindBookFormProps> = ({ onSearchHandler }) => {
  const uiContext = useContext(UIContext);
  const {
    searchFormValues,
    clearInputValues,
    setFindBookFormVisibilityHandler,
  } = uiContext;
  const uiContextRef = useRef(uiContext);
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
    uiContextRef.current.setElementHeight("toggleBar", toggleBarRef);
    uiContextRef.current.setElementHeight("form", formRef);
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
        <label htmlFor="title_contains" className={classes.form__label}>
          Title Contains:
          <Input
            htmlType="text"
            htmlName="title_contains"
            htmlClass={["form__input"]}
          />
        </label>

        <label htmlFor="description_contains" className={classes.form__label}>
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

        <label htmlFor="agent_name_contains" className={classes.form__label}>
          Agents person name contains:
          <Input
            htmlType="text"
            htmlName="agent_name_contains"
            htmlClass={["form__input"]}
          />
        </label>

        <label
          htmlFor="agent_birth_date_range_min"
          className={classes.form__label}
        >
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

        <label
          htmlFor="agent_death_date_range_min"
          className={classes.form__label}
        >
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

        <label htmlFor="downloads_range_min" className={classes.form__label}>
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

        <label htmlFor="languages" className={classes.form__label}>
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

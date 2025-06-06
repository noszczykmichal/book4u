import { SearchFormObj } from "@/utils/types";

export const agentsTypeConfig = [
  "",
  "Annotator",
  "Author",
  "Commentator",
  "Compiler",
  "Composer",
  "Contributor",
  "Editor",
  "Illustrator",
  "Other",
  "Photographer",
  "Translator",
];

export const languagesArray = [
  "",
  "zh",
  "yi",
  "tl",
  "te",
  "sv",
  "sr",
  "sl",
  "sa",
  "ru",
  "ro",
  "rmr",
  "pt",
  "pl",
  "oji",
  "oc",
  "no",
  "nl",
  "nav",
  "nap",
  "nai",
  "nah",
  "myn",
  "mi",
  "lt",
  "la",
  "ko",
  "kld",
  "kha",
  "ja",
  "iu",
  "it",
  "is",
  "ilo",
  "ia",
  "hu",
  "he",
  "grc",
  "gla",
  "gl",
  "ga",
  "fy",
  "fur",
  "fr",
  "fi",
  "fa",
  "et",
  "es",
  "eo",
  "enm",
  "en",
  "el",
  "de",
  "da",
  "cy",
  "csb",
  "cs",
  "ceb",
  "ca",
  "brx",
  "br",
  "bgs",
  "bg",
  "arp",
  "ar",
  "ang",
  "ale",
  "af",
].sort();

export const validationHandler = (searchFormState: Partial<SearchFormObj>) => {
  let query = "";

  Object.keys(searchFormState).forEach((input) => {
    const key = input as keyof SearchFormObj;
    const value = searchFormState[key];

    if (value?.trim() !== "") {
      query += `${input}=${value?.trim()}&`;
    }
  });
  return query !== "" ? query : null;
};

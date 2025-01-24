// Api data types
export interface Agent {
  id: number;
  person: string;
  type: string;
}

export interface Resource {
  id: number;
  type: string;
  uri: string;
}

export interface Book {
  id: number;
  type: null;
  title: string;
  description: string;
  downloads: number;
  license: string;
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  agents: Agent[];
  resources: Resource[];
}

// UI Types
export type ActionButtonId = "confirm" | "cancel";
export type ElementHeightType = "toggleBar" | "form";
export type PaginationDirection = "previous" | "next";
export type FindBookFormInputNames =
  | "title_contains"
  | "description_contains"
  | "agent_name_contains"
  | "agent_birth_date_range_min"
  | "agent_birth_date_range_max"
  | "agent_death_date_range_min"
  | "agent_death_date_range_max"
  | "downloads_range_min"
  | "downloads_range_max";
export type FindBookFormSelectNames = "has_agent_type" | "languages";
export type SearchFormKeys = FindBookFormInputNames | FindBookFormSelectNames;
export type SearchFormObj = {
  [key in SearchFormKeys]: string;
};

"use client";

import { useReducer, useMemo, Reducer, ChangeEventHandler } from "react";
import Collapse from "@/app/daisyui/collapse";
import TextInput from "@/app/daisyui/text-input";
import Badge from "@/app/daisyui/badge";
import { Link } from "./link";
import type { TFC } from "@/core/server/useTranslationValues";
import type { SearchFilterTranslationKeys } from "@/app/translations/searchFilter";

export interface FilterOp {
  isAvailable: boolean;
  search: string;
  gte: string;
  lte: string;
}

interface Action<T extends keyof FilterOp> {
  type: T;
  payload?: FilterOp[T];
}

function toCurrency(value: string) {
  const res = Number(value);
  if (value.length === 0 || !res) return "";
  return res.toFixed(2);
}

const reducer: Reducer<FilterOp, Action<keyof FilterOp>> = (state, action) => {
  switch (action.type) {
    case "isAvailable":
      return { ...state, isAvailable: !state.isAvailable };
    case "gte":
      return { ...state, gte: action.payload as string };
    case "lte":
      return { ...state, lte: action.payload as string };
    case "search":
      return { ...state, search: action.payload as string };
    default:
      return state;
  }
};

type OnChangeHandler<T = HTMLInputElement> = ChangeEventHandler<T>;
interface SearchFilterProps {
  filter: FilterOp;
}

const filterOptions = ["search", "isAvailable", "gte", "lte"] as Array<
  keyof FilterOp
>;

export const SearchFilter: TFC<
  SearchFilterProps,
  SearchFilterTranslationKeys
> = ({ filter, t }) => {
  const [state, dispatch] = useReducer(reducer, filter);

  const title = useMemo(() => {
    const badges = filterOptions.flatMap((value) => {
      if (value === "lte" && state.lte) {
        return (
          <Badge outline key={value} className="ml-2">
            &lt;= ${state.lte}
          </Badge>
        );
      }
      if (value === "gte" && state.gte) {
        return (
          <Badge outline key={value} className="ml-2">
            &gt;= ${state.gte}
          </Badge>
        );
      }
      if (value === "search" && state.search) {
        return (
          <Badge className="badge-primary ml-2" key={value}>
            {t.search}
          </Badge>
        );
      }
      if (value === "isAvailable" && state.isAvailable) {
        return (
          <Badge className="badge-primary ml-2" key={value}>
            {t["is available"]}
          </Badge>
        );
      }
    });

    return (
      <div className="flex ">
        <span>{t.filter}</span>
        <span className="flex flex-1 items-center">{badges}</span>
      </div>
    );
  }, [state, t]);

  const query = useMemo(() => {
    return Object.fromEntries(
      (Object.keys(state) as Array<keyof FilterOp>)
        .filter((key) => !!state[key])
        .map((key) => [key, state[key]])
    );
  }, [state]);

  const handleAvailable = () => dispatch({ type: "isAvailable" });

  const handleGte: OnChangeHandler = ({ target }) =>
    dispatch({ type: "gte", payload: target.value });
  const handleLte: OnChangeHandler = ({ target }) =>
    dispatch({ type: "lte", payload: target.value });
  const handleSearch: OnChangeHandler = ({ target }) =>
    dispatch({ type: "search", payload: target.value });

  const handleBlurLte = () =>
    dispatch({ type: "lte", payload: toCurrency(state.lte) });
  const handleBlurGte = () =>
    dispatch({ type: "gte", payload: toCurrency(state.gte) });

  return (
    <Collapse
      title={title}
      arrow
      className="bg-base-200 rounded-md drop-shadow-md"
    >
      <div className="container flex flex-row items-end">
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">{t.search}</span>
          </label>
          <TextInput
            bordered
            aria-label="search"
            className="input-sm input-neutral"
            onChange={handleSearch}
            value={state.search}
          />
        </div>
        <div className="form-control w-40">
          <label
            className="label cursor-pointer flex justify-around "
            htmlFor="filter"
          >
            <span className="label-text">{t["is available"]}</span>
            <input
              id="filter"
              type="checkbox"
              name="isAvailable"
              className="checkbox checkbox-xs checkbox-primary"
              checked={state.isAvailable}
              onChange={handleAvailable}
            />
          </label>
        </div>
      </div>

      <div className="flex items-end">
        <div className="form-control flex-1">
          <label className="label">
            <span className="label-text">{t["price range"]}</span>
          </label>
          <div className="flex justify-around align-middle">
            <div className="relative ">
              <span className="btn btn-sm btn-neutral btn-outline absolute top-0 left-0 rounded-r-none">
                $
              </span>
              <TextInput
                placeholder="gte"
                bordered
                className="input-sm pl-10"
                onChange={handleGte}
                onBlur={handleBlurGte}
                value={state.gte}
              />
            </div>
            <div className="relative">
              <span className="btn btn-sm btn-neutral btn-outline absolute top-0 left-0 rounded-r-none">
                $
              </span>
              <TextInput
                placeholder="lte"
                bordered
                className="input-sm pl-10"
                onChange={handleLte}
                onBlur={handleBlurLte}
                value={state.lte}
              />
            </div>
          </div>
        </div>
        <div className="form-control flex-none">
          <Link
            href={{
              pathname: "/c/all",
              query: { ...query },
            }}
            className="btn btn-outline btn-primary"
          >
            {t.apply}
          </Link>
        </div>
      </div>
    </Collapse>
  );
};

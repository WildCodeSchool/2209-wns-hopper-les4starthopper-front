import { useState } from "react";
import "./mainSearchBar.scss";
import mapPointer from "../../assets/mapPointer.svg";
import useSearch from "../../hooks/useSearch";
import { ISearchbarProps } from "../../interfaces/searchBar";
import { gql, useQuery } from "@apollo/client";
import { getPOIS } from "../../graphql/pointOfInterest.server";
import { getCities } from "../../graphql/city.server";

export function MainSearchBar({ placeholder }: ISearchbarProps) {
  const [search, setSearch] = useState<string>("");
  const { loading, error, data } = useQuery(getCities);
  console.log("🚀 ~ file: MainSearchBar.tsx:13 ~ MainSearchBar ~ data:", data);

  const filteredCityData = useSearch(search, data?.Cities);

  return (
    <div className="searchBar">
      <div className="searchBar__input">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder={placeholder}
        />
        <div className="searchBar__icon">
          <img src={mapPointer} alt="mapsearch" />
        </div>
      </div>

      {filteredCityData.length !== 0 && (
        <div className="searchBar__result">
          <div className="searchBar__result__dataResult">
            {filteredCityData.map((value) => {
              return (
                <a
                  href={value.link}
                  target="_blank"
                  rel="noreferrer"
                  key={value.id}
                >
                  {value.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

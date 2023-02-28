import { useState } from "react";
import "./mainSearchBar.scss";
import mapPointer from "../../assets/mapPointer.svg";
import useSearch from "../../hooks/useSearch";
import { ISearchbarProps } from "../../interfaces/searchBar";

export function MainSearchBar({ placeholder, data }: ISearchbarProps) {
  const [search, setSearch] = useState<string>("");

  const filteredCityData = useSearch(search, data);

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
                  key={value._id}
                >
                  {value.city}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

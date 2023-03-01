import React, { useEffect, useState } from "react";
interface IData {
  _id: number | null | undefined;
  link: string;
  city: string;
}

const useSearch = (search: any, data: any) => {
  const [filteredRow, setFilteredRow] = useState<IData[]>([]);

  useEffect(() => {
    const newFilter = data.filter((value: any) => {
      return value.city.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredRow(newFilter);
  }, [data, search]);

  return search === "" ? [] : filteredRow;
};

export default useSearch;

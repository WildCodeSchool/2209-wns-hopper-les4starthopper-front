import { useEffect, useState } from "react";
interface IData {
  id: number | null | undefined;
  link: string;
  city: string;
  name: string;
}

const useSearch = (search: string, data: IData[]) => {
  const [filteredRow, setFilteredRow] = useState<IData[]>([]);

  useEffect(() => {
    const newFilter = data?.filter((value: any) => {
      return value.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredRow(newFilter);
  }, [data, search]);

  return search === "" ? [] : filteredRow;
};

export default useSearch;

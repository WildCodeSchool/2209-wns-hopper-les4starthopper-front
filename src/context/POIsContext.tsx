import { useQuery } from "@apollo/client";
import React, { createContext, useContext, useEffect, useState } from "react";

import { getPOIS } from "../graphql/pointOfInterest.server";
import { IPointOfInterest } from "../graphql/interfaces/pointofinterest";

export const POIsContext = createContext<{
  pois: IPointOfInterest[];
  onCityChange: (cityId: number) => void;
}>({ pois: [], onCityChange: () => {} });

export function POIsProvider({ children }: { children: React.ReactNode }) {
  const [pois, setPois] = useState<IPointOfInterest[]>([]);

  const { loading, error, data, refetch } = useQuery(getPOIS);

  useEffect(() => {
    if (error) {
      setPois([]);
    }
  }, [error]);

  useEffect(() => {
    if (data) {
      if (data.PointOfinterests) {
        setPois(data.PointOfinterests);
      }
    }
  }, [data]);

  function onCityChange(cityId: number) {
    refetch({ cityId });
  }
  return (
    <POIsContext.Provider value={{ pois, onCityChange }}>
      {children}
    </POIsContext.Provider>
  );
}

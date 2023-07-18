import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

import { ICity } from "../../graphql/interfaces/city";
import { getCity } from "../../graphql/city.server";
import { ICategory } from "../../graphql/interfaces/category";
import { getCategories } from "../../graphql/category.server";
import { IComment } from "../../graphql/interfaces/comment";
import { getComments } from "../../graphql/comment.server";

import { POIsContext } from "../../context/POIsContext";

import "./PointsOfInterest.scss";
import { IPointOfInterest } from "../../graphql/interfaces/pointofinterest";

interface IProps {
  city_id: number;
  category_id: number;
  comment_id: number;
  avg_notes: number;
}

function PointsOfInterest() {
  const {
    loading: city_loading,
    error: city_error,
    data: city_data,
  } = useQuery(getCity);
  const {
    loading: cat_loading,
    error: cat_error,
    data: cat_data,
  } = useQuery(getCategories);
  const {
    loading: com_loading,
    error: com_error,
    data: com_data,
  } = useQuery(getComments);

  const { pois } = useContext(POIsContext);
  /* pois.push(city_data?.city.pointOfInterests); */
  const catWithPois = [];

  const poiCats = () => {
    const catPois: any = {};
    city_data?.city.pointOfInterests.map((poi: IPointOfInterest) => {
      catPois.push((catPois.poi_id = poi.id), (catPois.cats = poi.categories));
      return catPois;
    });
  };

  return (
    <div className="pois-wrapper">
      <div className="pois-header"></div>
      <div className="poi-main">
        <div className="pois-cat"></div>
        <div className="pois-cards"></div>
      </div>
    </div>
  );
}

export default PointsOfInterest;

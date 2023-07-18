import { gql } from "@apollo/client";

export const getCities = gql`
  query Cities {
    Cities {
      id
      name
      latitude
      longitude
      createdById
    }
  }
`;

export const getCityByName = gql`
  query cityByName($name: String!) {
    cityByName(name: $name) {
      id
      latitude
      longitude
      name
      createdById
    }
  }
`;

export const getCity = gql`
  query ($cityId: ID!) {
    city(id: $cityId) {
      id
      name
      latitude
      longitude
      pointOfInterests {
        id
        adress
        description
        latitude
        longitude
        name
        pictures {
          id
          created_at
          url
          createdBy {
            id
          }
        }
        categories {
          id
          name
          icon
        }
      }
    }
  }
`;

export const createCity = gql`
  mutation createCity($data: CityInput!) {
    createCity(data: $data) {
      id
      name
      latitude
      longitude
      createdById
    }
  }
`;

export const updateCity = gql`
  mutation updateCity($data: CityInput!, $updateCityId: ID!) {
    updateCity(data: $data, id: $updateCityId) {
      id
      name
      latitude
      longitude
      updatedById
    }
  }
`;

export const deleteCity = gql`
  mutation deleteCity($deleteCityId: ID!) {
    deleteCity(id: $deleteCityId) {
      id
    }
  }
`;

export const deleteCities = gql`
  mutation deleteCities {
    deleteCities {
      id
    }
  }
`;

import { gql } from "@apollo/client";

export const getPictures = gql`
  query Pictures {
    pictures {
      id
      url
      pointOfInterest {
        id
      }
    }
  }
`;

export const getPictureByPOIID = gql`
  query PictureByPOIId($pointOfInterestId: Float!) {
    pictureByPOIId(pointOfInterestId: $pointOfInterestId) {
      id
      url
    }
  }
`;

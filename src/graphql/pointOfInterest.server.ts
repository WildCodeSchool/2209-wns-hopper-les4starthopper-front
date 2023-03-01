import { gql } from "@apollo/client";

export const getPOIS = gql`
    query {
        PointOfinterests {
            id
            name
            adress
            description
            latitude
            longitude
            createdBy {
                id
            }
            city {
                id
                name
                latitude
                longitude
            }
            comments {
                id
                comment
                note
            }
            categories {
                id
            }
        }
    }
`
export const getPOI = gql`
    query($pointOfInterestId: ID!) {
        pointOfInterest(id: $pointOfInterestId) {
            id
            name
            adress
            description
            latitude
            longitude
            createdBy {
                id
            }
            city {
                id
                name
                latitude
                longitude
            }
            comments {
                id
                comment
                note
            }
            categories {
                id
            }
        }
    }
`
export const createPOI = gql`
mutation($categoryId: Float!, $data: PointOfInterestInput!) {
    createPointOfInterest(categoryId: $categoryId, data: $data) {
        id
        adress
        name
        latitude
        longitude
        city {
            id
            name
        }
    }
  }
`
export const deletePOI = gql`
    mutation($deletePointOfInterestId: ID!) {
        deletePointOfInterest(id: $deletePointOfInterestId) {
            id
        }
    }
`
export const deletePOIS = gql`
    mutation {
        deletePointOfinterests {
            id
        }
    }
`
export const updatePOI = gql`
    mutation($updatePointOfInterestData2: PointOfInterestInput!, $updatePointOfInterestId: ID!) {
        updatePointOfInterest(data: $updatePointOfInterestData2, id: $updatePointOfInterestId) {
            id
        }
    }
`


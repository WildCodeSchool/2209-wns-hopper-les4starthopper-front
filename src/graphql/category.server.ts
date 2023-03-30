import { gql } from "@apollo/client";

export const getCategories = gql`
    query Query {
        Categories {
            id
            icon
            name
        }
    }
`
export const getCategory = gql`
    query($categoryId: ID!) {
        category(id: $categoryId) {
            id
            icon
            name
        }
    }
`
export const createCategory = gql`
    mutation($data: CategoryInput!) {
        createCategory(data: $data) {
            id
            name
            icon
            createdBy {
                id
            }
        }
    }
`
export const deleteCategory = gql`
    mutation($deleteCategoryId: ID!) {
        deleteCategory(id: $deleteCategoryId) {
            id
        }
    }
`
export const deleteCategories = gql`
    mutation {
        deleteCategories {
            id
        }
    }
`
export const updateCategory = gql`
    mutation($updateCategoryData2: CategoryInput!, $updateCategoryId: ID!) {
        updateCategory(data: $updateCategoryData2, id: $updateCategoryId) {
            id
            icon
            name
            updatedBy {
                id
            }
        }
    }
`


import { gql } from "@apollo/client";

export const getComments = gql`
    query {
        Comments {
            id
            comment
            note
            pointOfInterest {
                id
            }
            createdBy {
                id
            }
        }
    }
`
export const getComment = gql`
    query($commentId: ID!) {
        Comment(id: $commentId) {
            id
            comment
            created_at
            note
            createdBy {
                id
            }
            pointOfInterest {
                id
            }
        }
    }
`
export const createComment = gql`
    mutation($data: CommentInput!) {
        createComment(data: $data) {
            id
            comment
            note
            createdBy {
                id
            }
        }
    }
`
export const deleteComments = gql`
    mutation {
        deleteComments {
            id
        }
    }
`
export const deleteComment = gql`
    mutation($deleteCommentId: ID!) {
        deleteComment(id: $deleteCommentId) {
            id
        }
    }
`
export const updateComment = gql`
    mutation($updateCommentData2: CommentInput!, $updateCommentId: ID!) {
        updateComment(data: $updateCommentData2, id: $updateCommentId) {
            id
        }
    }
`


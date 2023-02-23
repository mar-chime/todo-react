export const createTodo = /* GraphQL */ `
    mutation createTodo(
        $name: String!
        $description: String
        $completed: Boolean
    ) {
        createTodo(
            input: {
                name: $name
                description: $description
                completed: $completed
            }
        ) {
            id
            name
            description
            completed
        }
    }
`

export const updateTodo = /* GraphQL */ `
    mutation updateTodo(
        $id: ID!
        $name: String!
        $description: String
        $completed: Boolean
    ) {
        updateTodo(
            id: $id
            name: $name 
            description: $description
            completed: $completed
        ) {
            id
            name
            description
            completed
        }
    }
`

export const deleteTodo = /* GraphQL */ `
    mutation deleteTodo(
        $id: ID!    
    ) {
        deleteTodo(
            id: $id
        ) {
            id
        }
    }
`
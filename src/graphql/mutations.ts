export const createTodo = `
    mutation createTodo(
        $name: String!
        $description: String
        $completed: Boolean
    ) {
        createTodo(
            name: $title
        ) {
            id
            title
            completed
        }
    }
`

export const updateTodo = `
    mutation updateTodo(
        $id: ID!
        $title: String
        $completed: Boolean
    ) {
        updateTodo(
            id: $id
            title: $title
            completed: $completed
        ) {
            id
            title
            completed
        }
    }
`

export const deleteTodo = `
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

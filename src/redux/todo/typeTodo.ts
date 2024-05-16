export const typeTodo = {
    ADD_TODO : 'ADD_TODO',
    DELETE_TODO : 'DELETE_TODO',
    CHECKED_TODO : 'CHECKED_TODO',
}

export type ActionTodo = {
    type: string,
    index: number,
    payload: {
        id: string,
        newTodo: string,
        date: string
        description?: string,
        complete: boolean,
    }
  }
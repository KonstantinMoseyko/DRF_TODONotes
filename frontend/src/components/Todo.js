import React from 'react'


const TodoItem = ({ todo }) => {
    return (
        <tr>
            <td>
                {todo.project}
            </td>
            <td>
                {todo.note_text}
            </td>
            <td>
                {todo.create_note}
            </td>
            <td>
                {todo.update_note}
            </td>
            <td>
                {todo.user_note}
            </td>
            <td>
                {todo.status}
            </td>
        </tr>
    )
}
const TodoList = ({ todos }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>
                        PROJECT
                    </th>
                    <th>
                        TEXT
                    </th>
                    <th>
                        CREATE
                    </th>
                    <th>
                        UPDATE
                    </th>
                    <th>
                        AUHTOR
                    </th>
                    <th>
                        STATUS
                    </th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo) => <TodoItem todo={todo} />)}
            </tbody>
        </table>
    )
}
export default TodoList

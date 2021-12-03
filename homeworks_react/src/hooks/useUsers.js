import { useState, useCallback } from "react";

export const useUsers = () => {
    const [users, setUsers] = useState([]);
    // const addUser = () => {
    //   const copyUsers = [...users];
    //   copyUsers.push({
    //     name: `username_${users.length}`
    //   })
    //   setUsers(copyUsers);
    // }
    // const removeUser = useCallback((name) => () => {
    //   const copyUsers = [...users].filter((item) => item.name !== name);
    //   setUsers(copyUsers);
    // }, [users])


    const addUser = useCallback(() => {
        setUsers((state) => {
            const copyState = [...state];
            copyState.push({ name: `username_${state.length}` })
            return copyState;
        })
    }, []);

    const removeUser = useCallback((name) => () => {
        setUsers((state) => {
            return state.filter((item) => item.name !== name);
        });
    }, [])

    // return {
    //     users, addUser, removeUser
    // }
    return [
        users, {
            addUser, removeUser
        }
    ]
}

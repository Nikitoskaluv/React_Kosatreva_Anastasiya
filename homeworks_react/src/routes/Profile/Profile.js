import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { showName, changeName } from "../../store/profile/actions";
import { getUser, getShowName } from "../../store/profile/selectors";




export const Profile = () => {
    const user = useSelector(getUser);
    const isShowName = useSelector(getShowName);

    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const setShowName = useCallback(() => {
        dispatch(showName(isShowName));
    }, [dispatch, isShowName]);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, [])

    const setName = useCallback(() => {
        dispatch(changeName(value))
    }, [dispatch, value]);



    return (
        <div className="profile_wrapper">
            <h1>Profile</h1>

            <label>Отображать имя
                <input

                    type="checkbox"
                    checked={isShowName}
                    onChange={setShowName}
                />
            </label>
            {isShowName && <div>{user?.email}</div>}
            <label>Введите имя
                <input
                    label="Name"
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
            </label>
            <button onClick={setName}>Подтвердить</button>
            <div>
                <h1>Profile</h1>

            </div>
        </div>
    )

}




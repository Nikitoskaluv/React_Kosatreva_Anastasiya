import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { showName, changeName } from "../../store/profile/actions";
import { getName, getShowName } from "../../store/profile/selectors";


export const Profile = () => {
    const name = useSelector(getName);
    const isShowName = useSelector(getShowName);

    // const { isShowName, name } = useSelector(state => state);
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
            {isShowName && <div>{name}</div>}
            <label>Введите имя
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
            </label>
            <button onClick={setName}>Подтвердить</button>
        </div>)

}

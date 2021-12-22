import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { IS_SHOW_NAME } from "../../store/profile/actions";


export const Profile = () => {
    const { isShowName, name } = useSelector(state => state);
    const dispatch = useDispatch();

    const onChangeCheckbox = () => {
        dispatch({
            type: IS_SHOW_NAME
        });
    }

    return (
        <div>
            <h1>Profile</h1>
            <label>Показать имя
                <input
                    type="checkbox"
                    checked={isShowName}
                    onChange={onChangeCheckbox}
                />
            </label>
            {isShowName && <div>{name}</div>}
        </div>)

}

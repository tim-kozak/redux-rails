import React from 'react';
import s from './Profile.module.scss'
import {simpleDate} from "../../utils/decorators";

export const Profile = (props) => {
    const {name,photo} = props.profile;
    const {lastUpdated,netWorth,assetsCount} = props;

    return (
        <div className={s.profile}>
            <img src={photo} alt=""/>
            <span>{name}</span>
            <p>
                Net worth: <strong>&nbsp;{netWorth}</strong><br/>
                Assets: <strong>&nbsp;{assetsCount}</strong>
                <span>last updated: {simpleDate(lastUpdated)}</span>
            </p>
        </div>
    );
};
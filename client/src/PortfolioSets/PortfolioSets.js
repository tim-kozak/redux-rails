import React from 'react';
import s from './PortfolioSets.module.scss'
import {NavLink} from "react-router-dom";

export const PortfolioSets = (props) => {
    const {portfolio} = props;
    const {handleSetSelection} = props;

    const portfolioIds = portfolio.allIds;
    return (
        <div className={s.portfolio_sets}>
            <a className={s.add} href="#">+ Add Set</a>
            <h4>Portfolio:</h4>
            <ul>
                <li className={s.all}>
                    <NavLink exact={true} to="/" activeClassName={s.active} onClick={()=> { handleSetSelection(null) }} >
                        <h5>All assets</h5>
                    </NavLink>
                </li>
                {
                    portfolioIds.map( portfolioId => {
                        const set = portfolio.byIds[portfolioId];
                        return (<li>
                            <NavLink to={"/portfolio-set/"+portfolioId} activeClassName={s.active} onClick={()=> { handleSetSelection(portfolioId) }}>
                                <h5>{set.name}</h5>
                                <div className={s.info}>
                                    {/*TODO: here*/}
                                    <span className={s.value}><strong>$410</strong></span>
                                    <span className={s.amount}>Assets #:<strong>{set.assets.length}</strong></span>
                                </div>
                            </NavLink>
                        </li>);
                        }
                    )
                }
            </ul>
        </div>
    );
};
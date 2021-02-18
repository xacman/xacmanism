import React, { useState } from 'react';
import './index.scss';
import symbol from '../../images/simbol.png';
import { NavLink, Link } from 'react-router-dom';
import i18n from 'i18n-js';
import { Dropdown } from 'primereact/dropdown';
import languages from '../../images/languages.png';

const Header = ({setExtraLanguage}) => {
    const [language, setLanguage] = useState('ru')
    const languagesSelectItems = [
        { label: 'Русский', value: 'ru' },
        { label: 'Українська', value: 'ua' },
    ];

    const changeLanguage = (e) => {
        i18n.locale = e.value;
        setLanguage(e.value);
        setExtraLanguage(e.value);
    }

    return (
        <header className="header">
            <Link to="/" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                <img src={symbol} alt="xac" className="header__logo" />
            </Link>
            <nav>
                <ul className="header__list">
                    <li>
                        <NavLink activeClassName="header__activeLink" to="/main">{i18n.t("main")}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/weneedyou" activeClassName="header__activeLink">
                            {i18n.t("weneedyou")}
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <label htmlFor="language" className="header__label">
                <img src={languages} alt={i18n.t("language")} className="header__languageImgae" />
                <Dropdown
                    optionLabel="label"
                    value={language}
                    options={languagesSelectItems}
                    onChange={(e) => { changeLanguage(e) }}
                    placeholder=""
                />
            </label>
        </header>
    );
}

export default Header;
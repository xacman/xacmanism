import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Liberalism = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("fightideology")},
        { label: i18n.t("liberalism-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("liberalism-1")}
            </h1>
            <p className="page__text">
                {i18n.t("liberalism-2")}
            </p>
            <p className="page__text">
                {i18n.t("liberalism-3")}
            </p>
            <p className="page__text">
                {i18n.t("liberalism-4")}
            </p>
            <p className="page__text">
                {i18n.t("liberalism-5")}
            </p>
            <p className="page__text">
                {i18n.t("liberalism-6")}
            </p>
            <p className="page__text">
                {i18n.t("liberalism-7")}
                <Link to="/main/lgbt" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("liberalism-8")}
                </Link>
                <Link to="/main/abortandpornban" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("liberalism-9")}
                </Link>
                {i18n.t("liberalism-10")}
            </p>
            <p className="page__text">
                {i18n.t("liberalism-11")}
            </p>
        </article>
    )
}

export default Liberalism;
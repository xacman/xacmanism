import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const LGBT = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("fightideology")},
        { label: i18n.t("lgbt-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' };

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("lgbt-1")}
            </h1>
            <p className="page__text">
                {i18n.t("lgbt-2")}
            </p>
            <p className="page__text">
                {i18n.t("lgbt-3")}
            </p>
            <p className="page__text">
                {i18n.t("lgbt-4")}
            </p>
            <p className="page__text">
                {i18n.t("lgbt-5")}
            </p>
            <p className="page__text">
                {i18n.t("lgbt-6")}
                <Link to="/main/extraideology" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("lgbt-7")}
                </Link>
            </p>
        </article>
    );
}

export default LGBT;
import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Space = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("inteligencepolitic")},
        { label: i18n.t("space-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' };

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>

            <h1 className="page__header">
                {i18n.t("space-1")}
            </h1>
            <p className="page__text">
                {i18n.t("space-2")}
                <a href="https://ru.wikipedia.org/wiki/SpaceX_Starship" className="page__link">
                    {i18n.t("space-3")}
                </a>
                {i18n.t("space-4")}
            </p>
            <p className="page__text">
                {i18n.t("space-5")}
            </p>
            <p className="page__text">
                {i18n.t("space-6")}
            </p>
            <p className="page__text">
                {i18n.t("space-7")}
            </p>
            <p className="page__text">
                {i18n.t("space-8")}
                <Link to="/main/fiveyears" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("space-9")}
                </Link>
                {i18n.t("space-10")}
            </p>
        </article>
    )
}

export default Space;
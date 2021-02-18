import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Independence = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("introduction")},
        { label: i18n.t("patiotism-1") },
    ];

    const home = { icon: 'pi pi-home', url: '../' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("patiotism-1")}
            </h1>

            <p className="page__text">
                {i18n.t("patiotism-2")}
            </p>
            <p className="page__text">
                {i18n.t("patiotism-3")}
            </p>
            <p className="page__text">
                {i18n.t("patiotism-4")}
            </p>

            <p className="page__text">
                {i18n.t("patiotism-5")}
            </p>

            <p className="page__text">
                {i18n.t("patiotism-6")}
            </p>

            <p className="page__text">
                {i18n.t("patiotism-7-1")}
                <Link to="/main/country" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                    {i18n.t("patiotism-7-2")}
                </Link>
                {i18n.t("patiotism-7-3")}
            </p>
        </article>
    );
}

export default Independence;
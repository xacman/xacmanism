import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const churchpolitics = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("Religion")},
        { label: i18n.t("churchpolitics-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' };

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("churchpolitics-1")}
            </h1>
            <p className="page__text">
                {i18n.t("churchpolitics-2")}
                <Link to="/main/space" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("churchpolitics-3")}
                </Link>
                {i18n.t("churchpolitics-4")}
            </p>
            <p className="page__text">
                {i18n.t("churchpolitics-5")}
            </p>
            <p className="page__text">
                {i18n.t("churchpolitics-6")}
            </p>
            <p className="page__text">
                {i18n.t("churchpolitics-7")}
            </p>
        </article>
    )
};

export default churchpolitics;
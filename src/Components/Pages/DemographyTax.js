import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const DemographyTax = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("economic")},
        { label: i18n.t("demographytax-1") },
    ];

    const home = { icon: 'pi pi-home', url: '../' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("demographytax-1")}
            </h1>
            <p className="page__text">
                {i18n.t("demographytax-2")}
            </p>
            <p className="page__text">
                {i18n.t("demographytax-3")}
            </p>
            <p className="page__text">
                {i18n.t("demographytax-4")}
            </p>
            <p className="page__text">
                {i18n.t("demographytax-5")}
                <Link to="/main/abortandpornban" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("demographytax-6")}

                </Link>
                {i18n.t("demographytax-7")}
            </p>
            <p className="page__text">
                {i18n.t("demographytax-8")}
            </p>
            <p className="page__text">
                {i18n.t("demographytax-9")}
            </p>
        </article>
    );
}

export default DemographyTax;
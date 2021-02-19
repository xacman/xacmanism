import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { BreadCrumb } from 'primereact/breadcrumb';

const Country = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("introduction")},
        { label: i18n.t("country-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>

            <h1 className="page__header">
                {i18n.t("country-1")}
            </h1>

            <p className="page__text">
                {i18n.t("country-2")}
            </p>
            <p className="page__text">
                {i18n.t("country-3")}
            </p>
            <p className="page__text">
                {i18n.t("country-4")}
            </p>
        </article>
    )
}

export default Country;
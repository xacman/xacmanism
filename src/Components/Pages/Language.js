import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { BreadCrumb } from 'primereact/breadcrumb';

const Language = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("peace")},
        { label: i18n.t("language-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' };

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("language-1")}
            </h1>
            <p className="page__text">
                {i18n.t("language-2")}
            </p>
        </article>
    )
};

export default Language;
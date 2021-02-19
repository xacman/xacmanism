import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const HybridEconomic = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("economic")},
        { label: i18n.t("hybrideconomic-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("hybrideconomic-1")}
            </h1>
            <p className="page__text">
                {i18n.t("hybrideconomic-2")}
                <Link to="/main/buisness" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("hybrideconomic-3")}
                </Link>
                {i18n.t("hybrideconomic-4")}
            </p>
            <p className="page__text">
                {i18n.t("hybrideconomic-5")}
                <Link to="/main/fiveyears" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("hybrideconomic-6")}
                </Link>
                {i18n.t("hybrideconomic-7")}
            </p>
            <p className="page__text">
                {i18n.t("hybrideconomic-8")}
            </p>
        </article>
    )
}

export default HybridEconomic;
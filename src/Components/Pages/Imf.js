import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Imf = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("economic")},
        { label: i18n.t("IMF") },
    ];

    const home = { icon: 'pi pi-home', url: '#' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("imf-1")}
            </h1>
            <p className="page__text">
                {i18n.t("imf-2")}
            </p>
            <p className="page__text">
                {i18n.t("imf-3")}
            </p>
            <p className="page__text">
                {i18n.t("imf-4")}
                <Link to="/main/Independence" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("imf-5")}
                </Link>
                {i18n.t("imf-6")}
            </p>
            <p className="page__text">
                {i18n.t("imf-7")}
            </p>
        </article>
    );
}

export default Imf;
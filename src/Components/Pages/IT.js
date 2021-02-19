import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const IT = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("inteligencepolitic")},
        { label: i18n.t("IT-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' };

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("IT-1")}
            </h1>
            <p className="page__text">
                {i18n.t("IT-2")}
            </p>
            <p className="page__text">
                {i18n.t("IT-3")}
            </p>
            <p className="page__text">
                {i18n.t("IT-4")}
                <Link to="/main/fiveyears" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("IT-5")}
                </Link>
                {i18n.t("IT-6")}
            </p>
        </article>
    )
}

export default IT;
import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Inventions = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("inteligencepolitic")},
        { label: i18n.t("inventions-1") },
    ];

    const home = { icon: 'pi pi-home', url: '../' };

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>

            <h1 className="page__header">
                {i18n.t("inventions-1")}
            </h1>
            <p className="page__text">
                {i18n.t("inventions-2")}
                <Link to="/main/science" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("inventions-3")}
                </Link>
                {i18n.t("inventions-4")}
            </p>
            <p className="page__text">
                {i18n.t("inventions-5")}
                <Link to="/main/education" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("inventions-6")}
                </Link>
                {i18n.t("inventions-7")}
                <Link to="/main/science" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("inventions-8")}
                </Link>
                {i18n.t("inventions-9")}
            </p>
            <p className="page__text">
                {i18n.t("inventions-10")}
            </p>
        </article>
    );
}

export default Inventions;
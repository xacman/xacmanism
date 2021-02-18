import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Science = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("inteligencepolitic")},
        { label: i18n.t("science-1") },
    ];

    const home = { icon: 'pi pi-home', url: '../' };

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("science-1")}
            </h1>
            <p className="page__text">
                {i18n.t("science-2")}
            </p>
            <p className="page__text">
                {i18n.t("science-3")}
                <Link to="/main/education" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("science-4")}
                </Link>
                {i18n.t("science-5")}
                <Link to="/main/inventions" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("science-6")}
                </Link>
                {i18n.t("science-7")}
                <Link to="/main/transparentmoney" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("science-8")}
                </Link>
            </p>
            <p className="page__text">
                {i18n.t("science-9")}
                <Link to="/main/inventions" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("science-10")}
                </Link>
            </p>
        </article>
    );
}

export default Science;
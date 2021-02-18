import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Transhumanism = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("fightideology")},
        { label: i18n.t("transhumainsm-1") },
    ];

    const home = { icon: 'pi pi-home', url: '../' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("transhumainsm-1")}
            </h1>
            <p className="page__text">
                {i18n.t("transhumainsm-2")}
                <Link to="/main/science" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("transhumainsm-3")}
                </Link>
                {i18n.t("transhumainsm-4")}
                <Link to="/main/inventions" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("transhumainsm-5")}
                </Link>
                {i18n.t("transhumainsm-6")}
            </p>
            <p className="page__text">
                {i18n.t("transhumainsm-7")}
            </p>
            <p className="page__text">
                {i18n.t("transhumainsm-8")}
            </p>
            <p className="page__text">
                {i18n.t("transhumainsm-9")}
            </p>
            <p className="page__text">
                {i18n.t("transhumainsm-10")}
                <a href="https://ru.wikipedia.org/wiki/Neuralink" className="page__link">
                    neuralink
                </a>
                {i18n.t("transhumainsm-11")}
            </p>
            <p className="page__text">
                {i18n.t("transhumainsm-12")}
            </p>
            <p className="page__text">
                {i18n.t("transhumainsm-14")}
            </p>
            <p className="page__text">
                {i18n.t("transhumainsm-15")}
            </p>
        </article>
    );
}

export default Transhumanism;
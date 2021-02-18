import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const AbortAndPortRestrict = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("fightideology")},
        { label: i18n.t("abortandportban-1") },
    ];

    const home = { icon: 'pi pi-home', url: '../' };
    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("abortandportban-1")}
            </h1>
            <p className="page__text">
                {i18n.t("abortandportban-2")}
                <Link to="/main/order" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("abortandportban-3")}
                </Link>
                {i18n.t("abortandportban-4")}
            </p>
            <p className="page__text">
                {i18n.t("abortandportban-5")}
                <Link to="/main/reformchildhouse" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("abortandportban-6")}
                </Link>
                {i18n.t("abortandportban-7")}
            </p>
            <p className="page__text">
                {i18n.t("abortandportban-8")}
                <Link to="/main/demographytax" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("abortandportban-9")}
                </Link>
            </p>
            <p className="page__text">
                {i18n.t("abortandportban-10")}
                <Link to="/main/order" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("abortandportban-11")}
                </Link>
                {i18n.t("abortandportban-12")}
            </p>
        </article>
    );
}

export default AbortAndPortRestrict;
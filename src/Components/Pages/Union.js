import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Union = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("extrapolytic")},
        { label: i18n.t("union-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' };

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("union-1")}
            </h1>
            <p className="page__text">
                {i18n.t("union-2")}
                <Link to="/main/extraideology" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("union-3")}
                </Link>
                {i18n.t("union-4")}
                <Link to="/main/liberalism" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("union-5")}
                </Link>
            </p>
            <p className="page__text">
                {i18n.t("union-6")}
            </p>
            <p className="page__text">
                {i18n.t("union-7")}
            </p>
            <p className="page__text">
                {i18n.t("union-8")}
            </p>
            <p className="page__text">
                {i18n.t("union-9")}
            </p>
            <p className="page__text">
                {i18n.t("union-10")}
                <Link to="/main/nationalism" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("union-11")}
                </Link>
                {i18n.t("union-12")}
            </p>
            <p className="page__text">
                {i18n.t("union-13")}
            </p>
        </article>
    )
}

export default Union;
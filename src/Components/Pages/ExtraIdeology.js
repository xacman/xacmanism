import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const ExtraIdeology = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("extrapolytic")},
        { label: i18n.t("extraideology-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' };

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("extraideology-1")}
            </h1>
            <p className="page__text">
            {i18n.t("extraideology-2")}
                <Link to="/main/churchpolitics" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                {i18n.t("extraideology-3")}
                </Link>
            </p>
            <p className="page__text">
            {i18n.t("extraideology-4")}
                <Link to="/main/liberalism" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                {i18n.t("extraideology-5")}
                </Link>
                {i18n.t("extraideology-6")}
                <Link to="/main/abortandpornban" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                {i18n.t("extraideology-7")}
                </Link>
                {i18n.t("extraideology-8")}
            </p>
            <p className="page__text">
            {i18n.t("extraideology-9")}
            </p>
            <p className="page__text">
            {i18n.t("extraideology-10")}
                <Link to="/main/nationalism" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                {i18n.t("extraideology-11")}
                </Link>
                {i18n.t("extraideology-12")}
            </p>

        </article>
    )
}

export default ExtraIdeology;
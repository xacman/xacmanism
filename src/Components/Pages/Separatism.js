import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Separatism = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("fightideology")},
        { label: i18n.t("separatism-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("separatism-1")}
            </h1>
            <p className="page__text">
                {i18n.t("separatism-2")}
                <Link to="/main/nationalism" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("separatism-3")}
                </Link>
                {i18n.t("separatism-4")}
            </p>
            <p className="page__text">
                {i18n.t("separatism-5")}
            </p>
            <p className="page__text">
                {i18n.t("separatism-6")}
            </p>
            <p className="page__text">
                {i18n.t("separatism-7")}
            </p>
            <p className="page__text">
                {i18n.t("separatism-8")}
            </p>
            <p className="page__text">
                {i18n.t("separatism-9")}
            </p>
            <p className="page__text">
                {i18n.t("separatism-10")}

            </p>
            <p className="page__text">
                {i18n.t("separatism-11")}
                <Link to="/main/donbasspeace" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("separatism-12")}
                </Link>
                {i18n.t("separatism-13")}
            </p>
        </article>
    );
}

export default Separatism;
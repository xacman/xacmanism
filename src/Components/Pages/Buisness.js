import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Buisness = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("economic")},
        { label: i18n.t("buisness-1") },
    ];

    const home = { icon: 'pi pi-home', url: '../' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("buisness-1")}
            </h1>
            <p className="page__text">
                {i18n.t("buisness-2")}
            </p>
            <p className="page__text">
                {i18n.t("buisness-3")}
                <Link to="/main/order" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("buisness-4")}
                </Link>
                {i18n.t("buisness-5")}
            </p>
            <p className="page__text">
                {i18n.t("buisness-6")}
            </p>
            <p className="page__text">
                {i18n.t("buisness-7")}

            </p>
            <p className="page__text">
                {i18n.t("buisness-8")}
                <Link to="/main/Independence" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("buisness-9")}
                </Link>
                {i18n.t("buisness-10")}
            </p>
            <p className="page__text">
                {i18n.t("buisness-11")}
            </p>
        </article>
    );
}

export default Buisness;
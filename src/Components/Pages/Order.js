import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Order = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("introduction")},
        { label: i18n.t("order-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("order-1")}
            </h1>

            <h2 className="page__subheader">
                {i18n.t("order-11")}
            </h2>

            <p className="page__text">
                {i18n.t("order-2")}
            </p>
            <p className="page__text">
                {i18n.t("order-3")}
                <Link to="/main/corrutptionfight" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("order-3-1")}
                </Link>
                {i18n.t("order-3-2")}
            </p>
            <p className="page__text">
                {i18n.t("order-4")}
            </p>
            <h2 className="page__subheader">
                {i18n.t("order-12")}
            </h2>
            <p className="page__text">
                {i18n.t("order-5")}
            </p>
            <p className="page__text">
                {i18n.t("order-6")}
            </p>
            <p className="page__text">
                {i18n.t("order-7")}
            </p>
            <p className="page__text">
                {i18n.t("order-8")}
            </p>
            <p className="page__text">
                {i18n.t("order-9")}
            </p>
            <p className="page__text">
                {i18n.t("order-13")}
            </p>
            <p className="page__text">
                {i18n.t("order-10")}
            </p>
        </article>
    );
}

export default Order;
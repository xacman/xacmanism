import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { BreadCrumb } from 'primereact/breadcrumb';

const CountrySymbols = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("introduction")},
        { label: i18n.t("countrysymbols-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("countrysymbols-1")}
            </h1>
            <h2 className="page__subheader">
                {i18n.t("countrysymbols-2")}
            </h2>
            <p className="page__text">
                {i18n.t("countrysymbols-3")}
            </p>
            <h2 className="page__subheader">
                {i18n.t("countrysymbols-4")}
            </h2>
            <p className="page__text">
                {i18n.t("countrysymbols-5")}
            </p>
            <p className="page__text">
                {i18n.t("countrysymbols-6")}
            </p>
            <p className="page__text">
                {i18n.t("countrysymbols-7")}
            </p>
            <p className="page__text">
                {i18n.t("countrysymbols-8")}
                <a href="https://www.facebook.com/xac.man.92" className="page__link">facebook</a>
                {i18n.t("orEmail")}
                <span className="email">
                    {i18n.t("email")}
                </span>
            </p>
            <h2 className="page__subheader">
                {i18n.t("countrysymbols-9")}
            </h2>
            <p className="page__text">
                {i18n.t("countrysymbols-10")}
            </p>
            <p className="page__text">
                {i18n.t("countrysymbols-11")}
            </p>
            <h2 className="page__subheader">
                {i18n.t("countrysymbols-12")}
            </h2>
            <p className="page__text">
                {i18n.t("countrysymbols-13")}
            </p>
            <div className="page__text">
                {i18n.t("countrysymbols-14")}
                <ul>
                    <li>
                        {i18n.t("countrysymbols-15")}
                    </li>
                    <li>
                        {i18n.t("countrysymbols-16")}
                    </li>
                    <li>
                        {i18n.t("countrysymbols-17")}
                    </li>
                    <li>
                        {i18n.t("countrysymbols-18")}
                    </li>
                    <li>
                        {i18n.t("countrysymbols-19")}
                    </li>
                    <li>
                        {i18n.t("countrysymbols-20")}
                    </li>
                </ul>
                {i18n.t("countrysymbols-21")}
                <a href="https://www.facebook.com/xac.man.92" className="page__link">facebook</a>
                {i18n.t("orEmail")}
                <span className="email">
                    {i18n.t("email")}
                </span>
            </div>
        </article>
    );
}

export default CountrySymbols;
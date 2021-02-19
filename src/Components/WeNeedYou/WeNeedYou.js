import React from 'react';
import '../Pages/index.scss';
import i18n from 'i18n-js';
import { BreadCrumb } from 'primereact/breadcrumb';

const WeNeedYou = () => {
    const items = [
        { label: i18n.t("weneedyou") },
    ];

    const home = { icon: 'pi pi-home', url: '#' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home} />

            <h1 className="page__header">
                {i18n.t("weneedyou")}
            </h1>

            <p className="page__text">
                {i18n.t("weneedyou-1")}
            </p>
            <p className="page__text">
                {i18n.t("weneedyou-2")}
            </p>
            <p className="page__text">
                {i18n.t("weneedyou-3")}
            </p>
            <div className="page__text">
                <p>
                    {i18n.t("weneedyou-4")}
                </p>
                <ul>
                    <li>
                        {i18n.t("weneedyou-5")}
                        <a href="https://www.facebook.com/%D0%A5%D0%B0%D1%81%D0%BC%D0%B0%D0%BD%D0%B8%D0%B7%D0%BC-101181492021437" className="page__link">
                            facebook
                        </a>
                        {i18n.t("weneedyou-6")}
                    </li>
                    <li>
                        {i18n.t("weneedyou-7")}
                        <a href="https://www.facebook.com/%D0%A5%D0%B0%D1%81%D0%BC%D0%B0%D0%BD%D0%B8%D0%B7%D0%BC-101181492021437" className="page__link">
                            facebook
                        </a>
                        {i18n.t("weneedyou-8")}
                        <a href="https://www.facebook.com/%D0%A5%D0%B0%D1%81%D0%BC%D0%B0%D0%BD%D0%B8%D0%B7%D0%BC-101181492021437" className="page__link">
                            facebook
                        </a>
                        {i18n.t("weneedyou-9")}
                        <a href="https://www.facebook.com/xac.man.92" className="page__link">
                            {i18n.t("weneedyou-10")}
                        </a>
                        {i18n.t("orEmail")}
                        <span className="email">
                            {i18n.t("email")}
                        </span>
                        {i18n.t("weneedyou-11")}
                        <a href="https://www.facebook.com/%D0%A5%D0%B0%D1%81%D0%BC%D0%B0%D0%BD%D0%B8%D0%B7%D0%BC-101181492021437" className="page__link">
                            facebook
                        </a>
                        {i18n.t("weneedyou-12")}
                    </li>
                    <li>
                        {i18n.t("weneedyou-13")}
                    </li>
                    <li>
                        {i18n.t("weneedyou-14")}
                    </li>
                </ul>
            </div>
        </article>
    );
}

export default WeNeedYou;
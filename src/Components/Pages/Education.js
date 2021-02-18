import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Education = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("inteligencepolitic")},
        { label: i18n.t("education-1") },
    ];

    const home = { icon: 'pi pi-home', url: '../' };

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("education-1")}
            </h1>
            <p className="page__text">
                {i18n.t("education-2")}
                <Link to="/main/science" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("education-3")}
                </Link>
                {i18n.t("education-4")}
                <Link to="/main/inventions" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("education-5")}
                </Link>
                {i18n.t("education-6")}
            </p>
            <p className="page__text">
                {i18n.t("education-7")}
            </p>
            <p className="page__text">
                {i18n.t("education-8")}
                <Link to="/main/churchpolitics" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("education-9")}
                </Link>
                {i18n.t("education-10")}
            </p>

            <p className="page__text">
                {i18n.t("education-11")}
                <Link to="/main/nationalism" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("education-12")}
                </Link>
                {i18n.t("education-13")}
                <Link to="/main/order" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("education-14")}
                </Link>
                {i18n.t("education-15")}
            </p>
            <p className="page__text">
                {i18n.t("education-16")}
            </p>
            <p className="page__text">
                {i18n.t("education-17")}
            </p>
        </article>
    )
};

export default Education;
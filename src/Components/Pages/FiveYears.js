import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const FiveYears = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("economic")},
        { label: i18n.t("fiveyears-1") },
    ];

    const home = { icon: 'pi pi-home', url: '../' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>

            <h1 className="page__header">
                {i18n.t("fiveyears-1")}
            </h1>
            <p className="page__text">
            {i18n.t("fiveyears-2")}
                <Link to="/main/buisness" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                {i18n.t("fiveyears-3")}
                </Link>
                {i18n.t("fiveyears-4")}
                <Link to="/main/space" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                   {i18n.t("fiveyears-5")}
                 </Link>
                 {i18n.t("fiveyears-6")}
                <Link to="/main/order" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("fiveyears-7")}
                </Link>
                <Link to="/main/reformchildhouse" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                {i18n.t("fiveyears-8")}
                </Link>
                {i18n.t("fiveyears-9")}
                    </p>
            <p className="page__text">
            {i18n.t("fiveyears-10")}
            <a href="https://www.facebook.com/xac.man.92" className="page__link">facebook</a>
                {i18n.t("orEmail")}
                <span className="email">
                    {i18n.t("email")}
                </span>
            </p>
            <p className="page__text">
            {i18n.t("fiveyears-11")}
            </p>
        </article>
    )
}

export default FiveYears;
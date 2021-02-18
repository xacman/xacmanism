import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const DonbassPeace = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("peace")},
        { label: i18n.t("donbasspeace-1") },
    ];

    const home = { icon: 'pi pi-home', url: '../' };

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("donbasspeace-1")}
            </h1>
            <p className="page__text">
                {i18n.t("donbasspeace-2")}
            </p>
            <p className="page__text">
                {i18n.t("donbasspeace-3")}
            </p>
            <p className="page__text">
                {i18n.t("donbasspeace-4")}
            </p>
            <p className="page__text">
                {i18n.t("donbasspeace-5")}
                <Link to="/main/nationalism" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("donbasspeace-6")}
                </Link>
                {i18n.t("donbasspeace-7")}
                <Link to="/main/language" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("donbasspeace-8")}
                </Link>
                {i18n.t("donbasspeace-9")}
                <Link to="/main/streetnames" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("donbasspeace-10")}
                </Link>
                {i18n.t("donbasspeace-11")}
                <Link to="/main/fiveyears" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("donbasspeace-12")}
                </Link>
            </p>
        </article>
    )
}

export default DonbassPeace;
import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Nationalism = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("fightideology")},
        { label: i18n.t("nationalism-1") },
    ];

    const home = { icon: 'pi pi-home', url: '../' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            
            <h1 className="page__header">
                {i18n.t("nationalism-1")}
            </h1>
            <p className="page__text">
                {i18n.t("nationalism-2")}
            </p>
            <p className="page__text">
                {i18n.t("nationalism-3")}
            </p>
            <p className="page__text">
                {i18n.t("nationalism-4")}
            </p>
            <p className="page__text">
                {i18n.t("nationalism-5")}
                <Link to="/main/countrysymbols" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("nationalism-6")}
                </Link>
                {i18n.t("nationalism-7")}
                <Link to="/main/countrysymbols" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("nationalism-8")}
                </Link>
                {i18n.t("nationalism-9")}
                <Link to="/main/language" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("nationalism-10")}
                </Link>
                {i18n.t("nationalism-11")}
            </p>
            <p className="page__text">
                {i18n.t("nationalism-12")}
                <Link to="/main/separatism" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("nationalism-13")}
                </Link>
                {i18n.t("nationalism-14")}
                <Link to="/main/donbasspeace" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("nationalism-15")}
                </Link>
                {i18n.t("nationalism-16")}
            </p>
            <p className="page__text">
                {i18n.t("nationalism-17")}
                <Link to="/main/order" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("nationalism-18")}
                </Link>
                {i18n.t("nationalism-19")}
            </p>
            <p className="page__text">
                {i18n.t("nationalism-20")}
                <Link to="/main/Independence" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("nationalism-21")}
                </Link>
            </p>
        </article>
    )
}

export default Nationalism;
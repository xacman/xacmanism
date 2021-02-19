import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Communism = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("fightideology")},
        { label: i18n.t("communism-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("communism-1")}
            </h1>
            <p className="page__text">
                {i18n.t("communism-2")}
                <Link to="/main/nationalism" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("communism-3")}
                </Link>
                {i18n.t("communism-4")}
            </p>
            <p className="page__text">
                {i18n.t("communism-5")}
            </p>
            <p className="page__text">
                {i18n.t("communism-6")}
                <Link to="/main/science" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("communism-7")}
                </Link>
                <Link to="/main/education" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("communism-8")}
                </Link>
                {i18n.t("communism-9")}
                <Link to="/main/fiveyears" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("communism-10")}
                </Link>
                {i18n.t("communism-11")}
                <Link to="/main/space" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("communism-12")}
                </Link>
                {i18n.t("communism-13")}
            </p>
            <p className="page__text">
                {i18n.t("communism-14")}
            </p>
            <p className="page__text">
                {i18n.t("communism-15")}
            </p>
            <p className="page__text">
                {i18n.t("communism-16")}
                <Link to="/main/hybrideconomics" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("communism-17")}
                </Link>
                {i18n.t("communism-18")}
                <Link to="/main/churchpolitics" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("communism-19")}
                </Link>
                {i18n.t("communism-20")}
            </p>
        </article>
    );
}

export default Communism;
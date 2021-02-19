import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const ReligionAttitution = () => {
    const items = [
        { label: i18n.t("main") },
        { label: i18n.t("Religion")},
        { label: i18n.t("religionattitution-1") },
    ];

    const home = { icon: 'pi pi-home', url: '#' };

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("religionattitution-1")}
            </h1>
            <p className="page__text">
                {i18n.t("religionattitution-2")}
                <Link to="/main/education" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("religionattitution-3")}
                </Link>
                {i18n.t("religionattitution-4")}
            </p>
            <p className="page__text">
                {i18n.t("religionattitution-5")}
                <Link to="/main/order" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("religionattitution-6")}
                </Link>
                {i18n.t("religionattitution-7")}
            </p>
            <p className="page__text">
                {i18n.t("religionattitution-8")}
                <Link to="/main/churchpolitics" className="page__link" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    {i18n.t("religionattitution-9")}
                </Link>
            </p>
        </article>
    );
}

export default ReligionAttitution;
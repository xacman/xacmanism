import React from 'react';
import './index.scss';
import i18n from 'i18n-js';
import { Link } from 'react-router-dom';
import { BreadCrumb } from 'primereact/breadcrumb';

const Main = () => {
    const items = [
        { label: i18n.t("main") },
    ];

    const home = { icon: 'pi pi-home', url: './' }

    return (
        <article className="page">
            <BreadCrumb model={items} home={home}/>
            <h1 className="page__header">
                {i18n.t("xacmanism")}
            </h1>

            <p className="page__text">
                {i18n.t("main-1")}
            </p>
            <p className="page__text">
                {i18n.t("main-2")}
            </p>
            <p className="page__text">
                {i18n.t("main-target")}
                <ul>
                    <li>
                        <Link to="/main/donbasspeace" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-3")}
                        </Link>
                    </li>
                    <li>
                        <p>
                            {i18n.t("main-4")}
                        </p>
                        <Link to="/main/imf" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-5")}
                        </Link>
                        <Link to="/main/hybrideconomics" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-6")}
                        </Link>
                        <p>{i18n.t("main-7")}</p>
                        <Link to="/main/fiveyears" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-8")}
                        </Link> <p>{i18n.t("main-and")}</p>
                        <Link to="/main/buisness" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-9")}
                        </Link>
                        <p>
                            {i18n.t("main-10")}
                        </p>
                    </li>
                    <li>
                        <Link to="/main/Independence" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-11")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/main/transparentmoney" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-12")}
                        </Link>
                        <p>
                            {i18n.t("main-13")}
                        </p>
                    </li>
                    <li>
                        <Link to="/main/order" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-14")}
                        </Link>
                        <p>
                            {i18n.t("main-15")}
                        </p>
                    </li>
                    <li>
                        <p>
                            {i18n.t("main-16")}
                        </p>
                        <Link to="/main/education" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-17")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/main/streetnames" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-18")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/main/language" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-19")}
                        </Link>
                    </li>
                    <li>
                        <p>
                            {i18n.t("main-20")}
                        </p>
                        <Link to="/main/nationalism" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-21")}
                        </Link>
                        <Link to="/main/communism" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-22")}
                        </Link>
                        <p>
                            {i18n.t("main-23")}
                        </p>
                        <Link to="/main/separatism" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-24")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/main/Independence" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-25")}
                        </Link>
                        <p>
                            {i18n.t("main-26")}
                        </p>
                    </li>
                    <li>
                        <p>
                            {i18n.t("main-27")}
                        </p>
                        <Link to="/main/science" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-28")}
                        </Link>
                        <p>
                            {i18n.t("main-29")}
                        </p>
                        <Link to="/main/inventions" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-30")}
                        </Link>
                        <p>
                            {i18n.t("main-31")}
                        </p>
                    </li>
                    <li>
                        <Link to="/main/demographytax" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-32")}
                        </Link>
                        <Link to="/main/abortandpornban" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-33")}
                        </Link>
                        <p>
                            {i18n.t("main-34")}
                        </p>
                    </li>
                    <li>
                        <Link to="/main/countrysymbols" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-35")}
                        </Link>
                    </li>
                    <li>
                        <p>
                            {i18n.t("main-36")}
                        </p> 
                        <Link to="/main/lgbt" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-37")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/main/churchpolitics" className="page__link" onClick={() => {window.scrollTo({ top: 0, behavior: "smooth" })}}>
                            {i18n.t("main-38")}
                        </Link>
                        <p>
                            {i18n.t("main-39")}
                        </p>
                    </li>
                </ul>
            </p>
        </article>
    )
}

export default Main;
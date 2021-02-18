import styles from './index.scss';
import React from 'react';
import { Tree } from 'primereact/tree';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import {Link} from 'react-router-dom';
import i18n from 'i18n-js';

const TreePage = () => {
    const nodes = [
        {
            key: "0",
            label: i18n.t("introduction"),
            children: [
                { key: "0-0", label: i18n.t("what is country"), url: '/main/country' },
                { key: "0-1", label: i18n.t("about Independence"), url: '/main/Independence' },
                { key: "0-3", label: i18n.t("order"), url: '/main/order' },
                { key: "0-4", label: i18n.t("reformchildhouse"), url: '/main/reformchildhouse' },
                { key: "0-5", label: i18n.t("countrysymbpols"), url: '/main/countrysymbols' },
            ]
        },
        {
            key: "1",
            label: i18n.t("economic"),
            children: [
                { key: "1-0", label: i18n.t("hybrid-econonmics"), url: '/main/hybrideconomics' },
                { key: "1-2", label: i18n.t("buisness"), url: "/main/buisness" },
                { key: "1-3", label: i18n.t("fiveyears"), url: "/main/fiveyears" },
                { key: "1-4", label: i18n.t("demographytax"), url: "/main/demographytax" },
                { key: "1-5", label: i18n.t("IMF"), url: "/main/imf" },
                { key: "1-1", label: i18n.t("transparentmoney"), url: '/main/transparentmoney' },

            ]
        },
        {
            key: "2",
            label: i18n.t("fightideology"),
            children: [
                { key: "2-0", label: i18n.t("nationalism"), url: '/main/nationalism' },
                { key: "2-1", label: i18n.t("separatism"), url: '/main/separatism' },
                { key: "2-2", label: i18n.t("communism"), url: '/main/communism' },
                { key: "2-3", label: i18n.t("transhumanism"), url: '/main/transhumanism' },
                { key: "2-4", label: i18n.t("liberalism"), url: '/main/liberalism' },
                { key: "2-5", label: i18n.t("lgbt"), url: '/main/lgbt' },
                { key: "2-6", label: i18n.t("abortandporn"), url: '/main/abortandpornban' },
                { key: "2-7", label: i18n.t("corrutption"), url: '/main/corrutptionfight' },
            ]
        },
        {
            key: "3",
            label: i18n.t("inteligencepolitic"),
            children: [
                { key: "3-0", label: i18n.t("education"), url: '/main/education' },
                { key: "3-1", label: i18n.t("Science"), url: '/main/science' },
                { key: "3-3", label: i18n.t("inventions"), url: '/main/inventions' },
                { key: "3-2", label: i18n.t("space"), url: '/main/space' },
                { key: "3-4", label: i18n.t("IT"), url: '/main/it' },
            ]
        },
        {
            key: "4",
            label: i18n.t("Religion"),
            children: [
                { key: "4-0", label: i18n.t("religionattitution"), url: '/main/religionattitution' },
                { key: "4-1", label: i18n.t("churchpolitics"), url: '/main/churchpolitics' },

            ]
        },
        {
            key: "5",
            label: i18n.t("peace"),
            children: [
                { key: "5-0", label: i18n.t("donbasspeace"), url: '/main/donbasspeace' },
                { key: "5-1", label: i18n.t("streetnames"), url: '/main/streetnames' },
                { key: "5-2", label: i18n.t("language"), url: '/main/language' },
            ]
        },
        {
            key: "6",
            label: i18n.t("extrapolytic"),
            children: [
                { key: "6-0", label: i18n.t("union"), url: '/main/union' },
                { key: "6-1", label: i18n.t("extraideology"), url: '/main/extraideology' },
            ]
        },
    ];

    const nodeTemplate = (node) => {
        if (node.url) {
            return (
                <Link to={node.url} className={styles.link} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>{node.label}</Link>
            )
        }
        else {
            return (
                <b>{node.label}</b>
            )
        }
    }

    return (
        <div className="tree">
            <div className="card">
                <Tree value={nodes} nodeTemplate={nodeTemplate} />
            </div>
        </div>
    )
}

export default TreePage;
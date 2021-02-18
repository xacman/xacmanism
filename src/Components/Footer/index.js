import React from 'react';
import './index.scss';
import symbol_footer from '../../images/simbol_footer.png';
import i18n from 'i18n-js';
import facebook from '../../images/facebook.png';
import email from '../../images/email.png';

const Footer = () => {
    return (
        <footer>
            <div className="upFooter">
                <div className="footerLogo">
                    <img alt={symbol_footer} src={symbol_footer} />
                    <p>
                        {i18n.t('xacmanism')}
                    </p>
                </div>
                <div className="contacts">
                <a href="mailto:xacmanism@protonmail.com" className="facebook">
                    <img src={email} alt="facebook" />
                </a>
                <a href="https://www.facebook.com/%D0%A5%D0%B0%D1%81%D0%BC%D0%B0%D0%BD%D0%B8%D0%B7%D0%BC-101181492021437" className="facebook">
                    <img src={facebook} alt="facebook" />
                </a>
                </div>
            </div>
            <p className="footerBottom">
                © 2021 {i18n.t("xacmanism")}
            </p>
        </footer>
    );
}

export default Footer;
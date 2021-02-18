import './App.css';
import TreePage from './Components/Tree';
import { HashRouter, Redirect, Route } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Pages/Main';
import Country from './Components/Pages/Coutnry';
import Independence from './Components/Pages/Patirotism';
import Order from './Components/Pages/Order';
import ReformChildHouse from './Components/Pages/ReformChildHouse';
import CountrySymbols from './Components/Pages/CoutntrySymbols';
import HybridEconomic from './Components/Pages/HybridEconomic';
import Buisness from './Components/Pages/Buisness';
import FiveYears from './Components/Pages/FiveYears';
import DemographyTax from './Components/Pages/DemographyTax';
import Imf from './Components/Pages/Imf';
import TransparentMoney from "./Components/Pages/TransparantMoney";
import Nationalism from './Components/Pages/Nationalism';
import Separatism from './Components/Pages/Separatism';
import Communism from './Components/Pages/Communism';
import Transhumanism from './Components/Pages/Transhumanism';
import Liberalism from './Components/Pages/Liberalism';
import LGBT from './Components/Pages/LGBT';
import AbortAndPortRestrict from './Components/Pages/AbortAndPortRestrict';
import Corrutpion from './Components/Pages/Corruption';
import Education from './Components/Pages/Education';
import Science from './Components/Pages/Science';
import Inventions from './Components/Pages/Inventions';
import Space from './Components/Pages/Space';
import IT from './Components/Pages/IT';
import ReligionAttitution from './Components/Pages/ReligionAttitution';
import ChurchPolitics from './Components/Pages/ChurchPolitic';
import DonbassPeace from './Components/Pages/DonbassPeace';
import StreetNames from './Components/Pages/StreetNames';
import Language from "./Components/Pages/Language";
import Union from './Components/Pages/Union';
import ExtraIdeology from "./Components/Pages/ExtraIdeology";
import { useState } from 'react';
import Footer from './Components/Footer';
import WeNeedYou from './Components/WeNeedYou/WeNeedYou';

function App() {
  const [, setLanguage] = useState('ru');

  return (
    <HashRouter>
      <div className="pageWrapper">
        <div>
      <Header setExtraLanguage={setLanguage} />
      <div className="ManiWrapper">
        <Route path="/" exact>
          <Redirect to="main" />
        </Route>
        <Route path="/main">
          <TreePage />
        </Route>
        <Route path="/main" exact>
          <Main />
        </Route>
        <Route path="/main/country" exact>
          <Country />
        </Route>
        <Route path="/main/Independence" exact>
          <Independence />
        </Route>
        <Route path="/main/order" exact>
          <Order />
        </Route>
        <Route path="/main/reformchildhouse" exact>
          <ReformChildHouse />
        </Route>
        <Route path="/main/countrysymbols" exact>
          <CountrySymbols />
        </Route>
        <Route path="/main/hybrideconomics" exact>
          <HybridEconomic />
        </Route>
        <Route path="/main/buisness" exact>
          <Buisness />
        </Route>
        <Route path="/main/fiveyears" exact>
          <FiveYears />
        </Route>
        <Route path="/main/demographytax" exact>
          <DemographyTax />
        </Route>
        <Route path="/main/imf" exact>
          <Imf />
        </Route>
        <Route path="/main/transparentmoney" exact>
          <TransparentMoney />
        </Route>
        <Route path="/main/nationalism" exact>
          <Nationalism />
        </Route>
        <Route path="/main/separatism" exact>
          <Separatism />
        </Route>
        <Route path="/main/communism" exact>
          <Communism />
        </Route>
        <Route path="/main/transhumanism" exact>
          <Transhumanism />
        </Route>
        <Route path="/main/liberalism" exact>
          <Liberalism />
        </Route>
        <Route path="/main/lgbt" exact>
          <LGBT />
        </Route>
        <Route path="/main/abortandpornban" exact>
          <AbortAndPortRestrict />
        </Route>
        <Route path="/main/corrutptionfight" exact>
          <Corrutpion />
        </Route>
        <Route path="/main/education" exact>
          <Education />
        </Route>
        <Route path="/main/science" exact>
          <Science />
        </Route>
        <Route path="/main/inventions" exact>
          <Inventions />
        </Route>
        <Route path="/main/space" exact>
          <Space />
        </Route>
        <Route path="/main/it" exact>
          <IT />
        </Route>
        <Route path="/main/religionattitution" exact>
          <ReligionAttitution />
        </Route>
        <Route path="/main/churchpolitics" exact>
          <ChurchPolitics />
        </Route>
        <Route path="/main/donbasspeace" exact>
          <DonbassPeace />
        </Route>
        <Route path="/main/streetnames" exact>
          <StreetNames />
        </Route>
        <Route path="/main/language" exact>
          <Language />
        </Route>
        <Route path="/main/union" exact>
          <Union />
        </Route>
        <Route path="/main/extraideology" exact>
          <ExtraIdeology />
        </Route>
        <Route path="/weneedyou" exact>
          <WeNeedYou />
        </Route>
      </div>
      </div>
      <Footer />
      </div>
    </HashRouter>
  );
}

export default App;

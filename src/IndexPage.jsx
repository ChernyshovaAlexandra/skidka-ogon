import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Mechanics from "./components/Mechanics";
import Nav from "./components/Nav";
import Prizes from "./components/Prizes";
import Sponsors from "./components/Sponsors";
import Winners from "./components/Winners";
import Map from './components/Map'

import { Hoc } from "./Hoc";
import Scaner from "./components/Scaner";
import FormComponent from "./components/FormComponent";
import API from "./utils/API";
// WinnersComponent

function IndexPage(props) {
  const { setShopPage,
    setSponsoryPage,
    page,
    setForm,
    openScaner,
    handleCheckToken,
    setScanerForm,
    GetAllChecks,
    getWinners } = props
  const {
    sponsoryPage,
    action,
    shops,
    edit,
    codeSent,
    codeVerified,
    form,
    scaner,
    scanerForm,
    verifyCodeError,
    checkList,
    winners
  } = props.state.store

  const [winnersMass, setWinners] = useState(false)
  useEffect(() => {
    let token = window.localStorage.getItem("userToken");
    if (token) {
      handleCheckToken(token);
    }
  }, []);


  useEffect(() => {
    API.get('/weekly_raffle_winners').then(
      res => {
        setWinners(res.data)
      }
    )
  }, [])

  return (
    <div className="content">
      <Nav setForm={setForm} openScaner={openScaner} />
      <nav className='opacity-0 select-none w-full py-8 shadow-lg bg-gray-300'>
        <div className='container mx-auto flex justify-between'>
          <div className="logo">Logo</div>
          <ul className="menu flex gap-4">
            <li><a href="">условия акции</a></li>
            <li><a href="">призы</a></li>
            <li><a href="">победители</a></li>
            <li><a href="">товары-спонсоры</a></li>
            <li><a href="">магазины</a></li>
          </ul>
        </div>
      </nav>
      {page === 'main' ?
        <>
          <Main />
          <Mechanics />
          <Prizes />
          <Sponsors />
          {winnersMass ? <Winners winners={winnersMass} /> : null}
        </> :
        page === 'sponsors' ?
          <Sponsors full={true} /> :
          <Map />}
      {form ?
        // <Scaner
        //   setForm={setForm}
        //   setScanerForm={setScanerForm}
        //   openScaner={openScaner}
        //   scanerForm={scanerForm}
        //   scaner={scaner}
        // />
        <FormComponent
          setForm={setForm}
          scaner={scaner}
          openScaner={openScaner}
          scanerForm={scanerForm}
          setScanerForm={setScanerForm}
          form={form}
          codeVerified={codeVerified} />
        : <></>}
      <Footer />
    </div>
  );

}

export default Hoc(IndexPage);

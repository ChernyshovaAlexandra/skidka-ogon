import React from "react";
import { connect } from "react-redux";
import {
  editUserInfo,
  loading,
  handleCheckToken,
  setForm,
  openScaner,
  setScanerForm,
  showCheckList
} from "../../store/actions";
import LoginForm from "./LoginForm";
import UserForm from "./UserForm";
import Scaner from "../Scaner";

class FormComponent extends React.Component {
  // CloseBtn works
  handleClick = (e) => {
    const { openScaner, setForm, editUserInfo, showCheckList } = this.props;
    document.querySelector("#root").classList.remove("scrolled");
    setForm(false);
    editUserInfo(false)
    openScaner(false)
    showCheckList(false)
  };


  render() {
    const {
      setForm,
      scaner,
      openScaner,
      scanerForm,
      setScanerForm,
      form,
      codeVerified
    } = this.props;


    return (
      <div className={form ? "modalBox " : "modalBox hidden"}>
        {scaner ? (
          <Scaner
            setForm={setForm}
            setScanerForm={setScanerForm}
            scanerForm={scanerForm}
            openScaner={openScaner}
            setForm={setForm}
          />
        ) : (
          <>
            <div
              className={
                codeVerified
                  ? "modalBox__container"
                  : "modalBox__container phone"
              }
            >
              <div className="close-btn__container cursor-pointer" onClick={() => this.handleClick()}>
                <div className="close-btn">
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="modalBox__container__content">
                {codeVerified ? <UserForm /> : <LoginForm />}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    codeVerified: state.store.codeVerified,
    edit: state.store.edit,
    loader: state.store.loader,
    form: state.store.form,
    scaner: state.store.scaner,
    scanerForm: state.store.scanerForm,
    userName: state.store.userName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    editUserInfo: (action) => dispatch(editUserInfo(action)),
    loading: (action) => dispatch(loading(action)),
    handleCheckToken: (userToken) => dispatch(handleCheckToken(userToken)),
    setForm: (action) => dispatch(setForm(action)),
    openScaner: (action) => dispatch(openScaner(action)),
    setScanerForm: (action) => dispatch(setScanerForm(action)),
    showCheckList: (action) => dispatch(showCheckList(action)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);

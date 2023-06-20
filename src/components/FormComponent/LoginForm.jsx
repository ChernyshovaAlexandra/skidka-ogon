import React from "react";
import { connect } from "react-redux";
import { handleSendCode, handleCheckCode, handleCheckToken, GetAllChecks } from '../../store/actions';
import Countdown from 'react-countdown';
import InputMask from 'react-input-mask';

import $ from 'jquery'



class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: false,
            number: false,
            phoneNumber: '',
            code: false
        }
    }
    changeNumber = () => {
        this.setState({
            phoneNumber: false,
            timer: false,
            requestMessage: false,
            verifyCodeError: false
        })
    }
    // Повторно можно отправить код через... и отправка кода на номер
    startTimer = (e) => {
        const { handleSendCode } = this.props
        const { phoneNumber } = this.state

        let clearNumber = phoneNumber.replace(/\s/g, '').replace(/[{()}]/g, '')
        e.preventDefault()
        this.setState({
            timer: true,
            number: clearNumber.replace('+', ''),
            code: false
        })
        handleSendCode(clearNumber.replace('+', ''))
        $('#user_phone').val('')
        $('.modalBox').trigger('click')
    }

    // Код отправлен повторно
    stopTimer = () => {
        this.setState({
            timer: 'ended'
        })
        const { handleSendCode } = this.props
        handleSendCode(this.state.number)
        $('.modalBox__container').trigger('click')
    }

    // Установить номер телефона
    setPhone = e => {
        this.setState({ phoneNumber: e.target.value })
    }

    // Ввести код
    setCode = e => {
        this.setState({ code: e.target.value })
    }

    // подтвердить код
    submitCode = () => {
        const { handleCheckCode, user_id } = this.props
        const { code, number } = this.state
        handleCheckCode(number, code)
        let token = localStorage.getItem('userToken')
        //handleCheckToken(token)
        $('.modalBox__container').trigger('click')
    }


    componentWillReceiveProps(props, next) {
        const { requestMessage, verifyCodeError } = props
        let th = this
        if (verifyCodeError) {
            this.setState({ verifyCodeError: verifyCodeError })
        }
        if (requestMessage) {
            th.setState({ timer: false, phoneNumber: false, requestMessage: requestMessage })
            $('.modalBox__container').trigger('click')
        }
        $('#user_phone').val('')
        $('.modalBox__container').trigger('click')

    }
    render() {

        const { timer, number, requestMessage, code, phoneNumber, verifyCodeError } = this.state

        const renderer = ({ seconds, completed }) => {
            if (completed) {
                return <Completionist />;
            } else if (requestMessage) {

                return <></>
            } else {
                return (
                    <p className="formCodeAgain" >
                        {timer === 'ended' ?
                            <>Код отправлен повторно</> :
                            <>
                                Повторная отправка возможна через{' '}
                                <span className="orange">{seconds}</span>{' '} сек
                            </>
                        }
                    </p >)


            }
        };
        const Completionist = () => (
            <a className="btnLink orange"
                onClick={() => this.stopTimer()}
            >Отправить повторно</a>
        );

        return (
            <>
                <header>
                    <div className="row justify-content-center">
                        <div className="col-lg-auto">
                            <h2 className='text-orange uppercase golos text-3xl mb-4'>
                                вход/регистрация </h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            {number && !requestMessage ?
                                <div className="changing-data">
                                    <p>Мы отправили код подтверждения на номер <span className="orange">{number}</span>.
                                        <p
                                            className="systemMessage forPhone cursor-pointer"
                                            onClick={() => {
                                                this.changeNumber()
                                            }}
                                        >(Изменить номер)</p></p>
                                </div>
                                : <p>Введите номер телефона для входа на сайт. Мы вышлем код подтверждения в смс.</p>}
                        </div>
                    </div>
                </header>
                <div className="modalBox__container__content_main">
                    <form
                        autocomplete="off"
                        onSubmit={(e) => {
                            e.preventDefault()
                            !timer && this.startTimer(e)
                        }}
                    >
                        <input type="hidden" name="" autoComplete="false" />
                        {verifyCodeError &&
                            <div className="row">
                                <div className="col-lg-12">
                                    <p className="errorMessage">{verifyCodeError}</p>
                                </div>
                            </div>}
                        <div className="row">
                            <div className="col-lg-12">

                                <InputMask
                                    placeholder={timer ? 'Введите код' : 'Введите номер телефона'}
                                    /*{...this.state}*/
                                    mask={timer ? '999999' : "+7 (999) 999 99 99"}
                                    required
                                    autofill='false'
                                    id="user_phone"
                                    value={timer ? code : phoneNumber}
                                    onChange={timer ? this.setCode : this.setPhone}
                                    maskChar="" />
                                {requestMessage && <p className="errorMessage">{requestMessage}</p>}
                            </div>
                        </div>
                        <div className="row justify-content-center">

                            {timer ?
                                <>
                                    {!requestMessage && <p className="col-lg-12 systemMessage mt-4">
                                        <Countdown date={Date.now() + 59000} intervalDelay={1000} precision={.3} renderer={renderer}>
                                            <Completionist />
                                        </Countdown>
                                    </p>}
                                    <div className="col-lg-auto">
                                        <div className="btnContainer  mx-auto" style={{ width: 'fit-content' }}>
                                            <button className='btn my-4 mx-auto'
                                                onClick={() => this.submitCode()}
                                            >
                                                <div className='bg'></div>
                                                <span>Подтвердить</span>
                                            </button>
                                        </div>
                                    </div>

                                    <p className='systemMessage mt-4'>Нажимая кнопку «Подтвердить» я принимаю условия акции</p>

                                </>
                                :
                                <div className="col-lg-auto">
                                    <div className="flex justify-center handleScanContainer__inner--input">
                                        <button className='btn my-8 mx-auto' type='submit'>
                                            <div className='bg'></div>
                                            <span>отправить код</span>
                                        </button>
                                    </div>
                                </div>
                            }
                        </div>

                    </form>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        codeSent: state.store.codeSent,
        codeVerified: state.store.codeVerified,
        user_id: state.store.user_id,
        verifyCodeError: state.store.verifyCodeError,
        requestMessage: state.store.requestMessage,
        token: state.store.token
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // sendUserForm: (form) => dispatch(sendUserForm(form)),
        handleSendCode: userCode => dispatch(handleSendCode(userCode)),
        handleCheckCode: (user_id, userCode) => dispatch(handleCheckCode(user_id, userCode)),
        handleCheckToken: (token) => dispatch(handleCheckToken(token)),
        GetAllChecks: (token) => dispatch(GetAllChecks(token)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

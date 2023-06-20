import React from "react";
import { connect } from "react-redux";
import { editUserInfo, handleUpdateUser, loading } from '../../store/actions';
import UserAccount from './UserAccount'
import { REGION_LIST } from '../Map/REGION_LIST.js'
import { Select, FormControl, InputLabel, MenuItem } from "@material-ui/core";



class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            loading: true,

            regions: REGION_LIST,
            userData: {
                name: '',
                lastName: '',
                email: '',
                birth: '',
                phone: '',
                token: '',
                region: '',
            },
        }
    }
    init = () => {
        const { userName, userLastName, userEmail, userBirthDate, userPhone, region, token } = this.props
        this.setState({
            edit: true,
            loading: false,
            userData: {
                name: userName,
                lastName: userLastName,
                email: userEmail,
                birth: userBirthDate,
                phone: userPhone,
                region: region,
                token: token
            }
        })

    }


    componentDidMount() {
        const { loading, userName } = this.props
        loading(true)
        setTimeout(() => {
            if (userName) {
                this.init()
            }
            loading(false)
        }, 800)
    }


    changeData = (e, item) => {
        e.preventDefault()
        let { userData } = this.state,
            userDataPrev = userData
        userDataPrev[item] = e.target.value
        this.setState({
            userData: userDataPrev
        })
    }

    submitUserForm = (e) => {
        const { handleUpdateUser, loading } = this.props
        const { userData } = this.state
        e.preventDefault()
        loading(true)
        let token = window.localStorage.getItem('userToken')
        handleUpdateUser(userData, token)
        //window.ym(10665502,'reachGoal','mandarim-reg')
        setTimeout(() => {
            loading(false)
        }, 800)
    }

    render() {
        const { edit, loader, systemMessage, userName, confirmedRules, checks } = this.props

        const {
            name,
            lastName,
            region,
            email,
        } = this.state.userData
        const { regions } = this.state

        return (
            <>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        {loader ?
                            <div className="loader-container">
                                <div className="loader"></div>
                            </div>
                            :

                            !userName || edit ?
                            // edit?
                                <>
                                    <header >
                                        <div className="row justify-content-center">
                                            <div className="col-lg-auto">
                                                <h2 className='text-orange uppercase golos text-3xl mb-4'>
                                                    Редактировать личные данные </h2>
                                            </div>
                                        </div>
                                    </header>
                                    <form onSubmit={(e) => this.submitUserForm(e)} style={{ paddingBottom: '50px' }}>
                                        <div className="row">

                                            <div className="col-lg-6 mb-4">
                                                <input
                                                    required
                                                    type="text"
                                                    className="inputDiv"
                                                    name="user_" id="user_"
                                                    placeholder="Имя"
                                                    value={name && name}
                                                    onChange={(e) => { this.changeData(e, 'name') }}
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <input
                                                    required
                                                    type="text"
                                                    className="inputDiv"
                                                    name="user_" id="user_"
                                                    placeholder="Фамилия"
                                                    value={lastName && lastName}
                                                    onChange={(e) => { this.changeData(e, 'lastName') }}
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-4">
                                                <input
                                                    required
                                                    type="email"
                                                    className="inputDiv"
                                                    name="user_" id="user_"
                                                    placeholder="E-mail"
                                                    value={email && email}
                                                    onChange={(e) => { this.changeData(e, 'email') }}
                                                />
                                            </div>

                                            <div className="col-lg-6">
                                                {/* <input
                                                    required
                                                    type="text"
                                                    className="inputDiv"
                                                    name="user_" id="user_"
                                                    placeholder="Город"
                                                    value={region && region}
                                                    onChange={(e) => { this.changeData(e, 'region') }}
                                                /> */}
                                                <FormControl variant="outlined">
                                                    <InputLabel htmlFor="outlined-age-native-simple">
                                                        Выберите регион
                                                    </InputLabel>
                                                    <Select
                                                        labelId="demo-customized-select-label"
                                                        id="demo-customized-select"
                                                        value={region}
                                                        onChange={(e) => { this.changeData(e, 'region') }}
                                                        label="Выберите регион"
                                                        inputProps={{
                                                            name: "Выберите регион",
                                                            id: "outlined-age-native-simple",
                                                        }}
                                                    >
                                                        {regions.map((item, index) => (
                                                            <MenuItem value={item.city} key={index}>{item.city}</MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </div>
                                        </div>
                                        {!confirmedRules && <div className="row justify-content-center">
                                            <div className="col-lg-auto">
                                                <div className="row politics">
                                                    <input
                                                        type="checkbox"
                                                        name="user_accept"
                                                        id="user_accept"
                                                        required
                                                    />
                                                    <label htmlFor="user_accept" className="check-box"></label>
                                                    <p>Я согласен с{' '}
                                                        <a
                                                            className="btnLink orange"
                                                            href="https://dixy.ru/politika-obrabotki-i-zashity.pdf"
                                                            target="_blank">Политикой Конфиденциальности и обработки моих данных</a>, ознакомлен с правилами акции.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>}
                                        {systemMessage && <div className="col-lg-auto systemMessage mt-4 text-center">{systemMessage}</div>}
                                        <div className="mx-auto" style={{ width: 'fit-content', display: 'grid' }}>
                                            <button className='btn mt-6 mx-auto' type='submit'>
                                                <div className='bg'></div>
                                                <span>сохранить</span>
                                            </button>

                                        </div>
                                    </form>
                                </>
                                : <UserAccount />
                        }
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        codeVerified: state.store.codeVerified,
        token: state.store.token,
        userName: state.store.userName,
        userLastName: state.store.userLastName,
        userEmail: state.store.userEmail,
        userBirthDate: state.store.userBirthDate,
        userPhone: state.store.userPhone,
        region: state.store.region,
        edit: state.store.edit,
        loader: state.store.loader,
        systemMessage: state.store.systemMessage,
        confirmedRules: state.store.confirmedRules
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        editUserInfo: (action) => dispatch(editUserInfo(action)),
        handleUpdateUser: (userData, token) => dispatch(handleUpdateUser(userData, token)),
        loading: (action) => dispatch(loading(action))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);

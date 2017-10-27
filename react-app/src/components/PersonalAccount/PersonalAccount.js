import React, {Component} from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import '../../theme/css/index.css';
import '../../theme/css/adaptive.css';
import '../../theme/css/main.css';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';
import InputMask from 'react-input-mask';
import * as helpers from '../../helpers';
import SuccessSaveModal  from '../Popups/SuccessSaveModal';
import { changeSuccessModalDisplay, setScrollTop } from '../Products/actions';
import classNames from 'classnames';
import Footer from '../Navigation/Footer';
import * as modelActions from '../../actions';

import {
  setUserInfo,
  updatePersonalData,
} from '../../api';

class PersonalAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      name: '',
      sname: '',
      mname: '',
      email: '',
      phone: '',
      birthdate: false,
      birthdateDay: false,
      birthdateMonth: false,
      birthdateYear: false,
      gender: '',
      avatar: true,
      errorMessageForCreate: true,

    }
  }

  componentWillMount() {
    const { dispatch, session } = this.props;
    setUserInfo(dispatch);
    const userInfo = session.get('userInfo');

    this.setState({
      name: userInfo['name'],
      sname: userInfo['sname'],
      mname: userInfo['mname'],
      email: userInfo['email'],
      phone: userInfo['phone'],
      gender: userInfo['gender'],
    });

    if (userInfo['birthdate']) {
      this.setState({
        birthdate: userInfo['birthdate'],
        birthdateDay: new Date(userInfo['birthdate']).getUTCDate(),
        birthdateMonth: (new Date(userInfo['birthdate']).getUTCMonth() + 1),
        birthdateYear: new Date(userInfo['birthdate']).getUTCFullYear(),
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', (event) => {
      const { dispatch } = this.props;
      var target = event.target || event.srcElement;
      let scrollTop = target.body.scrollTop;
      dispatch(setScrollTop(scrollTop));
    });
  }

  handlerCloseModal() {
    const { dispatch } = this.props;
    dispatch(changeSuccessModalDisplay(false));
  }

  handlerChangeDateDay(e) {
    this.setState({
      birthdateDay: e.value,
      birthdate: this.state.birthdateYear + '-' + this.state.birthdateMonth + '-' + e.value
    });
  }

  handlerChangeDateMonth(e) {
    this.setState({
      birthdateMonth: e.value,
      birthdate: this.state.birthdateYear + '-' + e.value + '-' + this.state.birthdateDay
    });
  }

  handlerChangeDateYear(e) {
    this.setState({
      birthdateYear: e.value,
      birthdate: e.value + '-' + this.state.birthdateMonth + '-' + this.state.birthdateDay
    });
  }

  handlerChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  handlerChangeSName(e) {
    this.setState({
      sname: e.target.value
    });
  }

  handlerChangeMName(e) {
    this.setState({
      mname: e.target.value
    });
  }

  handlerChangePhone(e) {
    this.setState({
      phone: e.target.value
    });
  }

  handleChangeGender(e) {
    this.setState({gender: e.value});
  }

  handlerUpdatePersonalData() {
    const { dispatch } = this.props;

    const data = {
      name: this.state.name,
      sname: this.state.sname,
      mname: this.state.mname,
      email: this.state.email,
      phone: this.state.phone,
      gender: this.state.gender,
      birthdate: this.state.birthdate,
    };

    if (this.state.name !== '' && this.state.sname !== '') {
      this.setState({
        errorMessageForCreate: true
      });
      dispatch(modelActions.setLoaderStatus(true));
      updatePersonalData(dispatch, data);
    } else {
      this.setState({
        errorMessageForCreate: false
      });
    }
  }

  handlerChangePhoto() {
    this.setState({
      avatar: false
    });
  }

  handlerInputOnFocus() {
    this.setState({
      errorMessageForCreate: true
    });
  }

  render() {

    const { session, api, products } = this.props;
    const userInfo = session.get('userInfo');
    const genderOptions = [
      { value: 0, label: 'Не выбран' },
      { value: 1, label: 'Мужской' },
      { value: 2, label: 'Женский' }
    ];
    const monthOptions = [
      { value: 0, label: '' },
      { value: 1, label: 'Январь' }, { value: 2, label: 'Февраль' }, { value: 3, label: 'Март' }, { value: 4, label: 'Апрель' }, { value: 5, label: 'Май' }, { value: 6, label: 'Июнь' }, { value: 7, label: 'Июль' }, { value: 8, label: 'Август' }, { value: 9, label: 'Сентябрь' }, { value: 10, label: 'Октябрь' }, { value: 11, label: 'Ноябрь' }, { value: 12, label: 'Декабрь' }
    ];
    const dayOptions = helpers.getNumberSelectOptions(1, 31);
    const yearOptions = helpers.getNumberSelectOptions(1900, (new Date().getUTCFullYear() - 10));

    const errorMessageForCreate = classNames({
      'error_message_for_create': true,
      'fade': this.state.errorMessageForCreate,
      'in': !this.state.errorMessageForCreate
    });

    return (
      <div>
        <div className="container">
          <Navigation />
          <MenuMobile />
          <SuccessSaveModal
            handlerCloseModal={this.handlerCloseModal.bind(this)}
            successModalDisplay={products.get('successModalDisplay')}
            modalTitle="Данные обновлены."
            colorBack="#4CAF50"
            colorText="#fff"
          />
          <div className="main-container">
            <h2>Личный кабинет</h2>
            <p className="personal-explain-text">Здесь вы можете отредактировать свои данные.</p>
            <div className="personal-container animation-page-load-medium">
              <form action="/personal" method="POST" id="personal-data-form">
                <div className="customer-data-container">
                  <div className="personal-filds-label-input">
                    <label className="personal-filds-label" htmlFor="fname">Имя*</label>
                    <input id="fname" name="fname" type="text"
                           value={this.state.name} onChange={this.handlerChangeName.bind(this)}
                           onFocus={this.handlerInputOnFocus.bind(this)} />
                  </div>
                  <div className="personal-filds-label-input">
                    <label className="personal-filds-label" htmlFor="sname">Фамилия*</label>
                    <input id="sname" name="sname" type="text" value={this.state.sname}
                           onChange={this.handlerChangeSName.bind(this)} onFocus={this.handlerInputOnFocus.bind(this)} />
                  </div>
                  <div className="personal-filds-label-input">
                    <label className="personal-filds-label" htmlFor="mname">Отчество</label>
                    <input id="mname" name="mname" type="text" value={this.state.mname ? this.state.mname : ''}
                           onChange={this.handlerChangeMName.bind(this)}  />
                  </div>
                </div>
                <div className="customer-data-container">
                  <input readOnly type="hidden" name="birthdate" value={this.state.birthdate} />
                  <label className="personal-filds-label" htmlFor="birthdate">Дата рождения</label>
                  <div className="personal-filds-label-input">
                    <div className="personal-select-birdthdate-group">
                      <Select
                        name="birthdate"
                        className="margin-right-10"
                        value={this.state.birthdateDay ? this.state.birthdateDay : ''}
                        options={dayOptions}
                        onChange={this.handlerChangeDateDay.bind(this)}
                        placeholder=""
                        clearable={false}
                        searchable={true}
                        scrollMenuIntoView={false}
                      />
                      <Select
                        className="margin-right-10"
                        name="birthdate"
                        value={this.state.birthdateMonth ? this.state.birthdateMonth : ''}
                        options={monthOptions}
                        onChange={this.handlerChangeDateMonth.bind(this)}
                        placeholder=""
                        clearable={false}
                        searchable={false}
                        scrollMenuIntoView={false}
                      />
                      <Select
                        name="birthdate"
                        value={this.state.birthdateYear ? this.state.birthdateYear : ''}
                        options={yearOptions}
                        onChange={this.handlerChangeDateYear.bind(this)}
                        placeholder=""
                        clearable={false}
                        searchable={true}
                        scrollMenuIntoView={false}
                      />
                    </div>
                  </div>
                  <div className="personal-filds-label-input">
                    <label className="personal-filds-label" htmlFor="gender">Пол</label>
                    <Select
                      name="gender"
                      value={this.state.gender}
                      options={genderOptions}
                      onChange={this.handleChangeGender.bind(this)}
                      placeholder="Не выбран"
                      clearable={false}
                      searchable={false}
                    />
                  </div>
                  <div className="personal-filds-label-input">
                    <label className="personal-filds-label" htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={this.state.email} disabled  />
                  </div>
                  <div className="personal-filds-label-input">
                    <label className="personal-filds-label" htmlFor="phone">Телефон</label>
                    <InputMask
                      id="phone"
                      value={this.state.phone ? this.state.phone : ''}
                      mask="+7\(999\) 999 99 99" maskChar=" "
                      onChange={this.handlerChangePhone.bind(this)}
                      name="phone"
                      placeholder="+7(___) ___ __ __" />
                  </div>
                </div>
              </form>
              <hr />
              <div className="person-success-button-div">
                <p className={errorMessageForCreate}>Заполните все поля помеченные звёздочкой.</p>
                <input readOnly id="personal-submit"
                       className="register-button"
                       style={{width: '30%'}} value="Сохранить данные"
                       onClick={this.handlerUpdatePersonalData.bind(this)} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
  products: store.products,
}))(PersonalAccount);
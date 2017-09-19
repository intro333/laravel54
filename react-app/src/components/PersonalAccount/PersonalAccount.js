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

import {
  setUserInfo,
  updatePersonalData,
  changePhotoPersonalData
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
      avatar: true

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

    updatePersonalData(dispatch, data);
  }

  handlerChangePhoto() {
    this.setState({
      avatar: false
    });
  }

  render() {

    const { session, api } = this.props;
    const userInfo = session.get('userInfo');
    const userImage = api.get('imagePath') ? api.get('imagePath') : "/images/no-image.png";
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

    return (
      <div className="container">
        <Navigation />
        <MenuMobile />
        {/*<Avatar*/}
          {/*avatar={this.state.avatar}*/}
        {/*/>*/}
        <div className="main-container">
          <h2>Личный кабинет</h2>
          <p className="personal-explain-text">Здесь вы можете отредактировать свои данные.</p>
          <div className="personal-container animation-page-load-medium">
            {/*<div className="image-container">*/}
              {/*<div className="customer-image">*/}
                {/*<img src={userImage} />*/}
              {/*</div>*/}
                {/*<input value="Добавить фото" id="personal-photo" className="register-button" onClick={this.handlerChangePhoto.bind(this)} />*/}
            {/*</div>*/}
            <div className="customer-data-container">
              <form action="/personal" method="POST" id="personal-data-form">
                <div className="personal-filds-label-input">
                  <label className="personal-filds-label" htmlFor="fname">Имя</label>
                  <input id="fname" name="fname" type="text" value={this.state.name} onChange={this.handlerChangeName.bind(this)} />
                </div>
                <div className="personal-filds-label-input">
                  <label className="personal-filds-label" htmlFor="sname">Фамилия</label>
                  <input id="sname" name="sname" type="text" value={this.state.sname} onChange={this.handlerChangeSName.bind(this)} />
                </div>
                <div className="personal-filds-label-input">
                  <label className="personal-filds-label" htmlFor="mname">Отчество</label>
                  <input id="mname" name="mname" type="text" value={this.state.mname ? this.state.mname : ''} onChange={this.handlerChangeMName.bind(this)}  />
                </div>
                <input type="hidden" name="birthdate" value={this.state.birthdate} />
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
                      searchable={false}
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
                      searchable={false}
                      scrollMenuIntoView={false}
                    />
                    {/*<InputMask*/}
                    {/*id="birthdate"*/}
                    {/*value={this.state.birthdate ? this.state.birthdate : ''}*/}
                    {/*mask="99 99 9999" maskChar=" "*/}
                    {/*onChange={this.handlerChangeBirthdate.bind(this)}*/}
                    {/*name="birthdate"*/}
                    {/*placeholder="09-12-1986" />*/}
                    {/*<span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-calendar"></i></span>*/}
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
                  <InputMask /*{...this.props}*/
                    id="phone"
                    value={this.state.phone ? this.state.phone : ''}
                    mask="+7\(999\) 999 99 99" maskChar=" "
                    onChange={this.handlerChangePhone.bind(this)}
                    name="phone"
                    placeholder="+7(___) ___ __ __" />
                </div>
                <p style={{color: 'red', display: 'none'}} className="error_message_for_create">Заполните все поля помеченные звёздочкой.</p>
                <input id="personal-submit" className="register-button" value="Сохранить данные" onClick={this.handlerUpdatePersonalData.bind(this)} />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(store => ({
  dispatch: store.dispatch,
  session: store.session,
  api: store.api,
}))(PersonalAccount);
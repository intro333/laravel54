import React, {Component} from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
// Be sure to include styles at some point, probably during your bootstrapping
import 'react-select/dist/react-select.css';
import '../../theme/css/index.css';
import '../../theme/css/adaptive.css';
import '../../theme/css/main.css';
import {Link} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MenuMobile from '../Popups/MenuMobile';
import InputMask from 'react-input-mask';
import DatePicker from 'react-bootstrap-date-picker';
import {
  setUserInfo,
  updatePersonalData
} from '../../api';

class PersonalAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date().toISOString(),
      name: '',
      sname: '',
      mname: '',
      email: '',
      phone: '',
      birthdate: '',
      gender: ''
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
      birthdate: userInfo['birthdate'],
    });
  }

  handlerChangeDate(value) {
    this.setState({
      birthdate: value
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
    // console.log(e)
    this.setState({gender: e.value});
  }

  handlerChangeBirthdate(e) {
    this.setState({
      birthdate: e.target.value
    });
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
    console.log('PHOTO')
  }

  render() {
    const { dispatch, session } = this.props;
    const userInfo = session.get('userInfo');
    var genderOptions = [
      { value: 0, label: 'Не выбран' },
      { value: 1, label: 'Мужской' },
      { value: 2, label: 'Женский' }
    ];

    return (
      <div className="container">
        <Navigation />
        <MenuMobile />
        <div className="main-container">
          <h1>Редактирование личных данных</h1>
          <p className="personal-explain-text">Здесь вы можете отредактировать личные данные, изменить пароль и добавить своё фото.</p>

          <div className="personal-container">
            <div className="image-container">
              <div className="customer-image">
                <img src="/images/no-image.png" />
              </div>
              <div className="customer-image-button">
                <div className="register-button" id="add-avatar">
                  <p>Добавить фото</p>
                </div>
                <input name="personal-photo" id="personal-photo" required="" type="file" onChange={this.handlerChangePhoto.bind(this)} />
              </div>
            </div>
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
                    value={this.state.phone ? this.state.phone : ''}
                    mask="+7\(999\) 999 99 99" maskChar=" "
                    onChange={this.handlerChangePhone.bind(this)}
                    name="phone"
                    placeholder="+7(___) ___ __ __" />
                </div>
                <div className="personal-filds-label-input">
                  <label className="personal-filds-label" htmlFor="birthdate">Дата рождения</label>
                  <div className="input-group">
                    <DatePicker
                      id="birthdate"
                      name="birthdate"
                      value={this.state.birthdate}
                      onChange={this.handlerChangeDate.bind(this)}
                      dateFormat="DD MM YYYY"
                      calendarPlacement="top"
                      placeholder="Выберите дату"
                      showClearButton={false}
                    />
                    <span className="input-group-addon" id="basic-addon1"><i className="glyphicon glyphicon-calendar"></i></span>
                  </div>
                </div>
                <p style={{color: 'red', display: 'none'}} className="error_message_for_create">Заполните все поля помеченные звёздочкой.</p>
                <input id="personal-submit" className="register-button" value="Сохранить данные" onClick={this.handlerUpdatePersonalData.bind(this)} />
              </form>
            </div>
            <div className="customer-data-container">
              <form action="/change-password" method="POST" id="change-password-form">
                <div className="personal-filds-label-input">
                  <label className="personal-filds-label" htmlFor="password-old">Старый пароль</label>
                  <input id="password-old" name="password-old" type="password" placeholder="Введите пароль" />
                </div>
                <div className="personal-filds-label-input">
                  <label className="personal-filds-label" htmlFor="password">Новый пароль</label>
                  <input id="password" name="password" type="password" placeholder="Введите пароль" />
                </div>
                <div className="personal-filds-label-input">
                  <label className="personal-filds-label" htmlFor="password-again">Повтор</label>
                  <input id="password-again" name="password-again" type="password" placeholder="Повторите пароль" />
                </div>
                <input id="change-password-submit" className="register-button" value="Изменить пароль" />
                  <div style={{color: 'red', display: 'none', marginTop: '5px'}} className="error_message">Заполните все 3 поля с паролями.</div>
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
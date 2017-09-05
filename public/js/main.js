var formChecking = {
  init: function () {
    var _this = this;

    _this.setObjects();
    _this.setConstants();
    _this.datePicker();
    _this.mask();
    _this.setEventHandlers();
    // this.needValidateSlot = false;
  },
  setObjects: function () {
    this.element = {};
    this.element.formRegister = $('#register-form');
    this.element.formLogin = $('#login-form');
    this.element.formEmailForResetPassword = $('#email-for-reset-password-form');
    this.element.formResetPassword = $('#reset-password-form');
    this.element.goToLogin = $('#go-to-login');
    this.element.goToRegister = $('#go-to-register');
    this.element.goToSite = $('#go-to-site');
    this.element.formChangePassword = $('#change-password-form');
    this.element.formFName = $('#fname');
    this.element.formSName = $('#sname');
    this.element.formMName = $('#mname');
    this.element.formEmail = $('#email');
    this.element.formPassOld = $('#password-old');
    this.element.formPass = $('#password');
    this.element.formPassConfirm = $('#password-confirm');
    this.element.formElectronicKey = $('#electronic_key');
    this.element.formPhone = $('#phone');
    this.element.formGender = $('#gender');
    this.element.fieldBirthdate = $('#birthdate');
    this.element.formBirthdate = $('#datetimepicker');
    this.element.blockErrors = $('.error_message');
  },
  setConstants: function () {
    this.const = {};
    this.const.dateFormatUpper = 'DD.MM.YYYY';
    this.const.dateFormatLower = 'dd.mm.yyyy';
    this.const.dateMask = '?99.99.9999';
    this.const.phoneMask = '+7 (999) 999 99 99';
    this.const.defaultSelectValue = 'NO';
  },
  setEventHandlers: function () {
    var validateFormCallback = Function.createCallback(this.validateForm, this);

    this.element.formRegister.on('submit', validateFormCallback);
    this.element.formLogin.on('submit', validateFormCallback);
    this.element.formEmailForResetPassword.on('submit', validateFormCallback);
    this.element.formResetPassword.on('submit', validateFormCallback);
    this.element.formChangePassword.on('submit', validateFormCallback);
    this.element.goToLogin.on('click', function () {
      window.location.href = '/login';
    });
    this.element.goToRegister.on('click', function () {
      window.location.href = '/register';
    });
    this.element.goToSite.on('click', function () {
      window.location.href = '/';
    });
  },
  datePicker: function () {
    this.element.formBirthdate.datepicker({
      format: this.dateFormatLower,
      endDate: '-1d',
      keepEmptyValues: true,
      autoclose: true,
      forceParse: false,
      language: 'ru'
    });
  },
  mask: function () {
    this.element.fieldBirthdate.mask(this.const.dateMask);
    this.element.formPhone.mask(this.const.phoneMask);
  },
  clearErrorMessage: function (obj) {
    obj.element.blockErrors.hide();
  },
  showErrorMessage: function (obj) {
    obj.element.blockErrors.show();
  },
  clearFieldError: function (obj) {
    obj.css('border', '');
  },
  markFieldError: function (obj) {
    obj.css('border', 'solid red 1px');
  },
  validateForm: function (e, obj) {

    // if(!obj.isValid(obj, obj.element.formGender)) {
    //     e.preventDefault();
    // }
    if (obj.element.formRegister.length) {
      if (!obj.isValid(obj, obj.element.formFName)) {
        e.preventDefault();
      }
      if (!obj.isValid(obj, obj.element.formSName)) {
        e.preventDefault();
      }
      if (!obj.isValid(obj, obj.element.formEmail)) {
        e.preventDefault();
      }
    }
    if (obj.element.formLogin.length) {
      if (!obj.isValid(obj, obj.element.formEmail)) {
        e.preventDefault();
      }
    }
    if (obj.element.formEmailForResetPassword.length) {
      if (!obj.isValid(obj, obj.element.formEmail)) {
        e.preventDefault();
      }
    }
    if (obj.element.formResetPassword.length) {
      if (!obj.isValid(obj, obj.element.formEmail)) {
        e.preventDefault();
      }
    }
    if (!obj.isValid(obj, obj.element.formPassOld)) {
      e.preventDefault();
    }
    if (!obj.isValid(obj, obj.element.formPass)) {
      e.preventDefault();
    }
    if (!obj.isValid(obj, obj.element.formPassConfirm)) {
      e.preventDefault();
    }
    if (!obj.isValid(obj, obj.element.formElectronicKey)) {
      e.preventDefault();
    }
  },
  isValid: function (obj, field) {
    if (field.val() === obj.const.defaultSelectValue) {
      obj.markFieldError(field);
      obj.showErrorMessage(obj);
      field.on('change', function () {
        obj.clearFieldError(field);
        obj.clearErrorMessage(obj);
      });
      return false;
    }
    if (field.val() === '') {
      obj.markFieldError(field);
      obj.showErrorMessage(obj);
      field.on('focus', function () {
        obj.clearFieldError(field);
        obj.clearErrorMessage(obj);
      });
      return false;
    }
    return true;
  }
};

var personal = {
  init: function () {
    var _this = this;

    _this.setObjects();
    _this.setConstants();
    _this.buttonAddAvatarOperacy();
    _this.addAvatar();
  },
  setObjects: function () {
    this.element = {};
    this.element.personalPhoto = $('#personal-photo');
    this.element.addAvatar = $('#add-avatar');
  },
  setConstants: function () {
    this.const = {};
  },
  buttonAddAvatarOperacy: function () {
    var addAvatar = this.element.addAvatar;
    this.element.personalPhoto.on('mouseover', function () {
      addAvatar.css('background', '#2b5372');
    });
    this.element.personalPhoto.on('mouseout', function () {
      addAvatar.css('background', '');
    });
    this.element.personalPhoto.on('change', function () {
      console.log("Отправка аватара на бекенд и обработка");
      //Здесь будет AJAX запрос.Отправка картинки серверу, сохранение её в папке пользователя.
      //Сразу же после удачной отправки поместить это изображение в аватар.
    });
  },
  addAvatar: function () {
  }
};

$(document).ready(function () {
  formChecking.init();

  personal.init();
});
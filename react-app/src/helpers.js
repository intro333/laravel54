//Маска для даты
export function inputmaskBirthDate(value, length, date) {

  var result = null;

  if (length == 1) {
    if (value < 4) {
      result = value
    } else {
      result = '0'
    }
  }

  if (length == 2) {
    if (value < 32 && value.slice(0,2) != '00') {
      result = value
    } else {
      result = '31'
    }
  }

  if (length == 4) {
    if (value.slice(3,4) < 2) {
      result = value
    } else {
      result = value.slice(0,3) + '0'
    }
  }

  if (length == 5) {
    if (value.slice(3,5) < 13 && value.slice(3,5) != '00') {
      result = value
    } else {
      result = value.slice(0,3) + '12'
    }
  }

  if (length > 5 && length < 10) {
    result = value
  }

  if (length == 10) {
    if (value.slice(6,10) > 1900 && value.slice(6,10) < (date.getFullYear() + 1)) {
      result = value
    } else {
      result = value.slice(0,6) + (date.getFullYear() - 18)
    }
    if (value.slice(0,2) > 31 || value.slice(0,2) == '00') {
      result = '31' + value.slice(2,10)
    }
    if (value.slice(3,5) > 12 || value.slice(3,5) == '00') {
      result = value.slice(0,3) + '12' + value.slice(6,10)
    }
  }

  return result;
}
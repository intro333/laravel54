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

//Маска для даты
export function getNumberSelectOptions(start, end, filter=true) {
  const nums = [];
  const arrayOptions = [];
  if (filter)
    arrayOptions.push({ value: 0, label: '' });

  for (var i = start; i <= end; i++) {
    nums.push(i)
  }

  nums.forEach(function(item, i) {
    arrayOptions.push({
      value: item, label: item
    })
  });

  return arrayOptions;
}

//Проверка на пустой Map
export function isEmptyMap(map) {
  return !!(map && map.size !== 0);
}
export function isEmptyArray(map) {
  if (!!(map && map.size !== 0)) {
    return !!(map && map.length !== 0);
  }
  return false;
}

/*SCROLL TO ELEMENT ----------------------------------------------------------*/
/**
 * ScrollTo utility
 * © https://gist.github.com/james2doyle/5694700
 */
const easeInOutQuad = (t, b, c, d) => {
  if ((t /= d / 2 ) < 1) return c / 2 * t * t + b;

  return -c / 2 * ((--t) * (t - 2) - 1) + b;
};

// requestAnimationFrame for Smart Animating http://goo.gl/sx5sts
const requestAnimFrame = (
  () => window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame || (callback => window.setTimeout(callback, 1000 / 60))
)();

export function scrollTo(to, duration = 500, callback = null) {
  const move = (amount) => {
    document.documentElement.scrollTop = amount;
    document.body.parentNode.scrollTop = amount;
    document.body.scrollTop = amount;
  };
  const start = document.documentElement.scrollTop ||
    document.body.parentNode.scrollTop ||
    document.body.scrollTop;
  const change = to - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = () => {
    currentTime += increment;
    const val = easeInOutQuad(currentTime, start, change, duration);
    move(val);
    if (currentTime < duration) {
      requestAnimFrame(animateScroll);
    } else {
      if (callback && typeof(callback) === 'function') {
        callback();
      }
    }
  };
  animateScroll();
}

export function scrollToElement(toSelector, duration = 500) {
  const element = document.querySelector(toSelector);
  if (!element) return;

  scrollTo(element.getBoundingClientRect().top, duration);
}
/*SCROLL TO ELEMENT ----------------------------------------------------------*/

/* Заполнить массив секундами */
export function setSecondsArray(length, interval) {
  let array = [];

  for (var i=1;i<=length;i++) {
    array.push(i * interval * 1000);
  }

  return array;
}
/* Задать значение интервалу */
export function setIntervalValue(length, interval) {
  return length * interval * 1000;
}
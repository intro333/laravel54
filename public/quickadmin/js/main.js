$(document).ready(function () {

  var activeSub = $(document).find('.active-sub');
  if (activeSub.length > 0) {
    activeSub.parent().show();
    activeSub.parent().parent().find('.arrow').addClass('open');
    activeSub.parent().parent().addClass('open');
  }

  $('.datatable').dataTable({
    retrieve: true,
    "iDisplayLength": 100,
    "aaSorting": [],
    "aoColumnDefs": [
      {'bSortable': false, 'aTargets': [0]}
    ]
  });

  $('.ckeditor').each(function () {
    CKEDITOR.replace($(this));
  })

  $('.mass').click(function () {
    if ($(this).is(":checked")) {
      $('.single').each(function () {
        if ($(this).is(":checked") == false) {
          $(this).click();
        }
      });
    } else {
      $('.single').each(function () {
        if ($(this).is(":checked") == true) {
          $(this).click();
        }
      });
    }
  });

  $('.page-sidebar').on('click', 'li > a', function (e) {

    if ($('body').hasClass('page-sidebar-closed') && $(this).parent('li').parent('.page-sidebar-menu').size() === 1) {
      return;
    }

    var hasSubMenu = $(this).next().hasClass('sub-menu');

    if ($(this).next().hasClass('sub-menu always-open')) {
      return;
    }

    var parent = $(this).parent().parent();
    var the = $(this);
    var menu = $('.page-sidebar-menu');
    var sub = $(this).next();

    var autoScroll = menu.data("auto-scroll");
    var slideSpeed = parseInt(menu.data("slide-speed"));
    var keepExpand = menu.data("keep-expanded");

    if (keepExpand !== true) {
      parent.children('li.open').children('a').children('.arrow').removeClass('open');
      parent.children('li.open').children('.sub-menu:not(.always-open)').slideUp(slideSpeed);
      parent.children('li.open').removeClass('open');
    }

    var slideOffeset = -200;

    if (sub.is(":visible")) {
      $('.arrow', $(this)).removeClass("open");
      $(this).parent().removeClass("open");
      sub.slideUp(slideSpeed, function () {
        if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
          if ($('body').hasClass('page-sidebar-fixed')) {
            menu.slimScroll({
              'scrollTo': (the.position()).top
            });
          }
        }
      });
    } else if (hasSubMenu) {
      $('.arrow', $(this)).addClass("open");
      $(this).parent().addClass("open");
      sub.slideDown(slideSpeed, function () {
        if (autoScroll === true && $('body').hasClass('page-sidebar-closed') === false) {
          if ($('body').hasClass('page-sidebar-fixed')) {
            menu.slimScroll({
              'scrollTo': (the.position()).top
            });
          }
        }
      });
    }
    if (hasSubMenu == true || $(this).attr('href') == '#') {
      e.preventDefault();
    }
  });

});

/*scripts by shop-travel for admin*/
$(document).on('click', '.cart-products-table thead', function () {
  $(this).parent().parent().find('.order-instruments').toggleClass('not-active');
  $(this).parent().parent().find('.cart-order__total').toggleClass('not-active');
  $(this).parent().parent().find('.order-comment-admin').toggleClass('not-active');
  $(this).parent().find('.order-tbody').toggleClass('not-active');
  $(this).parent().find('.order-tr-head:eq(0)').toggleClass('not-active');
  $(this).parent().find('.order-tr-head:eq(1)').toggleClass('not-active');
});
/* Поиск и фильтрация */
//Поиск по номеру заказа
const search = function () {
  var prefSearch = $('#pref-search').val();
  var prefPhone = $('#pref-phone').val();
  var prefNames = $('#pref-names').val().toLowerCase();
  var prefPeriod = $('#pref-period').val();
  var ordersItem = $('.orders-item');

  const if_1 = (prefSearch !== '' && prefSearch.length > 1) ||
    (prefPhone !== '' && prefPhone.length > 2) ||
    (prefNames !== '' && prefNames.length > 2) ||
    prefPeriod !== '0';

  const if_2 = function (_this) {
    console.log(1, (prefSearch === '' && prefSearch.length <= 1) ? true : _this.attr('order-number').indexOf(prefSearch) !== -1);
    console.log(2, (prefPhone === '' && prefPhone.length <= 2) ? true : _this.attr('phone-number').indexOf(prefPhone) !== -1);
    console.log(3, (prefNames === '' && prefNames.length <= 2) ? true :_this.attr('names').toLowerCase().indexOf(prefNames) !== -1);
    console.log(4, (prefPeriod === '0' ? true : _this.attr('period') === prefPeriod));
    var result =  ((prefSearch === '' && prefSearch.length <= 1) ? true : _this.attr('order-number').indexOf(prefSearch) !== -1) &&
    ((prefPhone === '' && prefPhone.length <= 2) ? true : _this.attr('phone-number').indexOf(prefPhone) !== -1) &&
    ((prefNames === '' && prefNames.length <= 2) ? true :_this.attr('names').toLowerCase().indexOf(prefNames) !== -1) &&
    (prefPeriod === '0' ? true : _this.attr('period') === prefPeriod);
    console.log(5, result);
    return result;
  };

  if (if_1) {
    ordersItem.each(function (index) {
      if (if_2($(this))) {
        $(this).show();
      } else {
          $(this).hide();
      }
    });
  } else {
    ordersItem.show();
  }
};

$(document).on('keyup', '#pref-search', function () {
  search();
  // var elementValue = $(this).val();
  // var ordersItem = $('.orders-item');
  //
  // if (elementValue !== '' && elementValue.length > 1) {
  //   ordersItem.each(function (index) {
  //     if ($(this).attr('order-number').indexOf(elementValue) === -1) {
  //       $(this).hide();
  //     } else $(this).show();
  //   });
  // } else {
  //   ordersItem.show();
  // }
});
//Поиск по номеру телефона
$(document).on('keyup', '#pref-phone', function () {
  search();
  // var elementValue = $(this).val();
  // var ordersItem = $('.orders-item');
  //
  // if (elementValue !== '' && elementValue.length > 2) {
  //   ordersItem.each(function (index) {
  //     if ($(this).attr('phone-number').indexOf(elementValue) === -1) {
  //       $(this).hide();
  //     } else $(this).show();
  //   });
  // } else {
  //   ordersItem.show();
  // }
});
//Поиск по ФИО
$(document).on('keyup', '#pref-names', function () {
  search();
  // var elementValue = $(this).val().toLowerCase();
  // var ordersItem = $('.orders-item');
  //
  // if (elementValue !== '' && elementValue.length > 2) {
  //   ordersItem.each(function (index) {
  //     if ($(this).attr('names').toLowerCase().indexOf(elementValue) === -1) {
  //       $(this).hide();
  //     } else $(this).show();
  //   });
  // } else {
  //   ordersItem.show();
  // }
});
//Поиск по периоду
$(document).on('change', '#pref-period', function () {
  search();
  // var elementValue = $(this).val();
  // var ordersItem = $('.orders-item');
  //
  // if (elementValue !== '0') {
  //   ordersItem.each(function (index) {
  //     console.log(1, elementValue)
  //     console.log(2, $(this).attr('period'))
  //     if ($(this).attr('period') !== elementValue) {
  //       $(this).hide();
  //     } else $(this).show();
  //   });
  // } else {
  //   ordersItem.show();
  // }
});
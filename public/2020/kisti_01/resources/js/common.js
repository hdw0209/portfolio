$(document).ready(function () {
    var sub_menu = $('.sub-area');
    var sub_top = sub_menu[0] ? sub_menu[0].offsetTop : 0;

    topbar.config({
        autoRun: false,
        barThickness: 4
    });

    topbar.show();

    $(window).on('scroll', function () {
        /* 서브메뉴 상단 붙이기 */
        if (sub_menu[0]) {
            if (window.pageYOffset > sub_top) {
                sub_menu.addClass('top-fix');
                topbar.config({
                    top: '60px'
                });
            } else {
                sub_menu.removeClass('top-fix');
                topbar.config({
                    top: '0px'
                });
            }
        }

        /* 페이지 스크롤 진행바 */
        var s = $(window).scrollTop(),
            d = $(document).height(),
            c = $(window).height();

        var per = s / (d - c);
        topbar.progress(per);
    });

    /* 검색 돋보기 클릭 */
    $('.btn-sch-top').on('click', function (e) {
        e.preventDefault();

        $('.btn-sch-top, .sch-top-area').toggleClass('on');
        $('.sch-top-area #keyword').trigger('focus');
    });

    /* 상세검색 버튼 */
    $('.sch-top-area .search-detail-btn').on('click', function (e) {
        e.preventDefault();

        var area = $('.sch-detail').toggleClass('on');

        if (area.hasClass('on')) {
            area.find('.sch-menu > li')
                .removeClass('on')
                .eq(0)
                .addClass('on');
        }
    });

    /**
     * 검색 상세검색탭
     */
    $('.sch-detail .sch-menu li > a').on('click', function (e) {
        e.preventDefault();

        var el = $(this);
        el.parent()
            .siblings()
            .removeClass('on');
        el.parent().addClass('on');
    });

    /**
     * 네이게이션 바 관련
     */
    $('.sub-area .lnb > button').on('click', function (e) {
        e.preventDefault();

        var el = $(this);
        el.parent()
            .siblings()
            .removeClass('on');
        el.parents('.lnb-area')
            .find('.lnb > ul')
            .hide();

        var menu = el.parent().toggleClass('on');
        if (menu.hasClass('on')) {
            menu.find('ul').slideDown(200);
        }
    });

    $('.go-top-btn').on('click', function (e) {
        e.preventDefault();

        scrollToTop(300);
    });

    /* 캘린더 처리 */
    $('.flatpickr').flatpickr({
        locale: 'ko',
        wrap: true,
        onReady: function (a, b, inst) {
            $(inst.element)
                .find('input')
                .removeAttr('readonly');
        }
    });
});

$.fn.radialBar = function (opt) {
    var elements = this;

    elements.each(function () {
        var el = $(this);

        var options = {
            chart: {
                type: 'radialBar'
            },

            series: [el.data('value') || 10],
            colors: [el.data('color') || '#20E647'],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: '48%'
                    },
                    dataLabels: {
                        show: false
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'vertical',
                    gradientToColors: [el.data('gradi-color') || '#87D4F9'],
                    stops: [0, 100]
                }
            },
            stroke: {
                lineCap: 'round'
            }
        };

        var chart = new ApexCharts(el[0], options);

        chart.render();
    });

    return elements;
};

var Alert = Swal.mixin({
    confirmButtonText: '예',
    cancelButtonText: '아니오'
});

$.alert = function (message, type) {
    return Alert.fire({
        type: type || 'info',
        html: message,
        focusConfirm: false,
        showCloseButton: true,
        confirmButtonText: '확인'
    });
};

$.confirm = function (message, type) {
    return Alert.fire({
        type: type || 'question',
        html: message,
        focusConfirm: false,
        showCloseButton: true,
        showCancelButton: true
    });
};

$.toast = function (message, type) {
    return Alert.fire({
        toast: true,
        position: 'top-end',
        type: type || 'success',
        title: message,
        showConfirmButton: false,
        timer: 3000
    });
};

/**
 * 캘린더 컴포넌트
 * https://flatpickr.js.org/
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : ((global = global || self), factory((global.ko = {})));
})(this, function (exports) {
    'use strict';

    var fp =
        typeof window !== 'undefined' && window.flatpickr !== undefined
            ? window.flatpickr
            : {
                l10ns: {}
            };
    var Korean = {
        weekdays: {
            shorthand: ['일', '월', '화', '수', '목', '금', '토'],
            longhand: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일']
        },
        months: {
            shorthand: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            longhand: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
        },
        ordinal: function () {
            return '일';
        },
        rangeSeparator: ' ~ '
    };
    fp.l10ns.ko = Korean;
    var ko = fp.l10ns;

    exports.Korean = Korean;
    exports.default = ko;

    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

var debounce = function (func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;

    function later() {
        var last = Date.now() - timestamp;

        if (last < wait && last >= 0) {
            timeout = setTimeout(later, wait - last);
        } else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
            }
        }
    }

    var debounced = function () {
        context = this;
        args = arguments;
        timestamp = Date.now();
        var callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }

        return result;
    };

    debounced.clear = function () {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
    };

    debounced.flush = function () {
        if (timeout) {
            result = func.apply(context, args);
            context = args = null;

            clearTimeout(timeout);
            timeout = null;
        }
    };

    return debounced;
};

function scrollToTop(scrollDuration) {
    var scrollStep = -window.scrollY / (scrollDuration / 15),
        scrollInterval = setInterval(function () {
            if (window.scrollY != 0) {
                window.scrollBy(0, scrollStep);
            } else clearInterval(scrollInterval);
        }, 15);
}

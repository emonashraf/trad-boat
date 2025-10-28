(function ($) {
  'use strict';

  //============================ Scroll To Top Js Start ========================
  var btn = $('.scroll-top');

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });
  //============================ Scroll To Top Js End ========================

  //============================ faq js stat ========================

  $(document).ready(function () {
    $('.faq__item.open').find('.faq__body').show();

    $('.faq__item .faq__title, .faq__item .faq__number').on('click', function () {
      const $item = $(this).closest('.faq__item');
      const $body = $item.find('.faq__body');
      const $allItems = $('.faq__item');

      if ($item.hasClass('open')) {
        $body.stop(true).slideUp(300);
        $item.removeClass('open');
        return;
      }

      $allItems.each(function () {
        const $openItem = $(this);
        if ($openItem.hasClass('open')) {
          $openItem.find('.faq__body').stop(true).slideUp(300);
          $openItem.removeClass('open');
        }
      });

      $item.addClass('open');
      $body.stop(true).slideDown(300);
    });
  });
  //============================ faq js end ========================
  // ========================= Service Section Hover Js Start ===============
  $('.use-case__list-item').hover(function () {
    var serviceId = $(this).attr('data-use-case-id');
    $(this).addClass('active').siblings().removeClass('active');
    $('#' + serviceId).removeClass('d-none').siblings().addClass('d-none');
    $('#' + serviceId).addClass('show').siblings().removeClass('show');
  });
  // ========================= Service Section Hover Js End ===================

  // ========================= Header Sticky Js Start ==============
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= 300) {
      $('.header__area').addClass('fixed-header');
    } else {
      $('.header__area').removeClass('fixed-header');
    }
  });
  // ========================= Header Sticky Js End===================

  //============================ Filter Js Start ============================
  $(document).on('click', '.filter__btn', function () {
    $('.filter__main, .overlay').addClass('active');
  });

  $(document).on('click', '.filter__close, .overlay', function () {
    $('.filter__main, .overlay').removeClass('active');
  });

  //============================ Filter Js End ==============================

  // ========================= Range Slider Js Start ===================
  const rangeInput = document.querySelectorAll(".range-input input");
  const priceInput = document.querySelectorAll(".price-input span");
  const progress = document.querySelector(".sliderr .progresss");
  let priceGap = 1000;

  rangeInput.forEach(input => {
    input.addEventListener("input", e => {
      let minValue = parseInt(rangeInput[0].value);
      let maxValue = parseInt(rangeInput[1].value);

      if (maxValue - minValue < priceGap) {
        if (e.target.classList.contains("range-min")) {
          rangeInput[0].value = maxValue - priceGap;
        } else {
          rangeInput[1].value = minValue + priceGap;
        }
      } else {
        priceInput[0].textContent = minValue;
        priceInput[1].textContent = maxValue;
        const maxRange = parseInt(rangeInput[0].max);
        progress.style.left = (minValue / maxRange) * 100 + "%";
        progress.style.right = 100 - (maxValue / maxRange) * 100 + "%";
      }
    });
  });

  // ========================= Range Slider Js End ===================


  //============================ Offcanvas Js Start ============================
  $(document).on('click', '.menu__open', function () {
    $('.offcanvas__area, .overlay').addClass('active');
  });

  $(document).on('click', '.menu__close, .overlay', function () {
    $('.offcanvas__area, .overlay').removeClass('active');
  });

  //============================ Offcanvas Js End ==============================


  // ========================== Add Attribute For Bg Image Js Start =====================
  $('.bg-img').css('background-image', function () {
    var bg = 'url(' + $(this).data('background-image') + ')';
    return bg;
  });
  // ========================== Add Attribute For Bg Image Js End =====================
  // ========================== Add Attribute For Mask Image Js Start =====================
  $(".mask-box").css("mask-image", function () {
    var bg = "url(" + $(this).data("mask") + ")";
    return bg;
  });
  // ========================== Add Attribute For Mask Image Js End =====================


  // ========================= Odometer Js Start ===================
  if ($('.odometer').length > 0) {
    $(window).on('scroll', function () {
      $('.odometer').each(function () {
        if ($(this).isInViewport()) {
          if (!$(this).data('odometer-started')) {
            $(this).data('odometer-started', true);
            this.innerHTML = $(this).data('odometer-final');
          }
        }
      });
    });
  }
  // isInViewport helper function
  $.fn.isInViewport = function () {
    let elementTop = $(this).offset().top;
    let elementBottom = elementTop + $(this).outerHeight();
    let viewportTop = $(window).scrollTop();
    let viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  // ========================= Odometer Js End ===================

  // ========================= Magnific Popup Js Start ===================
  $('.promo__video__play').magnificPopup({
    type: 'iframe',
  });
  // ========================= Magnific Popup Js End ===================
  // ========================= Swiper Js Start ===================
  /* ==============  Popular Activities slide Js =================== */
  var popularActivitiesSwiper = new Swiper(".testimonial__slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 2,
    spaceBetween: 10,
    coverflowEffect: {
      rotate: 30,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".custom-next",
      prevEl: ".custom-prev",
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 24
      },
    }
  });

  /* ============== Popular Activities  Slide Js End =================== */

  // ========================= Swiper Js End ===================
  // ========================= Select2 Js Start =====================
  function startSelect2() {
    $(".select-2").each(function () {
      var $select = $(this);
      var tags = $select.data('tags') === true;
      var noSearch = $select.data('search') === false;

      $select.select2({
        width: '100%',
        containerCssClass: ":all:",
        tags: tags,
        templateResult: resultState,
        templateSelection: formatSelection,
        minimumResultsForSearch: noSearch ? Infinity : 0,
        tokenSeparators: [','],
      });
      $select.on('select2:open', function () {
        $('.select2-search__field').removeClass('form-control').addClass('form--control');
      });
    });

    function resultState(data, container) {
      if (data.element) {
        $(container).addClass($(data.element).attr("class"));
      }
      return data.text;
    }

    function formatSelection(selected) {
      if (Array.isArray(selected)) {
        return selected.map(item => item.text).join(', ');
      }
      return selected.text;
    }
  }

  startSelect2();

  // ========================= Select2 Js End =====================


  // ================== Password Show Hide Js Start ==========
    $(".toggle-password").on("click", function () {
      $(this).toggleClass("fa-eye  fa-eye-slash");
      var input = $($(this).attr("id"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
      } else {
        input.attr("type", "password");
      }
    });
    // =============== Password Show Hide Js End =================

  //============================ Sidebar Js Start ============================
  $(document).on('click', '.sidebar__open', function () {
    $('.dashboard__sidebar, .overlay').addClass('active');
  });

  $(document).on('click', '.sidebar__close, .overlay', function () {
    $('.dashboard__sidebar, .overlay').removeClass('active');
  });

  //============================ Sidebar Js End ==============================



  // ========================= Scroll Reveal Js Start ===================
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1200,
    delay: 100,
    reset: false,
  })
  sr.reveal('.bottom-reveal, .banner__title, .section-heading__title, .pricing, .footer__item', {
    delay: 60,
    interval: 100,
    origin: 'bottom',
  })
  sr.reveal('.banner__desc, .section-heading__desc, .testimonial, .blog__card', {
    delay: 150,
    interval: 100,
    origin: 'bottom',
  })
  sr.reveal('.banner__btns', {
    delay: 200,
    origin: 'bottom',
  })
  sr.reveal('.right-reveal, .faq__thumb-wrap', {
    delay: 60,
    origin: 'right',
  })
  sr.reveal('.left-reveal, .faq__content-wrap', {
    delay: 60,
    interval: 100,
    origin: 'left',
  })
  sr.reveal('.banner__subtitle, .section-heading__name', {
    delay: 60,
    origin: 'top',
  })


  // ========================= Scroll Reveal Js End ===================

  // ========================== Table Data Label Js Start =====================
  if ($('th').length) {
    Array.from(document.querySelectorAll('table')).forEach(table => {
      let heading = table.querySelector('thead') ? table.querySelectorAll('thead tr th') : null;
      Array.from(table.querySelectorAll('tbody tr')).forEach((row) => {
        Array.from(row.querySelectorAll('td')).forEach((column, i) => {
          if (heading && heading[i]) {
            column.setAttribute('data-label', heading[i].innerText);
          }
        });
      });
    });
  }
  // ========================== Table Data Label Js End =====================


  // ========================== Label Required Js Start =====================
  $.each($('input, select, textarea'), function (i, element) {
    if (element.hasAttribute('required')) {
      $(element).closest('.form-group').find('label').first().addClass('required');
    }
  });
  // ========================== Label Required Js End =====================

  // ========================= Apex chart Js Start =====================
  if ($('#profitChart').length) {
    var profitChart = {
      series: [
        {
          name: "Buy",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 100, 55, 40],
          color: 'hsl(var(--danger))'
        },
        {
          name: "Sell",
          data: [5, 46, 20, 64, 45, 88, 23, 46, 65, 50, 150, 30],
          color: 'hsl(var(--success))'
        },
      ],
      chart: {
        height: 362,
        type: 'line',
        zoom: { enabled: false },
        toolbar: { show: false }
      },
      dataLabels: { enabled: false },
      fill: { type: 'solid' },
      markers: {
        size: 5,
        strokeColors: 'inherit',
        strokeWidth: 1,
        fill: '#ffffff',
        hover: { sizeOffset: 1.5 }
      },
      stroke: {
        width: 1.5,
        curve: 'smooth'
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'right',
        fontSize: '14px',
        labels: {
          colors: 'hsl(var(--white))'
        },
        markers: {
          width: 12,
          height: 12,
          radius: 12
        },
        itemMargin: {
          horizontal: 10,
          vertical: 5
        }
      },
      grid: {
        strokeDashArray: 5,
        row: { colors: ['transparent'] }
      },
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: { style: { colors: 'hsl(var(--white))' } }
      },
      yaxis: {
        labels: { style: { colors: 'hsl(var(--white))' } }
      }
    };

    var chart = new ApexCharts(document.querySelector("#profitChart"), profitChart);
    chart.render();
  }
  // chart 2
  if ($('#reportChart').length) {
    var options = {
      series: [20, 30, 15, 20,],
      chart: {
        width: "100%",
        type: 'pie',

      },
      labels: ['Investment', 'Profit', 'Loss', 'Reserve Fund'],
      colors: ['hsl(var(--base))', 'hsl(var(--success)', 'hsl(var(--danger))', 'hsl(var(--info))'],
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '12px'
        }
      },
      legend: {
        position: 'bottom',
        fontSize: '12px',
        markers: { width: 8, height: 8 }
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "% allocation";
          }
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: { width: 200 },
          legend: { position: 'bottom' }
        }
      }]
    };

    var chart = new ApexCharts(document.querySelector("#reportChart"), options);
    chart.render();
  }
  // ========================= Apex chart Js End =====================

  // ========================= Matter Js Start =====================
  if ($('#tradInfo').length) {
    const { Engine, Render, Runner, Bodies, Composite, Events, Body } = Matter;

    const container = document.getElementById('tradInfo');
    const buttons = container.querySelectorAll('.trad-info-badge');
    const rect = container.getBoundingClientRect();
    let engine, world, render;
    let animationStarted = false;

    function startAnimation() {
      if (animationStarted) return;
      animationStarted = true;
      engine = Engine.create();
      world = engine.world;
      engine.world.gravity.y = 1;

      render = Render.create({
        element: container,
        engine: engine,
        options: {
          width: rect.width,
          height: rect.height,
          wireframes: false,
          background: 'transparent'
        }
      });

      Render.run(render);
      Runner.run(Runner.create(), engine);

      const ground = Bodies.rectangle(rect.width / 2, rect.height + 20, rect.width, 40, {
        isStatic: true,
        render: { fillStyle: '#111' }
      });
      Composite.add(world, ground);

      buttons.forEach(btn => {
        const randomX = Math.random() * (rect.width - 130) + 65;
        const randomY = -Math.random() * 300 - 50;

        const body = Bodies.rectangle(randomX, randomY, 130, 45, {
          restitution: 0.9,
          friction: 0.4,
          render: { fillStyle: 'transparent' }
        });

        btn.body = body;
        Composite.add(world, body);
      });

      Events.on(engine, 'afterUpdate', function () {
        buttons.forEach(btn => {
          const body = btn.body;


          const minX = 65;
          const maxX = rect.width - 65;
          if (body.position.x < minX) Body.setPosition(body, { x: minX, y: body.position.y });
          if (body.position.x > maxX) Body.setPosition(body, { x: maxX, y: body.position.y });


          const maxY = rect.height - 22.5;
          if (body.position.y > maxY) Body.setPosition(body, { x: body.position.x, y: maxY });

          btn.style.left = (body.position.x - 65) + 'px';
          btn.style.top = (body.position.y) + 'px';
          btn.style.transform = `rotate(${body.angle}rad)`;
        });
      });
    }


    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) startAnimation();
      });
    }, { threshold: 0.3 });

    observer.observe(container);
  }
  // ========================= Matter Js End =====================

  // ========================= Preloader Js Start =====================
  $(window).on("load", function () {
    $(".preloader").fadeOut();
  })
  // ========================= Preloader Js End=====================

})(jQuery);

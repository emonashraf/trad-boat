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
    slidesPerView: 1,
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
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      1400: {
        slidesPerView: 5,
        spaceBetween: 20
      },
    }
  });

  /* ============== Popular Activities  Slide Js End =================== */

  // ========================= Swiper Js End ===================
  // ========================= Select2 Js Start =====================
  if ($('.select2').length) {
    $('.select2').select2();
  }
  
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

  // ========================= Custom Dropzone Start =====================
  function updatePreview(input, file) {
    var $dropzone = $(input).closest('.custom-dropzone');
    var $preview = $dropzone.find('.dropzone-filed__preview');
    var $closeBtn = $dropzone.find('.dropzone-filed__close');

    $preview.html('').removeClass('active');
    $closeBtn.hide();

    if (file) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var content;
        if (file.type.startsWith('image/')) {
          var img = document.createElement('img');
          img.src = e.target.result;
          content = img;
        } else if (file.type.startsWith('video/')) {
          var video = document.createElement('video');
          video.src = e.target.result;
          video.controls = true;
          content = video;
        }

        $preview.html(content).addClass('active');
        $closeBtn.show();
      };
      reader.readAsDataURL(file);
    }
  }
  $('.custom-dropzone input[type="file"]').on('change', function () {
    updatePreview(this, this.files[0]);
  });
  $('.custom-dropzone').on('click', '.dropzone-filed__close', function () {
    var $dropzone = $(this).closest('.custom-dropzone');
    $dropzone.find('.dropzone-filed__preview').html('').removeClass('active');
    $dropzone.find('input[type="file"]').val('');
    $dropzone.find('input[type="file"].required').prop('required', true);
    $(this).hide();
  });
  $('.dropzone-filed__preview').each(function () {
    if (!$(this).hasClass('active')) {
      $(this).closest('.custom-dropzone').find('.dropzone-filed__close').hide();
    }
  });
  $('.dropzone-filed').on('dragover dragleave drop', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var $dropzone = $(this).closest('.custom-dropzone');
    var $fileInput = $dropzone.find('input[type="file"]');

    if (e.type === 'dragover') {
      $(this).addClass('dragging');
    } else if (e.type === 'dragleave' || e.type === 'drop') {
      $(this).removeClass('dragging');
    }

    if (e.type === 'drop') {
      var files = Array.from(e.originalEvent.dataTransfer.files);
      var accept = $fileInput.attr('accept');
      var acceptedTypes = accept ? accept.split(',').map(type => type.trim()) : [];

      var invalidFiles = files.filter(file => {
        var fileType = file.type;
        var fileName = file.name.toLowerCase();
        return !acceptedTypes.some(type => {
          return (type.startsWith('.') && fileName.endsWith(type)) || fileType === type;
        });
      });

      if (invalidFiles.length > 0) {
        alert('Some files are not allowed. Please check the accepted file types.');
        return;
      }

      if (!$fileInput.prop('multiple') && files.length > 1) {
        alert('This input only allows one file.');
        return;
      }

      var dt = new DataTransfer();
      files.forEach(function (file) {
        dt.items.add(file);
      });
      $fileInput[0].files = dt.files;
      $fileInput.trigger('change');
    }
  });
  $('.custom-dropzone input').each(function () {
    if ($(this).prop('required')) {
      $(this).addClass('required');
    }
    if ($(this).closest('.custom-dropzone').find('.dropzone-filed__preview').hasClass('active')) {
      $(this).prop('required', false);
    }
  });
  // ========================= Custom Dropzone End ==========

  // ========================= Scroll Reveal Js Start ===================
  // const sr = ScrollReveal({
  //   origin: 'top',
  //   distance: '60px',
  //   duration: 1200,
  //   delay: 100,
  //   reset: false,
  // })
  // sr.reveal('.bottom-reveal,  .section-heading__title, .pricing, .footer__item', {
  //   delay: 60,
  //   interval: 100,
  //   origin: 'bottom',
  // })
  // sr.reveal('.banner__desc, .section-heading__desc, .testimonial, .blog__card', {
  //   delay: 150,
  //   interval: 100,
  //   origin: 'bottom',
  // })
  // sr.reveal('.banner__btns', {
  //   delay: 200,
  //   origin: 'bottom',
  // })
  // sr.reveal('.right-reveal, .faq__thumb-wrap', {
  //   delay: 60,
  //   origin: 'right',
  // })
  // sr.reveal('.left-reveal, .faq__content-wrap', {
  //   delay: 60,
  //   interval: 100,
  //   origin: 'left',
  // })
  // sr.reveal('.banner__subtitle, .section-heading__name', {
  //   delay: 60,
  //   origin: 'top',
  // })


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

  // ========================== GSAP Animation START =====================
  gsap.registerPlugin(MotionPathPlugin);
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  // banner title
  const splitTop = new SplitText(".banner__title", { type: "chars" });
  gsap.from(splitTop.chars, {
    duration: 0.5,
    y: -50,
    opacity: 0,
    scale: 0.8,
    stagger: 0.04,
    ease: "back.out(1.7)"
  });


  //--------------smart-solutions__banner Start------------

  const paths = document.querySelectorAll("#motionSvg path");
  const wrapper = document.querySelector(".svg-wrapper");
  const colors = ["hsl(var(--warning))", "hsl(var(--orange))", "hsl(var(--success))", "hsl(var(--danger))", "hsl(var(--info))", "hsl(var(--purple))", "hsl(var(--pink))"];

  paths.forEach((path, i) => {
    const color = colors[i % colors.length];

    // Create dot
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.background = `radial-gradient(circle, ${color}, #00000000)`;
    dot.style.filter = `drop-shadow(0 0 12px ${color})`;
    wrapper.appendChild(dot);

    // Create trail
    const trail = document.createElement("div");
    trail.classList.add("trail");
    trail.style.background = `linear-gradient(90deg, ${color}, transparent)`;
    wrapper.appendChild(trail);

    const duration = 3 + Math.random();


    gsap.to(trail, {
      duration: duration,
      repeat: -1,
      ease: "power2.inOut",
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      },
      scaleX: gsap.utils.wrap([0.2, 1]),
      opacity: 0.4
    });

    // Animate dot
    gsap.to(dot, {
      duration: duration,
      repeat: -1,
      ease: "power2.inOut",
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: true
      }
    });
  });

  gsap.to(".smart-solutions__center", {
    scale: 1.05,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
  //--------------smart-solutions__banner End------------

  //-------------- Work Process Start------------

  const indicators = document.querySelectorAll(".work-process__indicator");
  const bodyColor = getComputedStyle(document.documentElement).getPropertyValue("--body-color").trim();
  const baseColor = getComputedStyle(document.documentElement).getPropertyValue("--base").trim();

  indicators.forEach(indicator => {
    const leftLine = indicator.querySelector(".work-process__indicator-left");
    const rightLine = indicator.querySelector(".work-process__indicator-right");
    const arrow = indicator.querySelector("i");

    leftLine.style.setProperty("--line-width", "0%");
    rightLine.style.setProperty("--line-width", "0%");
    arrow.style.setProperty("--color", bodyColor);
    arrow.style.transformOrigin = "50% 50%";

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    // Left line grow
    tl.to(leftLine, {
      "--line-width": "100%",
      duration: 1,
      ease: "sine.inOut"
    });

    // Arrow color + scale
    tl.to({}, {
      duration: 0.4,
      onStart: () => {
        // Color change
        gsap.to(arrow, {
          duration: 0.4,
          "--color": baseColor,
          ease: "sine.inOut"
        });

        // Scale up
        gsap.to(arrow, {
          duration: 0.4,
          scale: 1.3,
          ease: "sine.inOut",
          yoyo: true,
          repeat: 1
        });
      }
    }, ">");

    // Right line grow
    tl.to(rightLine, {
      "--line-width": "100%",
      duration: 1,
      ease: "sine.inOut"
    }, ">");

    // Reset
    tl.add(() => {
      leftLine.style.setProperty("--line-width", "0%");
      rightLine.style.setProperty("--line-width", "0%");
      arrow.style.setProperty("--color", bodyColor);
      arrow.style.scale = 1;
    }, ">");
  });
  // scroll trigger
  gsap.fromTo(".work-process__wrap",
    { scale: 0.95, opacity: 0.8 },
    {
      scale: 1.05,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".work-process",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.5,
      }
    }
  );
  //-------------- Work Process End ------------

  //-------------- smart-analytics Start ------------
  gsap.set(".smart-analytics", { perspective: 1200 });

function animateCard(card, fromX, rotateY, rotateZ) {
  gsap.fromTo(card,
    {
      x: fromX,
      opacity: 0,
      rotateY: rotateY,
      rotateZ: rotateZ,
      scale: 0.85,
      filter: "blur(8px)",
    },
    {
      x: 0,
      opacity: 1,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        end: "bottom 40%",
        scrub: 1.2,
        toggleActions: "play reverse play reverse",
      },
      onComplete: () => {
        // subtle bounce after entry
        gsap.fromTo(card, 
          { scale: 1 }, 
          { scale: 1.03, duration: 0.3, yoyo: true, repeat: 1, ease: "power1.inOut" }
        );
      }
    }
  );
}


gsap.utils.toArray(".left-card").forEach(card => {
  animateCard(card, -400, -70, -15);
});

gsap.utils.toArray(".right-card").forEach(card => {
  animateCard(card, 400, 70, 15);
});

gsap.fromTo(".profit-cart",
  {
    y: 250,
    opacity: 0,
    scale: 0.85,
    filter: "blur(8px)",
  },
  {
    y: 0,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    duration: 1.8,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".profit-cart",
      start: "top 85%",
      toggleActions: "play none none none", 
    }
  }
);
//-------------- smart-analytics End ------------


//-------------- Trad Card STart ------------
const cards = gsap.utils.toArray(".trad__card");
const isDesktop = window.matchMedia("(min-width: 768px)").matches;

cards.forEach((card, i) => {
  const pos = i % 3; // 0 = left, 1 = center, 2 = right
  let startX = 0, startRotate = 0;

  if (pos === 0) {
    startX = -300;
    startRotate = -20;
  } else if (pos === 2) {
    startX = 300;
    startRotate = 20;
  }

  gsap.fromTo(card,
    { opacity: 0, x: startX, rotate: startRotate },
    {
      opacity: 1,
      x: 0,
      rotate: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: card,
        start: "top 85%",
        toggleActions: "play none none reverse"
      }
    }
  );
});


if (isDesktop) {
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { 
        scale: 1.1, 
        duration: 0.1,    // faster zoom
        ease: "power3.out" // snappier easing
      });
      cards.forEach(other => {
        if (other !== card)
          gsap.to(other, { filter: "blur(3px)", scale: 1, duration: 0.1 });
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { 
        scale: 1, 
        duration: 0.1, 
        ease: "power3.out" 
      });
      cards.forEach(other => {
        if (other !== card)
          gsap.to(other, { filter: "blur(0px)", scale: 1, duration: 0.1 });
      });
    });
  });
}
//-------------- Trad Card End ------------

//-------------- Features Card Start ------------
  gsap.registerPlugin(ScrollTrigger);

  const rows = gsap.utils.toArray(".row.justify-content-center");

  rows.forEach(row => {
    const cards = row.querySelectorAll(".features__card");

    gsap.fromTo(cards,
      {
        opacity: 0,
        y: 50,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.4,   // bigger stagger for sequential reveal
        scrollTrigger: {
          trigger: row,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  });
//-------------- Features Card End ------------

//-------------- Faq Start ------------
// Left side heading + text
  gsap.from(".faq .col-xl-6:first-child", {
    opacity: 0,
    x: -300,          // left বাইরে থেকে আসবে
    duration: 1.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".faq",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });

  // Right side accordion items
  const accordionItems = gsap.utils.toArray(".faq .accordion-item");
  accordionItems.forEach((item, i) => {
    gsap.from(item, {
      opacity: 0,
      x: 300,          // right বাইরে থেকে আসবে
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      delay: i * 0.2    // staggered
    });
  });
 

//-------------- Faq End ------------
//-------------- Blog Start-------



    const section = document.querySelector('.blog.section-bg-2');

    const blogCard = section.querySelectorAll('.blog__card'); 

    if (section && blogCard.length >= 3) {
        
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top 80%",   
              
                toggleActions: "play none none none"
            }
        });

  
        tl.from(blogCard[0], {
           
            x: '100vw', 
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        }, 0); 
        
        // 2. ডানের কার্ড (blogCard[2])
        tl.from(blogCard[2], {
            x: '-100vw', // পরীক্ষামূলকভাবে বড় মান সেট করা হলো
            opacity: 0,
            duration: 1.2,
            ease: "power3.out"
        }, 0); 
        
        // 3. মাঝের কার্ড (blogCard[1]) - জুম ইন অ্যানিমেশন
        tl.from(blogCard[1], {
             scale: 0.9,
             opacity: 0.8,
             duration: 1.2,
             ease: "power3.out"
        }, 0.2); 

    }
//-------------- Blog End -------

  // ========================== GSAP Animation End =====================


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
        toolbar: { show: false },
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
        labels: {
          style: {
            colors: 'hsl(var(--white))',
            fontSize: '13px'
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: 'hsl(var(--white))',
            fontSize: '13px'
          }
        }
      },

      // ✅ Responsive
      responsive: [
        {
          breakpoint: 1200,
          options: {
            chart: { height: 350 },
            legend: { fontSize: '13px' },
            xaxis: { labels: { style: { fontSize: '12px' } } },
            markers: { size: 4.5 }
          }
        },
        {
          breakpoint: 992,
          options: {
            chart: { height: 320 },
            legend: {
              position: 'bottom',
              horizontalAlign: 'center',
              fontSize: '12px'
            },
            xaxis: { labels: { style: { fontSize: '12px' } } },
            markers: { size: 4 }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: { height: 300 },
            legend: { fontSize: '12px' },
            xaxis: { labels: { style: { fontSize: '12px' } } },
            markers: { size: 3.5 }
          }
        },
        {
          breakpoint: 576,
          options: {
            chart: { height: 280 },
            legend: { fontSize: '12px' },
            xaxis: { labels: { style: { fontSize: '10px' } } },
            markers: { size: 3 }
          }
        }
      ]
    };

    var chart = new ApexCharts(document.querySelector("#profitChart"), profitChart);
    chart.render();
  }
  // chart 2
  if ($('#reportChart').length) {
    var options = {
      series: [20, 30, 15, 20],
      chart: {
        type: 'pie',
        width: "100%",
        height: "270",
      },
      labels: ['Investment', 'Profit', 'Loss', 'Reserve Fund'],
      colors: [
        'hsl(var(--base))',
        'hsl(var(--success))',
        'hsl(var(--danger))',
        'hsl(var(--info))'
      ],
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
      // 🔹 Responsive breakpoints
      responsive: [
        {
          breakpoint: 1500,
          options: {
            chart: { height: 250 },
            legend: { fontSize: 13 },
            xaxis: { labels: { style: { fontSize: 12 } } },
            yaxis: { labels: { style: { fontSize: 12 } } }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: { width: "100%" },
            legend: { position: 'bottom' },
            dataLabels: { style: { fontSize: '11px' } }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: { width: "100%" },
            legend: { fontSize: '10px' },
            dataLabels: { style: { fontSize: '10px' } }
          }
        },
        {
          breakpoint: 480,
          options: {
            chart: { width: "100%" },
            legend: { position: 'bottom', fontSize: '9px' },
            dataLabels: { style: { fontSize: '9px' } }
          }
        }
      ]
    };

    var chart = new ApexCharts(document.querySelector("#reportChart"), options);
    chart.render();
  }
  // overall Report chart
  if ($('#overallReportsChart').length) {
    var options = {
      series: [{
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58]
      }, {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105]
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      colors: ['hsl(var(--white)/ 0.2)', 'hsl(var(--base))'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '40%',
          borderRadius: 5,
          borderRadiusApplication: 'end'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      grid: {
        borderColor: 'hsl(var(--white)/ 0.1)',
        strokeDashArray: 3,
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        labels: {
          style: {
            colors: 'hsl(var(--white))',
          }
        },
        axisBorder: {
          color: 'hsl(var(--white)/ 0.2)'
        },
        axisTicks: {
          color: 'hsl(var(--white)/ 0.2)'
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: 'hsl(var(--white))'
          }
        }
      },
      legend: {
        labels: {
          colors: 'hsl(var(--white))'
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands"
          }
        }
      }
    };

    var chart = new ApexCharts(document.querySelector("#overallReportsChart"), options);
    chart.render();
  }


  // ========================= Apex chart Js End =====================

  // ========================= Matter Js Start =====================
  if ($('#tradInfo').length) {
    const { Engine, Render, Runner, Bodies, Composite, Events, Body } = Matter;

    const container = document.getElementById('tradInfo');
    const buttons = container.querySelectorAll('.trad-info-badge');
    let rect = container.getBoundingClientRect();
    let engine, world, render;
    let animationStarted = false;

    function startAnimation() {
      if (animationStarted) return;
      animationStarted = true;

      // Create engine
      engine = Engine.create();
      world = engine.world;
      engine.world.gravity.y = 1;

      // Render setup
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

      // Ground setup
      const ground = Bodies.rectangle(rect.width / 2, rect.height + 20, rect.width, 40, {
        isStatic: true,
        render: { fillStyle: 'transparent' }
      });
      Composite.add(world, ground);

      // Create falling badges (center zone)
      buttons.forEach(btn => {
        const centerStart = rect.width * 0.25;
        const centerEnd = rect.width * 0.75;
        const randomX = Math.random() * (centerEnd - centerStart) + centerStart;
        const randomY = -Math.random() * 300 - 50;

        const badgeWidth = 130;
        const badgeHeight = 45;

        const body = Bodies.rectangle(randomX, randomY, badgeWidth, badgeHeight, {
          restitution: 0.9,
          friction: 0.4,
          render: { fillStyle: 'transparent' }
        });

        btn.body = body;
        Composite.add(world, body);
      });

      // Update DOM badge positions
      Events.on(engine, 'afterUpdate', function () {
        buttons.forEach(btn => {
          const body = btn.body;

          const badgeWidth = 130;
          const minX = badgeWidth / 2;
          const maxX = rect.width - badgeWidth / 2;
          const maxY = rect.height - 22.5;

          if (body.position.x < minX) Body.setPosition(body, { x: minX, y: body.position.y });
          if (body.position.x > maxX) Body.setPosition(body, { x: maxX, y: body.position.y });
          if (body.position.y > maxY) Body.setPosition(body, { x: body.position.x, y: maxY });

          btn.style.left = (body.position.x - badgeWidth / 2) + 'px';
          btn.style.top = body.position.y + 'px';
          btn.style.transform = `rotate(${body.angle}rad)`;
        });
      });
    }

    // ✅ Responsive resize handler
    function handleResize() {
      rect = container.getBoundingClientRect();

      if (render) {
        render.canvas.width = rect.width;
        render.canvas.height = rect.height;
      }

      // Update ground position dynamically
      if (world && world.bodies.length > 0) {
        const ground = world.bodies[0];
        Body.setPosition(ground, { x: rect.width / 2, y: rect.height + 20 });
        Body.setVertices(ground, [
          { x: 0, y: rect.height },
          { x: rect.width, y: rect.height },
          { x: rect.width, y: rect.height + 40 },
          { x: 0, y: rect.height + 40 }
        ]);
      }
    }

    window.addEventListener('resize', handleResize);

    // Observer to start animation when visible
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

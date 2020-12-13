$(document).ready(function () {
  $(".hamburger").click(function (e) {
    e.stopPropagation();
    $(".menu").animate({ left: "0px" }, 200);
  });

  $("#hidenav").click(function (e) {
    $(".menu").animate({ left: "-320px" }, 200);
  });
  $("#hidenav2").click(function (e) {
    $(".menu").animate({ left: "-320px" }, 200);
  });
  
  $(".om1").click(function () {
    $(".menu ul .om1css").toggleClass("show1");
  });
  $(".om2").click(function () {
    $(".menu ul .om2css").toggleClass("show2");
  });
  $(".om3").click(function () {
    $(".menu ul .om3css").toggleClass("show3");
  });
  $(".om4").click(function () {
    $(".menu ul .om4css").toggleClass("show4");
  });
  $(".om5").click(function () {
    $(".menu ul .om5css").toggleClass("show5");
  });
  $(".om6").click(function () {
    $(".menu ul .om6css").toggleClass("show6");
  });
  $(".om7").click(function () {
    $(".menu ul .om7css").toggleClass("show7");
  });
  $(".om8").click(function () {
    $(".menu ul .om8css").toggleClass("show8");
  });
  $(".om9").click(function () {
    $(".menu ul .om9css").toggleClass("show9");
  });
  
  $(".menu ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});
// 'use strict';

// import $ from 'jquery';
// import 'bootstrap';

$(document).ready(function () {
  $(".footnote-link").on("click", function () {
    var fnNumber = $(this).data("footnote");
    var fnText = $("#fn" + fnNumber).html();

    $("#myFootnoteNumber").html(fnNumber);
    $("#myFootnoteText").html(fnText);
    $("#myFootnoteModal").modal("show");
  });
});

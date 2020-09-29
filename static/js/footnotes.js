// 'use strict';

// import $ from 'jquery';
// import 'bootstrap';

$(document).ready(function () {
  $(".footnote-link").on("click", function () {
    let fnNumber = $(this).data("footnote");
    let fnText = $("#fn" + fnNumber).html();

    $("#myFootnoteNumber").html(fnNumber);
    $("#myFootnoteText").html(fnText);
    $("#myFootnoteModal").modal("show");
  });
});

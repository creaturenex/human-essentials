/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import "trix"
import "@rails/actiontext"
import Highcharts from 'highcharts';
require("highcharts/modules/data")(Highcharts)
require("highcharts/modules/exporting")(Highcharts)
require("highcharts/modules/offline-exporting")(Highcharts)
require("highcharts/modules/map")(Highcharts)
window.Highcharts = Highcharts;

import "stylesheets/application.scss"

import {DateTime} from "luxon";
import Litepicker from 'litepicker';
import 'litepicker/dist/plugins/ranges';
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "@fortawesome/fontawesome-free/css/solid.css";
import "@fortawesome/fontawesome-free/css/regular.css";
import "@fortawesome/fontawesome-free/css/brands.css";
import "@fortawesome/fontawesome-free/css/v4-shims.css";

document.addEventListener("DOMContentLoaded", function() {
    const rangeElement = document.getElementById("filters_date_range");
    if (!rangeElement) {
      return;
    }

    const today = DateTime.now();
    const startDate = new Date(rangeElement.dataset["initialStartDate"]);
    const endDate = new Date(rangeElement.dataset["initialEndDate"]);

    const picker = new Litepicker({
      element: rangeElement,
      plugins: ['ranges'],
      startDate: startDate,
      endDate: endDate,
      format: "MMMM D, YYYY",
      ranges: {
        customRanges: {
          'All Time': [today.minus({ 'years': 100}).toJSDate(), today.toJSDate()],
          'Today': [today.toJSDate(), today.toJSDate()],
          'Yesterday': [today.minus({'days': 1}).toJSDate(), today.minus({'days': 1}).toJSDate()],
          'Last 7 Days': [today.minus({'days': 7}).toJSDate(), today.toJSDate()],
          'Last 30 Days': [today.minus({'days': 29}).toJSDate(), today.toJSDate()],
          'This Month': [today.startOf('month').toJSDate(), today.endOf('month').toJSDate()],
          'Last Month': [today.minus({'months': 1}).startOf('month').toJSDate(),
            today.minus({'month': 1}).endOf('month').toJSDate()],
          'This Year': [today.startOf('year').toJSDate(), today.endOf('year').toJSDate()]
        }
      }
    });
    picker.setDateRange(startDate, endDate);
}, false);

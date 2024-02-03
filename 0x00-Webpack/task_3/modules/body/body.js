import "./body.css";
import $ from "jquery";
import _ from "lodash";

$( function() {
  $("body").append("<p>Dashboard data for the students</p>");
  $("body").append("<button><span>Click here to get started<span></button>");
  $("body").append("<p id='count'></p>");

  let count = 0;
  function updateCounter() {
    count++;
    $("#count").text(`${count} clicks on the button`);
  }

  const debouncedUpdateCounter = _.debounce(updateCounter, 500);

  $("button").on("click", debouncedUpdateCounter);

});

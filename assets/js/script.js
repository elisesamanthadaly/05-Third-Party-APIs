function refreshPlanner() {
    now = moment();
    nineAM = moment("09:00:00", "hh:mm:ss");
    tenAM = moment("10:00:00", "hh:mm:ss");
    elevenAM = moment("11:00:00", "hh:mm:ss");
    twelvePM = moment("12:00:00", "hh:mm:ss");
    onePM = moment("13:00:00", "hh:mm:ss");
    twoPM = moment("14:00:00", "hh:mm:ss");
    threePM = moment("15:00:00", "hh:mm:ss");
    fourPM = moment("16:00:00", "hh:mm:ss");
    fivePM = moment("17:00:00", "hh:mm:ss");
    sixPM = moment("18:00:00", "hh:mm:ss");

    // Displays current day at top of planner
    $("#currentDay").text(now.format("dddd, MMMM Do"));

    // Colors future timeblocks green
    if (now.isBefore(nineAM)) {
        $("#9AM").addClass("future");
    }
    if (now.isBefore(tenAM)) {
        $("#10AM").addClass("future");
    }
    if (now.isBefore(elevenAM)) {
        $("#11AM").addClass("future");
    }
    if (now.isBefore(twelvePM)) {
        $("#12PM").addClass("future");
    }
    if (now.isBefore(onePM)) {
        $("#1PM").addClass("future");
    }
    if (now.isBefore(twoPM)) {
        $("#2PM").addClass("future");
    }
    if (now.isBefore(threePM)) {
        $("#3PM").addClass("future");
    }
    if (now.isBefore(fourPM)) {
        $("#4PM").addClass("future");
    }
    if (now.isBefore(fivePM)) {
        $("#5PM").addClass("future");
    }

    // Colors present timeblock red
    if (now.isBetween(nineAM, tenAM)) {
        $("#9AM").removeClass("future");
        $("#9AM").addClass("present");
    }
    if (now.isBetween(tenAM, elevenAM)) {
        $("#9AM").removeClass("present");
        $("#10AM").removeClass("future");
        $("#10AM").addClass("present");
    }
    if (now.isBetween(elevenAM, twelvePM)) {
        $("#10AM").removeClass("present");
        $("#11AM").removeClass("future");
        $("#11AM").addClass("present");
    }
    if (now.isBetween(twelvePM, onePM)) {
        $("#11AM").removeClass("present");
        $("#12PM").removeClass("future");
        $("#12PM").addClass("present");
    }
    if (now.isBetween(onePM, twoPM)) {
        $("#12PM").removeClass("present");
        $("#1PM").removeClass("future");
        $("#1PM").addClass("present");
    }
    if (now.isBetween(twoPM, threePM)) {
        $("#1PM").removeClass("present");
        $("#2PM").removeClass("future");
        $("#2PM").addClass("present");
    }
    if (now.isBetween(threePM, fourPM)) {
        $("#2PM").removeClass("present");
        $("#3PM").removeClass("future");
        $("#3PM").addClass("present");
    }
    if (now.isBetween(fourPM, fivePM)) {
        $("#3PM").removeClass("present");
        $("#4PM").removeClass("future");
        $("#4PM").addClass("present");
    }
    if (now.isBetween(fivePM, sixPM)) {
        $("#4PM").removeClass("present");
        $("#5PM").removeClass("future");
        $("#5PM").addClass("present");
    }
    if (now.isAfter(sixPM)) {
        $("#5PM").removeClass("present");
    }

    // Retrieves and renders saved planner entries
    stored9AM = JSON.parse(localStorage.getItem("9AM"));
    $("#9AM").val(stored9AM);
    stored10AM = JSON.parse(localStorage.getItem("10AM"));
    $("#10AM").val(stored10AM);
    stored11AM = JSON.parse(localStorage.getItem("11AM"));
    $("#11AM").val(stored11AM);
    stored12PM = JSON.parse(localStorage.getItem("12PM"));
    $("#12PM").val(stored12PM);
    stored1PM = JSON.parse(localStorage.getItem("1PM"));
    $("#1PM").val(stored1PM);
    stored2PM = JSON.parse(localStorage.getItem("2PM"));
    $("#2PM").val(stored2PM);
    stored3PM = JSON.parse(localStorage.getItem("3PM"));
    $("#3PM").val(stored3PM);
    stored4PM = JSON.parse(localStorage.getItem("4PM"));
    $("#4PM").val(stored4PM);
    stored5PM = JSON.parse(localStorage.getItem("5PM"));
    $("#5PM").val(stored5PM);
}

// Click lock buttons to save adjacent planner entry
$("#9AMBtn").click(function() {
    nineAMInput = $("#9AM").val();
    localStorage.setItem("9AM", JSON.stringify(nineAMInput));
});
$("#10AMBtn").click(function() {
    tenAMInput = $("#10AM").val();
    localStorage.setItem("10AM", JSON.stringify(tenAMInput));
});
$("#11AMBtn").click(function() {
    elevenAMInput = $("#11AM").val();
    localStorage.setItem("11AM", JSON.stringify(elevenAMInput));
});
$("#12PMBtn").click(function() {
    twelvePMInput = $("#12PM").val();
    localStorage.setItem("12PM", JSON.stringify(twelvePMInput));
});
$("#1PMBtn").click(function() {
    onePMInput = $("#1PM").val();
    localStorage.setItem("1PM", JSON.stringify(onePMInput));
});
$("#2PMBtn").click(function() {
    twoPMInput = $("#2PM").val();
    localStorage.setItem("2PM", JSON.stringify(twoPMInput));
});
$("#3PMBtn").click(function() {
    threePMInput = $("#3PM").val();
    localStorage.setItem("3PM", JSON.stringify(threePMInput));
});
$("#4PMBtn").click(function() {
    fourPMInput = $("#4PM").val();
    localStorage.setItem("4PM", JSON.stringify(fourPMInput));
});
$("#5PMBtn").click(function() {
    fivePMInput = $("#5PM").val();
    localStorage.setItem("5PM", JSON.stringify(fivePMInput));
});

// Initial planner render
refreshPlanner();

// Refreshes planner every 5 minutes
setInterval(refreshPlanner, 300000);
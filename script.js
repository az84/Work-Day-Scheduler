
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

var currentTime = moment();
currentTime = currentTime.startOf("hour");

var beforeTime = moment().startOf('day').add(9, "hours");

// Time blocks

var time1 = beforeTime.add(0, "h");

time1 = time1.format('hh:mm A');

$(".group1").text(time1);

var time2 = beforeTime.add(1, "h");
time2 = time2.format('hh:mm A');

$(".group2").text(time2);

var time3 = beforeTime.add(1, "h");
time3 = time3.format('hh:mm A');

$(".group3").text(time3);

var time4 = beforeTime.add(1, "h");
time4 = time4.format('hh:mm A');

$(".group4").text(time4);

var time5 = beforeTime.add(1, "h");
time5 = time5.format('hh:mm A');

$(".group5").text(time5);

var time6 = beforeTime.add(1, "h");
time6 = time6.format('hh:mm A');

$(".group6").text(time6);

var time7 = beforeTime.add(1, "h");
time7 = time7.format('hh:mm A');

$(".group7").text(time7);

var time8 = beforeTime.add(1, "h");
time8 = time8.format('hh:mm A');

$(".group8").text(time8);

var time9 = beforeTime.add(1, "h");
time9 = time9.format('hh:mm A');

$(".group9").text(time9);


function timeWorks() {
    
    time1 = moment().startOf('day').add(9, "hours");
   
    currentTime = currentTime.startOf("hour");
 
    if (currentTime.isAfter(time1)) {
        $(".text9").addClass("past");
    }
    else if (currentTime.isBefore(time1)) {
        $(".text9").addClass("future");
    }
    else if (currentTime.isSame(time1)) {
        $(".text9").addClass("present");
    };
   
    time2 = moment().startOf('day').add(10, "hours");
    
    if (currentTime.isAfter(time2)) {
        $(".text10").addClass("past");
    }
    else if (currentTime.isBefore(time2)) {
        $(".text10").addClass("future");
    }
    else if (currentTime.isSame(time2)) {
        $(".text10").addClass("present");
    };
    
    time3 = moment().startOf('day').add(11, "hours");
    
    if (currentTime.isAfter(time3)) {
        $(".text11").addClass("past");
    }
    else if (currentTime.isBefore(time3)) {
        $(".text11").addClass("future");
    }
    else if (currentTime.isSame(time3)) {
        $(".text11").addClass("present");
    };
    
    time4 = moment().startOf('day').add(12, "hours");
 
    if (currentTime.isAfter(time4)) {
        $(".text12").addClass("past");
    }
    else if (currentTime.isBefore(time4)) {
        $(".text12").addClass("future");
    }
    else if (currentTime.isSame(time4)) {
        $(".text12").addClass("present");
    };
    
    time5 = moment().startOf('day').add(13, "hours");
   
    if (currentTime.isAfter(time5)) {
        $(".text1").addClass("past");
    }
    else if (currentTime.isBefore(time5)) {
        $(".text1").addClass("future");
    }
    else if (currentTime.isSame(time5)) {
        $(".text1").addClass("present");
    };
   
    time6 = moment().startOf('day').add(14, "hours");
   
    if (currentTime.isAfter(time6)) {
        $(".text2").addClass("past");
    }
    else if (currentTime.isBefore(time6)) {
        $(".text2").addClass("future");
    }
    else if (currentTime.isSame(time6)) {
        $(".text2").addClass("present");
    };
  
    time7 = moment().startOf('day').add(15, "hours");
  
    if (currentTime.isAfter(time7)) {
        $(".text3").addClass("past");
    }
    else if (currentTime.isBefore(time7)) {
        $(".text3").addClass("future");
    }
    else if (currentTime.isSame(time7)) {
        $(".text3").addClass("present");
    };
 
    time8 = moment().startOf('day').add(16, "hours");
   
    if (currentTime.isAfter(time8)) {
        $(".text4").addClass("past");
    }
    else if (currentTime.isBefore(time8)) {
        $(".text4").addClass("future");
    }
    else if (currentTime.isSame(time8)) {
        $(".text4").addClass("present");
    };

    time9 = moment().startOf('day').add(17, "hours");
    
    if (currentTime.isAfter(time9)) {
        $(".text5").addClass("past");
    }
    else if (currentTime.isBefore(time9)) {
        $(".text5").addClass("future");
    }
    else if (currentTime.isSame(time9)) {
        $(".text5").addClass("present");
    };
}
timeWorks();

var planner = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (var i = 0; i < planner.length; i++) {
    var dataHour = localStorage.getItem(planner[i]);
  
    $(".text" + planner[i]).val(dataHour);
}
// Saving to local storage
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var storage = $(this).siblings(".form-control").val();
    
    var listItem = $(this).parent().data("hour");

    localStorage.setItem(listItem, storage);
});
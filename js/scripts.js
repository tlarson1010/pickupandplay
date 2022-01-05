
// index.html scripts
$(function() {
    $(document).ready(function(){
        $("#scoreboardButton").click(function(){
            $("#scoreboardModal").modal("toggle");
        });
        console.log(localStorage.getItem("totalTime"));
        // $("#loginButton").click(function(){
        //     $("#loginModal").modal("toggle");
        // });
    });

    $("#timeButton").click(function(){
        if($("#timeLabel").hasClass("active")){
            console.log("timed game");
            $("#totalTimeDiv").removeClass("d-none");
            $("#targetScoreDiv").addClass("d-none");
            localStorage.setItem("timed", "true");
            localStorage.setItem("score", "false");
        }
    });

    $("#scoreButton").click(function(){
        if($("#scoreLabel").hasClass("active")){
            console.log("score game");
            $("#totalTimeDiv").addClass("d-none");
            $("#targetScoreDiv").removeClass("d-none");
            localStorage.setItem("score", "true");
            localStorage.setItem("timed", "false");
        }
    });

    $("#numPlayers").change(function(){
        localStorage.setItem("numPlayers", $("#numPlayers").val());
    });

    $("#totalTime").change(function(){
        localStorage.setItem("totalTime", $("#totalTime").val());
    });

    $("#targetScore").change(function(){
        localStorage.setItem("targetScore", $("#targetScore").val());
    });

});

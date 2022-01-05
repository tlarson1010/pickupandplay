let addP1PointsBtn = document.querySelector("#addP1Points");
const team1PointsTD = document.querySelector("#team1Player1Points");

addP1PointsBtn.addEventListener("click", () => addP1Points());
function addP1Points() {

    var matches = team1PointsTD.innerHTML.match(/(\d+)/);
    console.log(matches[0]);
    console.log(matches.length);
    var string2Int = parseInt(matches[0]);
    team1PointsTD.innerHTML = "<button class=\"btn btn-secondary btn-sm\">-</button>" + (string2Int + 2).toString() +"<button class=\"btn btn-primary btn-sm\" id=\"addP1Points\">+</button>"
    addP1PointsBtn = document.querySelector("#addP1Points");
    console.log("my name is");
}

$(function() {
    $(document).ready(function(){
        console.log(localStorage.getItem("numPlayers") + "after dom update");
       
        if(localStorage.getItem("timed") == "true") {
            console.log("made it here timed");
            document.getElementById("listScore").innerHTML = "Length of Game: " + localStorage.getItem("totalTime") + " minutes.";
        }
        else if(localStorage.getItem("score") == "true") {
            console.log("made it here score");
            document.getElementById("listTime").innerHTML = "Target Score: " + localStorage.getItem("targetScore");
        }
        
        switch(localStorage.getItem("numPlayers")) {
            case "4":
                break;
            case "10":
                console.log("made it in the switch")
                $("#team1Player5").removeClass("d-none");
                $("#team2Player5").removeClass("d-none");
            case "8":
                console.log("remove number two");
                $("#team1Player4").removeClass("d-none");
                $("#team2Player4").removeClass("d-none");
            case "6":
                console.log("remove number three");
                $("#team1Player3").removeClass("d-none");
                $("#team2Player3").removeClass("d-none");
                break;
        }
        
    });


    
    

});


// stuff and stuff. Use it if you want, it's not bad


var song = ["kxopViU98Xo", "dQw4w9WgXcQ", "feA64wXhbjo", "68ugkg9RePc", "tGcikUhQAG8", "WRmBChQjZPs", "SswdHwQu2wU", "y6120QOlsfU", "UcRtFYAz2Yo", "gWBG1j_flrg", "s-UFPhz2nZ0"];
var random = Math.floor(Math.random() * (song.length));
var player;
var video;
window.onload = function () {
    if(typeof getUrlVars()['song'] !== "undefined") {
        video = song[getUrlVars()['song']];
    }
    else {
        video = song[random];
    }
    player = new YT.Player('player', {
        height: '100%',
        width: '100%',
        videoId: video,
        controls: 0,
        loop: 1,
        iv_load_policy: 3,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
          }
        });

      };
function onPlayerReady(event) {
        event.target.playVideo();
      }
      
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        if(getUrlVars()['song'] !== "") {
            event.target.playVideo();
        }
        else {
            random = Math.floor(Math.random() * (song.length));
            player.loadVideoById(song[random]);
        }
    }
}

// From: https://html-online.com/articles/get-url-parameters-javascript/
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
function songs() {
    document.getElementById("main").style = "display: none;";
    document.getElementById("main2").style = "";
}
function songsOff() {
    document.getElementById("main").style = "";
    document.getElementById("main2").style = "display: none;";
}

//Ree
function projects() {
    document.getElementById("main").style = "display: none;";
    document.getElementById("main3").style = "";
}
function projectsOff() {
    document.getElementById("main").style = "";
    document.getElementById("main3").style = "display: none;";
}



function about() {
    document.getElementById("main").style = "display: none;";
    document.getElementById("main4").style = "";
}
function aboutOff() {
    document.getElementById("main").style = "";
    document.getElementById("main4").style = "display: none;";
}
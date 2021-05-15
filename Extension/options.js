const textarea = document.getElementById("textarea");
const save = document.getElementById("save");
const clockInput = document.getElementById("alarm");
const checkBoxReddit = document.getElementById("redditCheck");
const checkYouTube = document.getElementById("youTubeCheck");
const checkFaceBook = document.getElementById("faceBookCheck");
const checkInsta = document.getElementById("instaCheck");
const checkTwitter = document.getElementById("twitterCheck");
const checkSaveStop = document.getElementById("saveStop");
const checkSaveAlarm = document.getElementById("saveAlarm");
const checkbox = document.getElementById("checkbox");
const alarmBox = document.getElementById("alarm");
const noneTime = document.getElementById("none");
const threeTime = document.getElementById("three");
const fiveTime = document.getElementById("five");
const tenTime = document.getElementById("ten");
const fifteenTime = document.getElementById("fifteen");
const thirtyTime = document.getElementById("thirty");
const fourtyFiveTime = document.getElementById("fourtyFive");
const oneHourtTime = document.getElementById("oneHourt");
const oneHourFifteenTime = document.getElementById("oneHourFifteen");
const oneHourThirtyTime = document.getElementById("oneHourThirty");
const oneHourtFourtyTime = document.getElementById("oneHourtFourty");
const twoHourTime = document.getElementById("twoHour");
const twoHourFifteenTime = document.getElementById("twoHourFifteen");
const twoHourThirtyTime = document.getElementById("twoHourThirty");
const twoHourFourtyTime = document.getElementById("twoHourFourtyFive");
const threeHour = document.getElementById("threeHour");
const StopClear = document.getElementById("saveClear");

var stopWatchTime;
var continuing = true; 
var continuingStop = true;
var audio = new Audio('audio_file.mp3');

var twitterBlocked = false;

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function alarmFunction(alarmHours, alarmMinutes)
{
    var timeNewAlarm = new Date();
    currentMinutes = timeNewAlarm.getMinutes();
    currentHours = timeNewAlarm.getHours();
    // alert(currentMinutes);
    // alert(currentHours);
    if (alarmHours == currentHours && currentMinutes == alarmMinutes)
    {
      //alert("DONE");
      continuing = false;
      return;
    }
    sleep(15000);
}

function stopWatchFunction(pastTime, stopWatchTime)
{
    var newTime = new Date();
    currentTime = newTime.getTime();
    if (currentTime > pastTime + stopWatchTime)
    {
      continuingStop = false;
      return;
    }
    sleep(15000);
}


save.addEventListener("click", () => {
  const blocked = textarea.value.split("\n").map(s => s.trim()).filter(Boolean);
  if (checkTwitter.checked)
  {
    blocked.push("twitter.com");
  }
  if (checkBoxReddit.checked)
  {
    blocked.push("reddit.com");
  }
  if (checkInsta.checked)
  {
    blocked.push("instagram.com");
  }
  if (checkYouTube.checked)
  {
    blocked.push("youtube.com");
  }
  if (checkFaceBook.checked)
  {
    blocked.push("Facebook.com");
  }
  if (checkSaveStop.disabled && checkbox.checked)
  {
    if (none.checked)
    {
      stopWatchTime = 0; 
      chrome.storage.local.set({ blocked });   
    }

    else if (threeTime.checked)
    {
      stopWatchTime = 180000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }

    else if (fiveTime.checked)
    {
      stopWatchTime = 300000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }

    else if (ten.checked)
    {
      stopWatchTime = 600000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }

    else if (fifteenTime.checked)
    {
      stopWatchTime = 900000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }

    else if (thirtyTime.checked)
    {
      stopWatchTime = 1800000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }

    else if (fourtyFiveTime.checked)
    {
      stopWatchTime = 2700000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }

    else if (oneHourtTime.checked)
    {
      stopWatchTime = 3600000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }

    else if (oneHourFifteenTime.checked)
    {
      stopWatchTime = 4500000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }

    else if (oneHourThirtyTime.checked)
    {
      stopWatchTime = 5400000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }

    else if (oneHourtFourtyTime.checked)
    {
      stopWatchTime = 6300000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }

    else if (twoHourTime.checked)
    {
      stopWatchTime = 7200000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }

    else if (twoHourFifteenTime.checked)
    {
      stopWatchTime = 8100000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }

    else if (twoHourThirtyTime.checked)
    {
      stopWatchTime = 9000000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }

    else if (twoHourFourtyTime.checked)
    {
      stopWatchTime = 9900000;
      var timePrior = new Date();
      pastTime = timePrior.getTime();  
      while (continuingStop == true)
      {
        stopWatchFunction(pastTime, stopWatchTime);  
      }
      audio.play();
      chrome.storage.local.set({ blocked });
    }
  }

  else if (checkSaveAlarm.disabled = true)
  {
    const [alarmHours, alarmMinutes] = alarmBox.value.split(':');
    //alert(alarmHours);
    //alert(alarmMinutes);
    while (continuing == true)
    {
      alarmFunction(alarmHours, alarmMinutes);
    }
    audio.play();
    chrome.storage.local.set({ blocked });
  }
});

checkbox.addEventListener("change", (event) => {
  const enabled = event.target.checked;
  chrome.storage.local.set({ enabled });
});

checkSaveStop.addEventListener("click", () => {
    checkSaveStop.disabled = true;
    checkSaveAlarm.disabled = false;
});

checkSaveAlarm.addEventListener("click", () => {
  checkSaveStop.disabled = false;
  checkSaveAlarm.disabled = true;
});

window.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["blocked", "enabled"], function (local) {
    const { blocked, enabled } = local;
    if (Array.isArray(blocked)) {
      textarea.value = blocked.join("\n");
      checkbox.checked = enabled;
    }
  });
});

StopClear.addEventListener("click", () => {
  checkSaveAlarm.disabled = false;
  checkSaveStop.disabled = false;
  checkTwitter.checked = false;
  checkBoxReddit.checked = false;
  checkInsta.checked = false;
  checkYouTube.checked = false;
  textarea.value = "";
  alarmBox.value = "";
  const blocked = textarea.value.split("\n").map(s => s.trim()).filter(Boolean);
  chrome.storage.local.set({ blocked });   
});
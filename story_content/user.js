function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6DBxq2klhY2":
        Script1();
        break;
      case "6GO2fjcw1qD":
        Script2();
        break;
      case "6R4rLIJoIkx":
        Script3();
        break;
      case "6InbPlK648A":
        Script4();
        break;
      case "6qTucmvcQea":
        Script5();
        break;
      case "6astVP7Eyas":
        Script6();
        break;
      case "6pViEXhKIMT":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.volume=0.3;
audio.load();
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.0;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.2;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.4;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.6;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume=0.8;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume=1.0;
}


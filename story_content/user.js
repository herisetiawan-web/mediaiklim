function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5aDzl0eXAEO":
        Script1();
        break;
      case "6DOpdpXy0bJ":
        Script2();
        break;
      case "5s0To0C8J0P":
        Script3();
        break;
      case "5gxENqKFyXN":
        Script4();
        break;
      case "6UhO8KBj4ON":
        Script5();
        break;
      case "6Pww5CTHcEs":
        Script6();
        break;
      case "6WJ4uh4wyK8":
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


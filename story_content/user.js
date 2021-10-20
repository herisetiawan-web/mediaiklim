function ExecuteScript(strId)
{
  switch (strId)
  {
      case "64Vdc8Z27tr":
        Script1();
        break;
      case "6ch0RAxUEBl":
        Script2();
        break;
      case "6Zb90gDh2aB":
        Script3();
        break;
      case "5Z4VeIy8Mv7":
        Script4();
        break;
      case "6UDr0sRk7Kz":
        Script5();
        break;
      case "5smGDTZnvFx":
        Script6();
        break;
      case "6olMIIe7fjc":
        Script7();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musik.mp3";
audio.volume=0.4;
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


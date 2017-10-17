var audio = document.querySelector("audio");
var botaoPlay = document.querySelector(".botao-play");

botaoPlay.onclick = function(){
  if(audio.paused){
  audio.play();
 
  } else {
    audio.pause();
  }
}

audio.onplay = function(){
  console.log("deu play!!!!");
}

audio.onpause = function(){
  console.log("deu pause!!!!");
}

audio.ontimeupdate = function(){
    var percentual = (audio.currentTime/audio.duration)*100;
    var tocado = document.querySelector(".tocado");
    document.querySelector(".tocado").style.width = percentual + "%";
    
    var duracaoAtual = Math.round(audio.currentTime);
    var spanTempoAtual = document.querySelector(".tempo-atual");
   
    var data = new Date(2017, 0,1);
    data.setSeconds(duracaoAtual);

    spanTempoAtual.innerText = data.getMinutes().toString().padStart(2, "0") + ":" + data.getSeconds().toString().padStart(2, "0");
}





  

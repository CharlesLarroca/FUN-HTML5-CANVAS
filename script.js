const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
const width = window.innerWidth;
const height = window.innerHeight;

//configurando a cor e linhas
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
// ctx.globalCompositeOperation = 'multiply'

//Valida se o botão esta sendo clicado ou nao para desenhar ou parar
let isDrawing = false;

//determina onde iniciou e onde finalizou a linha
let lastX = 0;
let lastY = 0;
let hue = 0
let direction = true

function draw(e) {
  if (!isDrawing) return; //caso o botão do mouse nao esteja pressionado nada ira ocorrer
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  //ctx.lineWidth = hue
  ctx.beginPath();
  //Inicio
  ctx.moveTo(lastX, lastY);
  //Final
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  lastX = e.offsetX
  lastY = e.offsetY
  hue++
  if(hue >= 360){
    hue = 0
  }
  if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1){
    direction = !direction //linha vai aumentar ou diminuir conforme atinger os extremos 100 e 1
  }

  if(direction){
    ctx.lineWidth++
  }else {
    ctx.lineWidth--
  }
}


canvas.addEventListener("mousedown", (e) => {
  isDrawing = true
  lastX = e.offsetX
  lastY = e.offsetY
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);

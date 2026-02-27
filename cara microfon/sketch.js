let mic;//crea una variable pel micrófon
function setup() {
  createCanvas(400, 400);//Tammy de l'area de dibuix
  mic=new p5.AudioIn();//El micrófon es una entrada de auto amb p5
mic.start();//Activa  el micrófon
  //El primer nùmero es l'amplada en pixels i el segon es l'alcada amb pixels
}
function draw() {
  let vol= mic.getLevel();
  let h= map(vol,0,1,0,2000);
  background(220);
  ellipse(210,200,230+h,230+h)
  fill(61, 217, 39)
  ellipse(170,170,50)
 fill(38, 14, 125)
  fill(38,14,125)
  ellipse(250,170,50,50)  
}

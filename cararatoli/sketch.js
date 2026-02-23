}
function draw() {
  let vol=mic.getLevel();
  let h=map(vol ,0,1,0,400)
  background(0-mouseX,255-mouseY/2,242)//Color de fons del dibuix.
  //El primer número es el nivell de vermell"R",el segon número es
  //el nivell de verd "G" i el tercer número es l'entesitat de blau
//"B" per tant color RGB en html. Dintre de background o fons.
  fill(250-mouseX,250-mouseY/2,250)//Color de la cara exterior.
  //En el cas de fill serà al mateix pero el que fa es omplir de
  //color  la figura seguent que son dos ellipses.
  ellipse(mouseX,mouseY,200+h+70,)//Forma de la cara exterior
  //mousex=300;mouse y=200
  //El primer número es la posició x del centre de l'elllipse desde
  //la posició "y" o alçada del centre de l'ellipse i el tercer 
  //número l'amplada del ellipse. El quart nùmero 
  fill(255,255,255)//Color blanc dels ulls
  ellipse(mouseX+35,mouseY-40,30+h+50)//Ull dret perquè x=25
   ellipse(mouseX-35,mouseY-40,30+h+50)
  fill(255,42,0)
arc(mouseX,mouseY+50,100,50+h+50,0,PI);
  fill(17, 20, 0)
  ellipse(mouseX-35,mouseY-40,20,25+h+10)
  fill(17, 20, 0)
  ellipse(mouseX+35,mouseY-40,20,25+h+10)
 
}

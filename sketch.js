var dog,happyDog,dogImg;
var database;
var foodS,foodStock;

function preload(){
dogImg = loadImage("images/dogImg.png");
happyDog = loadImage("images/dogImg1.png");
}

function setup() {
createCanvas(500,500);

dog = createSprite(250,250,10,10);
dog.addImage(dogImg)
dog.scale= .3;

database= firebase.database();

foodStock= database.ref('Food')
foodStock.on("value", readStock);
}


function draw() {  
background(46,139,87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}

  drawSprites();
  fill(255,255,254);
  stroke("black");
  text("food remaning: "+foodS,200,400);
  textSize(20);
  text("note : press up_arrow key to feed milk",100,40);


}
function readStock(data){
  foodS = data.val();
  }

  
  function writeStock(x){
    if(x <= 0){
      x = 0;
    }
    else{
      x = x-1;
    }
      database.ref("/").update({
        Food : x,
      })
    }


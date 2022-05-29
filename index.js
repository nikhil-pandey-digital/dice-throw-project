var random_number_1= Math.floor(((Math.random())*6))+1;
var random_number_2= Math.floor(((Math.random())*6))+1;


//for dice one

var imagesource1="images/dice"+random_number_1+".png";

document.querySelector(".img1").setAttribute("src",imagesource1);
//for dice two:-

var imagesource2="images/dice"+random_number_2+".png";
document.querySelector(".img2").setAttribute("src",imagesource2);

//winner announce:-

if(random_number_1>random_number_2){

    document.querySelector("h1").innerText="player1 wins!🚩";
}
else if(random_number_1<random_number_2){
   
    document.querySelector("h1").innerText="player2 wins!🚩";
}
else{
 
    document.querySelector("h1").innerText="Draw!";
}
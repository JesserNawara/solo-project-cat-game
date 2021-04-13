// $("btn").click(function(){})
// get value of input

// var arrayCats =document.getElementsByClassName("image")
// for (var i = 0 ; i<arrayCats.length ; i++){
// console.log(arrayCats[i])
// 	arrayCats[i].on("click",function(){
// 		console.log("hi")
// 	})
// }
// var pet = document.getElementById("user").value;
//  function info(){
// 	property.username=name
// 	property.password=pass
	
// }
// function cat (){
// 	var catStatus = {}
// 	var nbr = 100;
// 	catStatus.tiredness = tiredness
// 	catStatus.hunger = hunger
// 	catStatus.happiness = happiness
// 	catStatus.sleep = sleep
// 	catStatus.feed = feed
// 	catStatus.play = play
	

// return catStatus
// }

// function tiredness (nbr){
// 	for (var i =nbr ; i>0 ;i--){
// 		setInterval(function(){	nbr--},3000)
// 	}
// }
// function hunger (nbr){
// 	for(var i = nbr ; i>0 ; i--){
// 		setInterval(function(){ nbr--},3000)
// 	}
// }

// function happyness (nbr){
// 	for (var i = nbr ; i>0 ;i--){
// 		setInterval(function(){	nbr--},3000)
// 	}
// }

// function sleep (nbr){
// 	if (nbr < 10){
// 		sleep++
// 	}
// }
// function feed (food){
// 	if (this.nbr < 50){
// 			food++
// 	}
// }

// function play (playing){
// 	if (this.nbr < 50){
// 			playing++
// 	}
// }
//----------------------------------------------------------------------------------



//---------------------------------------------------------------------------------


$(".start").click(function(){
	localStorage.setItem("userName", document.getElementById("username").value)
	localStorage.setItem("password", document.getElementById("password").value)
 })

$(document).ready(function(){
  $("#nameBtn").hide()
});


var img

function log (event){
	img=event.target
	console.log(img)
	$(".pics").html("").append(img)
	$(img).css({"filter":"none","border-radius":"20px","width":"500px","height":"450px"})
	$("#nameBtn").show()
}

function startGame(){
	var catName = $("#user").val()
	$("#nameBtn").hide()
	// $("#user").css("color","red")
	
	$(".second").append("<h2>"+ localStorage.getItem("userName") + "</h2>", img, "<h2>" + catName + "</h2>")
	$(img).css({"position":"relative","top":"20%","left":"30%"})
}

// var tiredness= [1,2,3,4,5,6,7,8,9,10]
// var hunger= [1,2,3,4,5,6,7,8,9,10]
// var happiness= [1,2,3,4,5,6,7,8,9,10]

// function tired(tiredness){
// 	setInterval(function(){
// 		document.getElementsByTagName("progress")[0].value=document.getElementsByTagName("progress")[9].value + 1
// 		if(document.getElementsByTagName("progress")===10){
// 			alert(your pet is tired!)
// 		}
// 	},10000)
// }
// function hungry(hunger){
// 	setInterval(function(){
// 		document.getElementsByTagName("progress")[0].value=document.getElementsByTagName("progress")[9].value + 1
// 		if(document.getElementsByTagName("progress")===10){
// 			alert(your pet is hungry!)
// 		}
// 	},10000)
// }
// function happy(happiness){
// 	setInterval(function(){
// 		document.getElementsByTagName("progress")[9].value=document.getElementsByTagName("progress")[9].value - 1
// 		if(document.getElementsByTagName("progress")===0){
// 			alert(your pet is sad!)
// 		}
// 	},10000)
// }

var feeding= document.getElementById("feed") /*button*/
var sleeping= document.getElementById("sleep")
var playing= document.getElementById("play")
var tiredness= document.getElementById("tired")/*count*/
var hunger= document.getElementById("hungry")
var sadness= document.getElementById("sad")
var inttiredness = 100
var inthunger = 100
var intsadness= 100
// feeding.addEventListener("click",function(){
// 	while (inthunger>0){
// 		inthunger++ ; 
// 		hunger.innerHTML = inthunger
// 	setInterval(function(){
// 		inthunger--
// 	if(inthunger >= 0){
// 		hunger.innerHTML=inthunger
// 	}
// 	if (inthunger === 0) {alert("your cat is hungry!")}
// 	},1000)}
// })
feeding.addEventListener("click",function(){
	if(inthunger===100){
		var timer = setInterval(function(){
	if(inthunger > 0){
		inthunger--
		hunger.innerHTML=inthunger
	}
	},1000)
	}else {
	inthunger++
	hunger.innerHTML=inthunger
	
	if (inthunger === 0) {alert("your cat is hungry!")}}
	// clearInterval(timer)
}
)
// sleeping.addEventListener("click",function(){
// 	inttiredness +=1
// 	tiredness.innerHTML = inttiredness

// 	setInterval(function(){		
// 	if(inttiredness > 0){
// 		inttiredness--
// 		tiredness.innerHTML=inttiredness
// 	}
// 	if (inttiredness===0) {alert("your cat is tired!")}
// 	},1000)
// })
sleeping.addEventListener("click",function(){
	if(inttiredness===100){
		var timer = setInterval(function(){
	if(inttiredness > 0){
		inttiredness--
		tiredness.innerHTML=inttiredness
	}
	},1000)
	}else {
	inttiredness++
	tiredness.innerHTML=inttiredness
	
	if (inttiredness === 0) {alert("your cat is tired!")}}
	// clearInterval(timer)
}
)
// playing.addEventListener("click",function(){
// 	intsadness += 1
// 	sadness.innerHTML= intsadness
// 	setInterval(function(){
// 	if(intsadness > 0){
// 		intsadness--
// 		sadness.innerHTML=intsadness
// 	}
// 	if(intsadness===0){alert("your cat is sad!")}
// 	},1000)
// })
// if(intsadness === 0 && inttiredness ===0 && inthunger ===0){
// 	alert("your cat is DEAD!")
// }
playing.addEventListener("click",function(){
	if(intsadness===100){
		var timer = setInterval(function(){
	if(intsadness > 0){
		intsadness--
		sadness.innerHTML=intsadness
	}
	},1000)
	}else {
	intsadness++
	sadness.innerHTML=intsadness
	
	if (inttiredness === 0) {alert("your cat is tired!")}}
	// clearInterval(timer)
}
)
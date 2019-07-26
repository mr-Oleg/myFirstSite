var sh=1;
var anch=1;
var fontsize=14;
var widthleft=55;
var heightleft=55;
var widthcenter=300;
var heightcenter=120;


console.log(document.body.childNodes[1].childNodes[18]);


var p = document.body.childNodes[1].childNodes[20].childNodes[1].getElementsByTagName('p');
console.log('p ' + p.length);

var pic = document.getElementsByTagName('img');
console.log('pic ' + pic.length);

var picleft = document.getElementsByClassName('leftfoto');
console.log('pic left ' + picleft.length);

var piccent = document.getElementsByClassName('center');
console.log('pic center ' + piccent.length);

var bg = document.getElementsByClassName('rules')[0];

for (i=0;i<picleft.length;i++){
	picleft[i].setAttribute('id', 'picleft'+i);
	picleft[i].setAttribute('onclick', 'gallery(src)');
}

for (i=0;i<piccent.length;i++){
	piccent[i].setAttribute('id', 'piccent'+i);
	piccent[i].setAttribute('onclick', 'gallery(src)');
}


function cake(){
	console.log('cake');
	if (sh){
		document.getElementById('menu123').style.cssText="display: block; margin-top: 5%; background: #FFFFFF; position: fixed; width: 64%; top: 50px;";
		sh=0;
	}
	else{
		document.getElementById('menu123').style.cssText="display: none;";
		sh=1;
	}
}

function fontup(){
	console.log('up up');
	fontsize++;
	for (i=0;i<p.length;i++){
		p[i].style.fontSize = fontsize+'pt';
	}
}

function fontdown(){
	console.log('down down');
	fontsize--;
	for (i=0;i<p.length;i++){
		p[i].style.fontSize = fontsize+'pt';
	}
}

function fontcolor(){
	console.log('change color font');
	var cl = document.getElementById('colorfont').value;
	console.log(cl);
	for (i=0;i<p.length;i++){
		p[i].style.color = cl;
	}
}

function show(){
	console.log('show');
	for (i=0;i<pic.length-1;i++){
		pic[i].style.display = 'block';
	}
}

function hide(){
	console.log('hide');
	for (i=0;i<pic.length-1;i++){

		pic[i].style.display = 'none';
	}
}

function fontbg(){
	console.log('change color bg');
	var cl1 = document.getElementById('colorbg').value;
	bg.style.background = cl1;
}

function biggerleft(){
	console.log('bigger left');
	widthleft+=10;
	heightleft+=10;
	for (i=0;i<picleft.length;i++){
		picleft[i].style.width = widthleft+'px';
		picleft[i].style.height = heightleft+'px';
	}
}

function smallerleft(){
	console.log('smaller left');
	widthleft-=10;
	heightleft-=10;
	for (i=0;i<picleft.length;i++){
		picleft[i].style.width = widthleft+'px';
		picleft[i].style.height = heightleft+'px';
	}
}

function biggercenter(){
	console.log('bigger center');
	widthcenter+=10;
	heightcenter+=10;
	for (i=0;i<piccent.length;i++){
		piccent[i].style.width = widthcenter+'px';
		piccent[i].style.height = heightcenter+'px';
	}
}

function smallercenter(){
	console.log('smaller center');
	widthcenter-=10;
	heightcenter-=10;
	for (i=0;i<piccent.length;i++){
		piccent[i].style.width = widthcenter+'px';
		piccent[i].style.height = heightcenter+'px';
	}
}

function gallery(src){
	console.log('gallery');
	var g=src;
	document.getElementById('an').style.display = "none";
	document.getElementById('cus').style.display = "none";
	document.getElementById('top').style.display = "none";
	document.getElementById('dark').style.display = "block";
	document.getElementById('window').style.display = "block";
	document.getElementById('winpic').src = g;
	document.getElementById('winpic').style.cssText= "width: 100%; height: 100%; margin-left: 30%;"
}

function closewin(){
	console.log('close gallery');
	document.getElementById('an').style.cssText="overflow: scroll; margin-left: 85%; position: fixed; top: 165px; right: 0%; width: 15%; height: 622px; border: 2px solid black; background-color: #FFFFFF;";
	document.getElementById('cus').style.cssText="background: #FFFFFF; border: solid 2px; width: 15%; margin-top: 1%; margin-left: 1%; position: fixed; padding: 10px;";
	document.getElementById('top').style.cssText="top: 800px; margin-left: 50px; position: fixed;";
	document.getElementById('dark').style.display = "none";
	document.getElementById('window').style.display = "none";
}

function showanch(){
	console.log('anchor');
	console.log(anch);
	if(anch){
		document.getElementById('an').style.cssText = "display: block; overflow: scroll; margin-left: 26%; position: fixed; top: 254px; right: 0%; width: 65%; height: 400px; border: 2px solid black; background-color: #FFFFFF;";
		anch=0;
	}
	else{
		document.getElementById('an').style.cssText = "display: none;";
		anch=1;
	}

}
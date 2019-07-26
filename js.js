

	var countQuest = 0;
	var plus = 0;
	var test_start = 0;
	var k = 0;
	img = document.getElementById("myImg");
	var q=0;
	var ansuser=[];
	var sch=0;
	var arr = new Array();
	for(i=0; i<4; i++){
		arr[i] = new Array();
	    for(j=0; j<21; j++){
	    	arr[i][j] = 0;//вместо i+j+1 пишем любой наполнитель. В простейшем случае - null
	    }
	}
	var s=0;
	
	function check(num){
	
		if(num == 21){ 
			
			document.getElementById('area').style.display='block';
			document.getElementById('start').style.display='none';
			document.getElementById('end').style.display='inline';

			if(test_start == 0){
			
					//Массив вопросов
				var questions = ["В каком случае Вы совершите вынужденную остановку?","Дом","Дерево","Homeland"];

					//Массивы вариантов ответов
				var number1 = ["1.	Остановившись непосредственно перед пешеходным переходом, чтобы уступить дорогу пешеходу.","House","House"];	
				var number2 = ["2.	Остановившись на проезжей части из-за технической неисправности транспортного средства.","Cat","Door"];	
				var number3 = ["3.	В обоих перечисленных случаях.","Dog","Wall"];	
				var number4 = ["4.	Остановившись за пешеходным переходом","Tree","Tree"];

				document.getElementById('question').innerHTML=questions[countQuest];
				
				document.getElementById('option1').innerHTML=number1[countQuest];
				document.getElementById('option2').innerHTML=number2[countQuest];
				document.getElementById('option3').innerHTML=number3[countQuest];
				document.getElementById('option4').innerHTML=number4[countQuest];
				
					//Массив правильных ответов
				var answer = [1,0,0,3,1,1,3,,,,,,,,,,,,,];
				
				test_start = 1;	
			}
		}
		else{
					//Массив вопросов
			var questions = ["В каком случае Вы совершите вынужденную остановку?",
			"Разрешен ли Вам съезд на дорогу с грунтовым покрытием?",
			"Можно ли Вам остановиться в указанном месте для посадки пассажира?",
			"Какие из указанных знаков запрещают движение водителям мопедов?",
			"Вы намерены повернуть налево. Где следует остановиться, чтобы уступить дорогу легковому автомобилю?",
			"Что означает мигание зеленого сигнала светофора?",
			"Водитель обязан подавать сигналы световыми указателями поворота (рукой):",
			"Как Вам следует поступить при повороте направо?",
			"По какой траектории Вам разрешено выполнить разворот?",
			"С какой скоростью Вы можете продолжить движение вне населенного пункта по левой полосе на легковом автомобиле?",
			"Можно ли водителю легкового автомобиля выполнить опережение грузовых автомобилей вне населенного пункта по такой траектории?",
			"В каком случае водителю разрешается поставить автомобиль на стоянку в указанном месте?",
			"При повороте направо Вы должны уступить дорогу:",
			"Вы намерены проехать перекресток в прямом направлении. Кому следует уступить дорогу?",
			"Кому Вы обязаны уступить дорогу при повороте налево?",
			"С какой максимальной скоростью можно продолжить движение за знаком?",
			"Для перевозки людей на мотоцикле водитель должен иметь водительское удостоверение на право управления транспортными средствами:",
			"При какой неисправности разрешается эксплуатация транспортного средства?",
			"В случае, когда правые колеса автомобиля наезжают на неукрепленную влажную обочину, рекомендуется:",
			"Что понимается под временем реакции водителя?"];
			
				//Массивы вариантов ответов
			var number1 = ["Остановившись непосредственно перед пешеходным переходом, чтобы уступить дорогу пешеходу.",
			"Разрешен",
			"Можно.",
			"Только А.",
			"Перед знаком",
			"Предупреждает о неисправности светофора.",
			"Перед началом движения или перестроением.",
			"Перестроиться на правую полосу, затем осуществить поворот.",
			"Только по А.",
			"Не более 50 км/ч.",
			"Можно.",
			"Только если расстояние до сплошной линии разметки не менее 3 м.",
			"Только велосипедисту.",
			"Обоим трамваям.",
			"Только автобусу.",
			"60 км/ч.",
			"Категории «A» или подкатегории «A1».",
			"Не работают пробки топливных баков.",
			"Затормозить и полностью остановиться.",
			"Время с момента обнаружения водителем опасности до полной остановки транспортного средства."];	

			var number2 = ["Остановившись на проезжей части из-за технической неисправности транспортного средства.",
			"Разрешен только при технической неисправности транспортного средства",
			"Можно, если Вы управляете такси.",
			"Только Б",
			"Перед перекрестком у линии разметки.",
			"Разрешает движение и информирует о том, что вскоре будет включен запрещающий сигнал.",
			"Перед поворотом или разворотом.",
			"Продолжить движение по второй полосе до перекрестка, затем повернуть.",
			"Только по Б.",
			"Не менее 50 км/ч и не более 70 км/ч.",
			"Можно, если скорость грузовых автомобилей менее 30 км/ч.",
			"Только если расстояние до края пересекаемой проезжей части не менее 5 м.",
			"Только пешеходам.",
			"Только трамваю А.",
			"Только легковому автомобилю.",
			"50 км/ч.",
			"Любой категории или подкатегории в течение двух и более лет.",
			"Не работает механизм регулировки положения сиденья водителя.",
			"Затормозить и плавно направить автомобиль на проезжую часть.",
			"Время с момента обнаружения водителем опасности до начала принятия мер по ее избежанию."];	

			var number3 = ["В обоих перечисленных случаях.",
			"Запрещен.",
			"Нельзя",
			"В и Г",
			"На перекрестке перед прерывистой линией разметки.",
			"Запрещает дальнейшее движение.",
			"Перед остановкой.",
			"Возможны оба варианта  действий.",
			"По любой из указанных.",
			"Не менее 50 км/ч и не более 90 км/ч.",
			"Нельзя.",
			"При соблюдении обоих перечисленных  условий. ",
			"Пешеходам и велосипедисту.",
			"Только трамваю Б.",
			"Никому.  ",
			"30 км/ч.",
			"Только категории «A» или подкатегории «A1» в течение двух и более лет.",
			"Не работают устройства обогрева и обдува стекол.",
			"Не прибегая к торможению, плавно направить автомобиль на проезжую часть.",
			"Время, необходимое для переноса ноги с педали управления подачей топлива на педаль тормоза."];	

			var number4 = ["Остановившись за пешеходным переходом",
			"Запрещен,если видимость дороги спереди менее 300м.",
			"Можно,если вы управляете общественным транспортом",
			"Все",
			"В любом месте по усмотрению водителя.",
			"Разрешает движение для пешеходов",
			"Во всех перечисленных  случаях. ",
			"Проехать прямо,потому что поворот направо запрещён",
			"По любой из указанных разворот запрещён",
			"Не более 40 км/ч",
			"Можно,но только в конце подъёма",
			"При соблюдении одного из условий",
			"Никому.",
			"Никому.",
			"Обоим",
			"20 км/ч.",
			"Только категории «A» или подкатегории «A1» в течение пяти и более лет.",
			"Не работает  стеклоподъемник. ",
			"Ускориться и плавно направить автомобиль на проезжую часть.",
			"Время с момента возникновения опасности до начала принятия мер по ее избежанию."];	


			for (i=0;i<20;i++){
				arr[0][i]=number1[i];
			}
			for (i=0;i<20;i++){
				arr[1][i]=number2[i];
			}
			for (i=0;i<20;i++){
				arr[2][i]=number3[i];
			}
			for (i=0;i<20;i++){
				arr[3][i]=number4[i];
			}





	
				//Массив правильных ответов
			var answer = [1,0,0,3,1,1,3,2,0,2,0,2,2,0,2,3,2,3,2,1];
			
			if(num == answer[countQuest]){
				plus++;
			}


			ansuser[q]=num;
			q++;


			if(questions.length -1 > countQuest){

				countQuest++;
				
				document.getElementById('question').innerHTML=questions[countQuest];
			
				document.getElementById('option1').innerHTML=number1[countQuest];
				document.getElementById('option2').innerHTML=number2[countQuest];
				document.getElementById('option3').innerHTML=number3[countQuest];
				document.getElementById('option4').innerHTML=number4[countQuest];
				
				k++;

				if(document.getElementById("myImg").src!=''){
					document.getElementById("myImg").src='';
				}


				if(k==1){
					document.getElementById("myImg").src='img123/1.02.png';
				}
				if(k==2){
					document.getElementById("myImg").src='img123/1.03.png';
				}
				if(k==3){
					document.getElementById("myImg").src='img123/1.04.png';
				}
				if(k==4){
					document.getElementById("myImg").src='img123/1.05.png';
				}
				if(k==7){
					document.getElementById("myImg").src='img123/1.08.png';
				}
				if(k==8){
					document.getElementById("myImg").src='img123/1.09.png';
				}
				if(k==9){
					document.getElementById("myImg").src='img123/1.10.png';
				}
				if(k==10){
					document.getElementById("myImg").src='img123/1.11.png';
				}
				if(k==11){
					document.getElementById("myImg").src='img123/1.12.png';
				}
				if(k==12){
					document.getElementById("myImg").src='img123/1.13.png';
				}
				if(k==13){
					document.getElementById("myImg").src='img123/1.14.png';
				}
				if(k==14){
					document.getElementById("myImg").src='img123/1.15.png';
				}
				if(k==15){
					document.getElementById("myImg").src='img123/1.16.png';
				}
			}
			if(q==20){
/*
				console.log('countQuest======'+countQuest);

				console.log('q======'+q);

				for (i=0;i<=q;i++){
					console.log(ansuser[q]+'----'+q);
				}
*/

				
				q=0; 
				s=0;
				document.getElementById('area').style.display='none';
				var rez = document.getElementById('result');
				rez.style.cssText="padding: 30px; margin: 0; background-color: #FFFFFF; width: 100%; height: auto; display: block;";
				for (i=3;q<20;i+=10){
					console.log(rez.childNodes[i]);

					console.log(ansuser[q]+'-'+q);

					if(q-1==1){
					document.getElementById("img"+q).src='img123/1.02.png';
					}
					if(q-1==2){
						document.getElementById("img"+q).src='img123/1.03.png';
					}
					if(q-1==3){
						document.getElementById("img"+q).src='img123/1.04.png';
					}
					if(q-1==4){
						document.getElementById("img"+q).src='img123/1.05.png';
					}
					if(q-1==7){
						document.getElementById("img"+q).src='img123/1.08.png';
					}
					if(q-1==8){
						document.getElementById("img"+q).src='img123/1.09.png';
					}
					if(q-1==9){
						document.getElementById("img"+q).src='img123/1.10.png';
					}
					if(q-1==10){
						document.getElementById("img"+q).src='img123/1.11.png';
					}
					if(q-1==11){
						document.getElementById("img"+q).src='img123/1.12.png';
					}
					if(q-1==12){
						document.getElementById("img"+q).src='img123/1.13.png';
					}
					if(q==13){
						document.getElementById("img"+q).src='img123/1.14.png';
					}
					if(q==14){
						document.getElementById("img"+q).src='img123/1.15.png';
					}
					if(q==15){
						document.getElementById("img"+q).src='img123/1.16.png';
					}

					rez.childNodes[i-2].innerHTML=q+1+')'+questions[q];
					rez.childNodes[i].innerHTML=ansuser[q]+1+')'+arr[ansuser[q]][s];
					rez.childNodes[i+2].innerHTML=answer[q]+1+')'+arr[answer[q]][s];
					if (ansuser[q]==answer[q]){
						rez.childNodes[i].style.color="green";
					}
					else{
						rez.childNodes[i].style.color="red";
					}
					q++;
					s++;
				}
				
				if (plus>=18){
					alert("Поздравляем! Вы успешно сдали!");
				}
				else{
					alert("Увы. Вы не прошли экзамен.");
				}	

				
				
			}
		}
	}



	
//метод изменения атрибута у класса class=""

function next(){
	var src = document.getElementById('clickable').src;
	var num;
	len = src.length;
	if(/\d/.test(src[len-6])){
		num = parseInt(src[len-6]+src[len-5]);
	}else{
		num = parseInt(src[len-5]);
	}
	num++;
	if(num == 28){
		num = 1;
	}
	document.getElementById('clickable').src = "../img/"+num+".jpg";
}
function prev(){
	var src = document.getElementById('clickable').src;
	var num;
	len = src.length;
	if(/\d/.test(src[len-6])){
		num = parseInt(src[len-6]+src[len-5]);
	}else{
		num = parseInt(src[len-5]);
	}
	num--;
	if(num == 0){
		num = 27;
	}
	document.getElementById('clickable').src = "../img/"+num+".jpg";
}
function date(){
	var date = new Date();
	var txt = "";
	txt += date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
	document.write("<p id='date'>"+txt+"</p>");
}
function agree(){
	var cellphone, email, name;
	var elem = document.getElementsByClassName("modal");
	var elem1 = document.getElementById("mdl");
	var elem2 = document.getElementsByClassName("modal-inside");
	var txt;
	var sum = 0;
	cellphone = change(1);
	email = change(2);
	name = change(3);
	sum += cellphone==false?1:0;
	sum += email==false?2:0;
	sum += name==false?4:0;
	switch(sum){
		case 1: txt = "Номер телефона введён неверно"; break;
		case 2: txt = "Электронная почта введена неверно"; break;
		case 3: txt = "Номер телефона и электронная почта введены неверно"; break;
		case 4: txt = "Фамилия и имя введены неверно"; break;
		case 5: txt = "Номер телефона и фамилия-имя введены неверно"; break;
		case 6: txt = "Электонная почта и фамилия-имя введены неверно"; break;
		case 7: txt = "Номер телефона, электронная почта и фамилия-имя введены неверно"; break;
		default: txt = "Все поля введены неверно";
	}
	if(cellphone == true && email == true && name == true){
		document.getElementsByClassName("modal")[0].style.display = 'block';
		document.getElementsByClassName("modal-inside")[0].style.display = 'block';
		elem1.innerHTML = "Все данные введены верно";
	}else{
		document.getElementsByClassName("modal")[0].style.display = 'block';
		document.getElementsByClassName("modal-inside")[0].style.display = 'block';
		elem1.innerHTML = txt;
	}
}
function cls(){
	document.getElementsByClassName("modal")[0].style.display = 'none';
	document.getElementsByClassName("modal-inside")[0].style.display = 'none';
}
function clsPic(witch){
	document.getElementsByClassName("modal")[0].style.display = 'none';
	document.getElementsByClassName("modal")[0].style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
	document.getElementsByClassName("modal-picture")[0].style.display = 'none';
}
function showPic(witch){
	document.getElementsByClassName("modal")[0].style.display = 'block';
	document.getElementsByClassName("modal")[0].style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
	document.getElementsByClassName("modal-picture")[0].style.display = 'block';
	if(witch == 0){
		document.getElementById('clickable').src = "../img/karta1.png";
		document.getElementsByClassName('sliderbutton')[0].style.display = 'none';
		document.getElementsByClassName('sliderbutton')[1].style.display = 'none';
	}else{
		document.getElementById('clickable').src = "../img/"+witch+".jpg";
		document.getElementsByClassName('sliderbutton')[0].style.display = 'block';
		document.getElementsByClassName('sliderbutton')[1].style.display = 'block';
	}

}
function change(witch){
	switch(witch){
		case 1:
	var str = document.registration.cellphone.value;
	var element = document.registration.cellphone;
	var plus = 0;
	var test1, test2;
	test1 = false; test2 = false;
	if(str[0] == '+'){
		plus = 1;
	} 
	test1 = (plus == 1 && str.length == 16);
	test2 = (plus == 0 && str.length == 15);
	if(str[1+plus] == '-' && str[5+plus] == '-' && str[9+plus] == '-'
		  && str[12+plus] == '-' && /\d/.test(str[0+plus])
		   && /\d/.test(str[3+plus]) && /\d/.test(str[4+plus]) && /\d/.test(str[2+plus])
		    && /\d/.test(str[8+plus]) && /\d/.test(str[6+plus]) && /\d/.test(str[7+plus])
		     && /\d/.test(str[10+plus]) && /\d/.test(str[11+plus]) && /\d/.test(str[13+plus])
		     && /\d/.test(str[14+plus]) &&  (test1 == true || test2 == true)){
		element.style.boxShadow = "0 0 5px 1px green";
		element.style.borderColor = "green";
		return true;
	}else{
		element.style.boxShadow = "0 0 5px 1px red";
		element.style.borderColor = "red";
		return false;
}
	break;
	case 2:
	var str = document.registration.email.value;
	var element = document.registration.email;
	if(str.match(/^[-a-z0-9!#$%&'*+/=?^_`{|}~]+(\.[-a-z0-9!#$%&'*+/=?^_`{|}~]+)*@([a-z0-9]([-a-z0-9]{0,61}[a-z0-9])?\.)*(aero|arpa|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel|[a-z][a-z])$/)){
		element.style.boxShadow = "0 0 5px 1px green";
		element.style.borderColor = "green";
		return true;
	}else{
		element.style.boxShadow = "0 0 5px 1px red";
		element.style.borderColor = "red";
		return false;
	}
	break;
	case 3:
	var str = document.registration.FI.value;
	var element = document.registration.FI;
	if(str.match(/^[a-zA-Zа-яА-Я,.'-]+\s+[a-zA-Zа-яА-Я,.'-]/)){
		element.style.boxShadow = "0 0 5px 1px green";
		element.style.borderColor = "green";
		return true;
	}else{
		element.style.boxShadow = "0 0 5px 1px red";
		element.style.borderColor = "red";
		return false;
	}
	}
}
function chck(witch){
	switch(witch){
		case 1:
	var str = document.registration.cellphone.value;
	var element = document.registration.cellphone;
	if(str == ""){
		document.registration.cellphone.value = "+7-000-000-00-00";
		element.style.boxShadow = "0 0 0px 0px white";
		element.style.borderColor = "#6A5ACD";
		element.style.color = "gray";
	}
	break;
	case 2:
	var str = document.registration.email.value;
	var element = document.registration.email;
	if(str == ""){
		document.registration.email.value = "example@mail.ru";
		element.style.boxShadow = "0 0 0px 0px white";
		element.style.borderColor = "#6A5ACD";
		element.style.color = "gray";
	}
	break;
	case 3:
	var str = document.registration.FI.value;
	var element = document.registration.FI;
	if(str == ""){
		document.registration.FI.value = "Иванов Иван";
		element.style.boxShadow = "0 0 0px 0px white";
		element.style.borderColor = "#6A5ACD";
		element.style.color = "gray";
	}
	break;
}
}
function focusElem(witch){
	switch(witch){
	case 1:
	var str = document.registration.cellphone.value;
	var element = document.registration.cellphone;
	if(str == '+7-000-000-00-00'){
		document.registration.cellphone.value = '';
		element.style.boxShadow = "0 0 5px 1px #6A5ACD";
		element.style.borderColor = "#6A5ACD";
		element.style.color = "black";
	}
	break;
	case 2:
	var str = document.registration.email.value;
	var element = document.registration.email;
	if(str == 'example@mail.ru'){
		document.registration.email.value = '';
		element.style.boxShadow = "0 0 5px 1px #6A5ACD";
		element.style.borderColor = "#6A5ACD";
		element.style.color = "black";
	}
	break;
	case 3:
	var str = document.registration.FI.value;
	var element = document.registration.FI;
	if(str == 'Иванов Иван'){
		document.registration.FI.value = '';
		element.style.boxShadow = "0 0 5px 1px #6A5ACD";
		element.style.borderColor = "#6A5ACD";
		element.style.color = "black";
	}
	break;
	}
}

function myreset(){
	document.registration.email.value = "example@mail.ru";
	document.registration.email.style.boxShadow = "0 0 0px 0px";
	document.registration.email.style.borderColor = "#6A5ACD";
	document.registration.email.style.color = "gray";
	document.registration.cellphone.value = "+7-000-000-00-00";
	document.registration.cellphone.style.boxShadow = "0 0 0px 0px";
	document.registration.cellphone.style.borderColor = "#6A5ACD";
	document.registration.cellphone.style.color = "gray";
	document.registration.FI.value = "Иванов Иван";
	document.registration.FI.style.boxShadow = "0 0 0px 0px";
	document.registration.FI.style.borderColor = "#6A5ACD";
	document.registration.FI.style.color = "gray";
}

function myDate(){
	var txt="";
	var date = new Date();
	switch(date.getDay()){
		case 0: txt+="Воскресенье<br/>"; break;
		case 1: txt+="Понедельник<br/>"; break;
		case 2: txt+="Вторник<br/>"; break;
		case 3: txt+="Среда<br/>"; break;
		case 4: txt+="Четверг<br/>"; break;
		case 5: txt+="Пятница<br/>"; break;
		case 6: txt+="Суббота<br/>"; break;
	}
	date.getDate()<10?txt+="0":txt+="";
	txt += date.getDate()+" ";
	switch(date.getMonth()){
		case 0: txt+="января<br/>"; break;
		case 1: txt+="февраля<br/>"; break;
		case 2: txt+="марта<br/>"; break;
		case 3: txt+="апреля<br/>"; break;
		case 4: txt+="мая<br/>"; break;
		case 5: txt+="июня<br/>"; break;
		case 6: txt+="июля<br/>"; break;
		case 7: txt+="августа<br/>"; break;
		case 8: txt+="сентября<br/>"; break;
		case 9: txt+="октября<br/>"; break;
		case 10: txt+="ноября<br/>"; break;
		case 11: txt+="декабря<br/>"; break;
	}
	document.getElementById("date1").innerHTML=txt;
}

function myClock(){
	var timer;
	var txt="<big>";
	var time = new Date();
	txt += time.getHours()<10?txt+="0":txt+="";
	txt += time.getHours()+":";
	if(time.getMinutes() < 10) txt+="0";
	txt += time.getMinutes();
	txt+="</big>";
	document.getElementById("time1").innerHTML=txt;
	timer= setTimeout("myClock()",5000);
}
function init(){
	myDate();
	myClock();
}
function initAcc(witch){
	myDate();
	myClock();
	accord(witch);
}
function accord(witch){
	var acc = document.getElementsByClassName('accordion');
	if(witch != 0){
	acc[0].classList.toggle('activated');
	acc[0].nextElementSibling.classList.toggle('show');		
	}
	var i;
	for(i = 0; i < acc.length; i++){
		acc[i].onclick = function(){
			this.classList.toggle('activated');
			this.nextElementSibling.classList.toggle('show');
		}
	}
}

function analog(witch){
	var newWin = window.open("about:blank", "hello", "width=1000,height=588");
	switch(witch){
		case 1: newWin.document.write("<img src='Project(16)/img/site-analog.png' width=1000 height=588>"); break;
		default: newWin.document.write("<img src='../img/site-analog.png' width=1000 height=588>"); break;
	}
}

function page(witch){
	switch(witch){
		case 1: window.location="../../index.html"; break;
		case 2: window.location="index.html"; break;
		case 3: window.location="Project(16)/navigation/menu_2.html"; break;
		case 4: window.location="Project(16)/navigation/menu_4.html"; break;
		case 5: window.location="menu_4.html"; break;
		case 6: window.location="menu_6.html"; break;
		case 7: window.location="menu_2.html"; break;
		case 8: window.location="menu_3.html"; break;
		case 9: window.location="menu_5.html"; break;
		case 10: window.location="menu_7.html"; break;
		case 11: window.location="menu_8.html"; break;
		case 12: window.location="menu_9.html"; break;
		case 13: window.location="menu_10.html"; break;
		case 14: window.location="menu_11.html"; break;
		case 15: window.location="menu_19.html"; break;
		case 16: window.location="menu_20.html"; break;
		case 17: window.location="menu_21.html"; break;
		case 18: window.location="menu_22.html"; break;
		case 19: window.location="menu_24.html"; break;
		case 20: window.location="menu_25.html"; break;
		case 21: window.location="menu_26.html"; break;
	}
}
function settings(){
	if(document.getElementById('settings').style.display == 'block'){
		//document.getElementById('settings').style.width = '0px';
		document.getElementById('settings').style.height = '0px';
		setTimeout(function(){
			document.getElementById('settings').style.display = 'none';
		}, 500);
	}else{
		document.getElementById('settings').style.display = 'block';
		setTimeout(function(){
			//document.getElementById('settings').style.width = '400px';
			document.getElementById('settings').style.height = '180px';
		}, 1);
	}
}
function fontSize(witch){
	var size = parseInt(window.getComputedStyle(document.getElementById('main'), null).fontSize);
	switch(witch){
		case 0: size-=2; break;
		case 1: size+=2; break;
	}
 	document.getElementById('main').style.fontSize = size+'px';
}
function fontStyle(witch){
	switch(witch){
		case 1: document.body.style.fontFamily = "Arial"; break;
		case 2: document.body.style.fontFamily = "Times New Roman"; break;
		case 3: document.body.style.fontFamily = "Helvetica"; break;
	}
}
function defaultt(){
	document.getElementById('main').style.fontSize = '16px';
	document.body.style.fontFamily = "Trebuchet MS";	
}
function mapbigger(){
	var width = parseInt(window.getComputedStyle(document.getElementById('map'), null).width);
	var height = parseInt(window.getComputedStyle(document.getElementById('map'), null).height);
	var mLeft = parseInt(window.getComputedStyle(document.getElementById('map'), null).marginLeft);
	if(width*1.5 < 5500){
	width *= 1.5;
	height *= 1.5;
	mLeft -= 70;
	document.getElementById('map').style.width = width+'px';
	document.getElementById('map').style.height = height+'px';
	document.getElementById('smaller').style.opacity = '1';
	document.getElementById('map').style.marginLeft = mLeft+'px';
	}
	if(width*1.5 >= 5500){
		document.getElementById('bigger').style.opacity = '0.5';
		//document.getElementById('bigger').style.cursor = 'url("../img/1.jpg");';
	}
}
function mapsmaller(){
	var width = parseInt(window.getComputedStyle(document.getElementById('map'), null).width);
	var height = parseInt(window.getComputedStyle(document.getElementById('map'), null).height);
	var mLeft = parseInt(window.getComputedStyle(document.getElementById('map'), null).marginLeft);
	if(width/1.5 > 600){
	width /= 1.5;
	height /= 1.5;
	mLeft += 70;
	document.getElementById('map').style.width = width+'px';
	document.getElementById('map').style.height = height+'px';
	document.getElementById('bigger').style.opacity = '1';
	document.getElementById('map').style.marginLeft = mLeft+'px';
	}
	if(width/1.5 <= 600){
		document.getElementById('smaller').style.opacity = '0.5';
	}
}
function kartaS(){
	if(document.getElementById('markered').style.display == 'none'){
		document.getElementById('accords').style.display = 'none';
		document.getElementById('markered').style.display = 'block';
		document.karta.kartaBut.value = 'В виде «аккордиона»';
	}else{
		document.getElementById('accords').style.display = 'block';
		document.getElementById('markered').style.display = 'none';
		document.karta.kartaBut.value = 'В виде списка';
	}
}
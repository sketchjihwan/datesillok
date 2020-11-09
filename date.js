/*
var now = new Date(); // 오늘 날짜 정보를 Date 객체의 인스턴스 now 객체로 만듭니다.
var firstDay = new Date("2020-02-29");  // 처음 만난 날의 날짜 정보를 firstDay 객체로 만듭니다. 
var toNow = now.getTime();  // 오늘 날짜를 밀리초로 바꿉니다.
var toFirst = firstDay.getTime();  // 처음 만난 날을 밀리초로 바꿉니다.
var passedTime = toNow - toFirst;  // 처음 만난 날과 오늘 사이의 차이 (밀리초)
var passedDay = Math.round(passedTime/(24*60*60*1000)); // 밀리초를 일로 변환 후 반올림합니다.
document.querySelector('#current').innerText = passedDay + 1;  // #accent 영역에 표시합니다.

calcDate(100);  // 100일 기념일을 계산해서 표시합니다.
calcDate(200);  // 200일 기념일을 계산해서 표시합니다.
calcDate(300);  // 300일 기념일을 계산해서 표시합니다.
calcDate(500);  // 500일 기념일을 계산해서 표시합니다.

function calcDate(days) {
	var future = toFirst + days*(1000*60*60*24);  // 처음 만난 날에 밀리초로 바꾼 100일을 더합니다.
	var someday = new Date(future);  // future 값을 사용해 Date 객체의 인스턴스를 만듭니다.
	var year = someday.getFullYear( );  // ‘연도’를 가져와 year 변수에 저장합니다.
	var month = someday.getMonth( );  // ‘월’을 가져와 month 변수에 저장합니다.
	var date = someday.getDate( );  // ‘일’을 가져와 date 변수에 저장합니다.
	document.querySelector("#date"+days).innerText = year + "년 " + month + "월 " + date + "일";
}
*/

var today = new Date();
var meetday = new Date("2020-02-29");
var days = Math.ceil((today-meetday)/24/60/60/1000);
// days = days - 1;
document.getElementById("current").innerHTML = days;

// alert("비밀번호를 입력해주세요");
var pw = prompt("당신은 누구신가요?", "");
if (pw == "012486") {
	alert("윤진아 나도 사랑해😍");
	document.querySelector(".secret").style.display = "block"
	// $(".secret").css("display", "block");
} else {
	alert("윤진이가 아니네요. 우리들의 데이트실록 많이 봐주세요");
	// $(".secret").css("display", "none");
	document.querySelector(".secret").style.display = "none"
}
//JS-Cookie 라이브러리를 활용한 팝업 창 만들기


//각 요소들 가져오기(전체 popup박스, 닫기버튼2개)
const popup = document.querySelector('.popup');
const btnClose = document.querySelector('.btnClose');
const btnToday = document.querySelector('.btnToday');

//페이지 최초 접속시 팝업창 띄우기-->주의!-->쿠키 유무에 따라 노출/비노출 되게끔 처리.
const popupCookie = Cookies.get('popupCookie'); //popupCookie이름으로 쿠키 심어놔
console.log(popupCookie); //저장된 쿠키가 없으므로 undefined출력

//popupCookie 값 유무에 따라 없으면 --> showPopup() 호출해서 팝업창 띄우기
if( popupCookie == undefined ) 
	showPopup();//undefined가 나타나면 showPopup()로 팝업창 띄우기

//[닫기] 버튼 클릭시
btnClose.addEventListener( 'click', function() {
	concealPopup( 0 );
} );

//[오늘 하루창 닫기 클릭시]
btnToday.addEventListener( 'click', function() {
	concealPopup( 1, 1 );
} );

//팝업창 띄우기
function showPopup() {
	popup.style.display = 'block';
}

//팝업창 감추기
function concealPopup( number, expiration ) {
	console.log( number + ", " + expiration );

    //[닫기] 버튼 클릭시-->0,undefined넘어오고
    popup.style.display = 'none';

    //[오늘 하루 창 닫기]버튼 클릭시-->1,2넘어오고
    if( number === 1 ) {
        //할 일 처리 -->하루짜리 쿠키 생성
        //popupCookie 값 체크
        if( Cookies.get( 'popupCookie' ) == undefined ) {
            //쿠키가 없는 경우--> popupCookie라는 이름의 쿠키를 추가
            Cookies.set( 'popupCookie', 'yes', { expires: expiration, path: '/' } ); //expiration넣은 이유는 3이라 3틀~~
        }
    }
}

//쿠키 삭제
const oneDelCookie = function( cname ) {
	event.preventDefault();
	
	// 할 일 처리
	cname = document.getElementById( 'cname' );
	let cval = cname.value;
	console.log( cval );
	
	Cookies.remove( cval );
	cname.value = '';
	cname.focus();
	alert( `${ cval } 쿠키를 삭제하였습니다.` );
}

const 	form = document.getElementById( 'form' );
		form.addEventListener( 'submit', oneDelCookie );
function 비밀코드1(){
    if(prompt('1번 비밀 코드를 입력하세요.') == 'kimmax'){
        alert('킹민위키로 이동합니다.');
        open('킹민위키.html')
    }

    else {
        alert('취소되었습니다.');
    }
}

function 비밀코드2(){
    if(prompt('2번 비밀 코드를 입력하세요.') == '킹준달'){
        alert('킹준달위키는 아직 준비 중입니다.');
    }

    else {
        alert('취소되었습니다.');
    }
}
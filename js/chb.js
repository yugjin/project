window.onload = function () {
    const checkAll = document.getElementById('chkAll');
    const chk = document.querySelectorAll('.chk');
    const chkBoxLength = chk.length;

    checkAll.addEventListener('click', function (event) {
        if (event.target.checked) {
            chk.forEach(function (value) {
                value.checked = true;
            })
        } else {
            chk.forEach(function (value) {
                value.checked = false;
            })
        }
    });
    for (chk of chk) {
        chk.addEventListener('click', function () {
            let count = 0;
            chk.forEach(function (value) {
                if (value.checked == true) {
                    count++;
                }
            })
            if (count !== chkBoxLength) {
                checkAll.checked = false;
            } else {
                checkAll.checked = true;
            }
        })
    }
}

$(document).ready(function(){
    
    $(".fpmgBt2").click(function(){    
        if($("#chk1").is(":checked") == false){
            alert("모든 약관에 동의 하셔야 다음 단계로 진행 가능합니다.");
            return;
        }else if($("#chk2").is(":checked") == false){
            alert("모든 약관에 동의 하셔야 다음 단계로 진행 가능합니다..");
            return;
        }else{
            $("#joinForm").submit();
        }
    });    
});









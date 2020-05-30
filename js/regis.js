function changeFile(e) {
    var fileName = e.files[0].name;
    $('label[for="'+ e.id +'"]').html(fileName);
}

function validate(){
    if($("#password").val() == $("#confirm-password").val()){
        $("#confirm-password")[0].setCustomValidity('');
    }else{
        $("#confirm-password")[0].setCustomValidity('Passowrd must match');
    }
}
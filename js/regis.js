function changeFile(e) {
    var fileName = e.files[0].name;
    $('label[for="'+ e.id +'"]').html(fileName);
}

// $('#password, #confirm-password').on('keyup', function () {
//     if ($('#password').val() != $('#confirm-password').val())
//         return false;
//   });
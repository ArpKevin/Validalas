$(function() {
    const validClass = 'is-valid';
    const invalidClass = 'is-invalid';


    let $button = $('form button');
    let $checkbox = $('input#aszf');
    let $username = $('input#username');
    let $password = $('input#password');
    let $passwordAgain = $('input#passwordAgain');
    let $alert = $('div.alert');
    let $alertFieldList = $('div.alert ul');
    let $successText = $('div#successText');
    let $form = $('form');

    $button.click(function(event){

        event.preventDefault()

        let invalidFields = [];

        // ÁSZF
        let isChecked = $checkbox.prop("checked");

        if (!isChecked){
            invalidFields.push("ÁSZF");
            $checkbox.removeClass(validClass).addClass(invalidClass);
        } else {
            $checkbox.addClass(validClass).removeClass(invalidClass);
        }

        // Felhasználónév

        let username = $username.val();
        if (username == 0){
            invalidFields.push("Felhasználónév");
            $username.removeClass(validClass).addClass(invalidClass);
        } else {
            $username.addClass(validClass).removeClass(invalidClass);
        }

        // Jelszó

        let password = $password.val();
        if (password.length <= 6){
            invalidFields.push("Jelszó");
            $password.removeClass(validClass).addClass(invalidClass);
        } else {
            $password.addClass(validClass).removeClass(invalidClass);
        }

        // Jelszó megint

        let passwordAgain = $passwordAgain.val();
        if (passwordAgain != password || passwordAgain.length <= 6){
            invalidFields.push("Jelszó megerősítés");
            $passwordAgain.removeClass(validClass).addClass(invalidClass);
        } else {
            $passwordAgain.addClass(validClass).removeClass(invalidClass);
        }

        // Validálás

        if (invalidFields.length == 0){
            $alert.hide();
            $form.hide();
            $successText.show();
        } else {
            $alert.show();
            $alertFieldList.html("");
            $(invalidFields).each(function(i) {
                $alertFieldList.append(`<li>Helytelen a(z) ${invalidFields[i]}</li>`);
              });
        }

        
    })
})
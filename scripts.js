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

        console.log(isChecked)

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
            $checkbox.removeClass(validClass).addClass(invalidClass);
        } else {
            $checkbox.addClass(validClass).removeClass(invalidClass);
        }

        // Jelszó

        let password = $password.val();
        if (password.Length <= 6){
            invalidFields.push("Jelszó");
            $checkbox.removeClass(validClass).addClass(invalidClass);
        } else {
            $checkbox.addClass(validClass).removeClass(invalidClass);
        }

        // Jelszó megint

        let passwordAgain = $passwordAgain.val();
        if (passwordAgain != password ){
            invalidFields.push("Jelszó újra");
            $checkbox.removeClass(validClass).addClass(invalidClass);
        } else {
            $checkbox.addClass(validClass).removeClass(invalidClass);
        }

        // Validálás

        if (invalidFields.Length == 0){
            $alert.hide();
            $form.hide();
            $successText.show();
        } else {
            $alert.show();
            $alertFieldList = "";
            $(invalidFields).each(function(i) {
                $alertFieldList += `<li>Helytelen a ${i}</li>`;
              });
        }

        
    })
})
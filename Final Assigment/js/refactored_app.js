const isValidEmail = (emailInput) =>
{
    var checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return checkEmail.test(emailInput);
}

//MAIN
function main() 
{
    //REFERENCING DOM ELEMENTS TO BE MANIPULATED
    const emailField = document.querySelector('#email-input');
    const subscribeButton = document.querySelector('#subscribe-button');
    const emailError = document.querySelector('#email-error');
    
    //console.log(emailField);
    //console.log(subscribeButton);
    //console.log(emailError);
    //console.log(radioOrder);

    subscribeButton.addEventListener('click', event => 
    {
        const emailInput = emailField.value;
        if(!isValidEmail(emailInput))
        {
            event.preventDefault();
            emailError.innerText = "please add a valid email address";
        }
        else
        {
            emailError.innerText = "thank you! Successfully subscribed";
        }
    });
}

main();
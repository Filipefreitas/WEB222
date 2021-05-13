const isVaildOrderNumber = (radioOrder, orderInput) =>
{
    checkOrder = false;
    if(!radioOrder || (radioOrder && orderInput != ""))
    {
        checkOrder = true;
    }
    return checkOrder;
}

const isValidEmail = (emailInput) =>
{
    var checkEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return checkEmail.test(emailInput);
}

const isValidPostCode = (postCodeInput) =>
{
    var regex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
    return regex.test(postCodeInput);
}

const displayOrderNumber = (radioOrder, orderField) =>
{
    if(radioOrder)
    {
        orderField.classList.remove("hide");
    }
}

const hideOrderNumber = (radioQuestion, orderField, orderError) =>
{
    if(radioQuestion)
    {
        orderField.classList.add("hide");
    }
}

//MAIN
function main() 
{
    //REFERENCING DOM ELEMENTS TO BE MANIPULATED
    const radioQuestion = document.querySelector('#radio-question');
    const radioComment = document.querySelector('#radio-comment');
    const radioOrder = document.querySelector('#radio-order-problem');
    const orderField = document.querySelector('#order-number');
    const postcodeField = document.querySelector('#post-code');
    const errorField = document.querySelector("#post-code-error");
    const emailField = document.querySelector('#email-address');
    const emailError = document.querySelector('#contact-email-error');
    const submitButton = document.querySelector("#btn-submit-contact");
    const submitForm = document.querySelector("#fs-frm");
    const formError = document.querySelector("#form-error");
    const orderError = document.querySelector("#order-error");
    const messageField = document.querySelector("#message");

    //console.log(radioQuestion);
    //console.log(radioComment);
    //console.log(radioOrder);
    //console.log(orderField);
    //console.log(postcodeField);
    //console.log(errorField);
    //console.log(emailField);
    //console.log(emailError);
    //console.log(submitButton);
    //console.log(submitForm);
    //console.log(formError);
    //console.log(orderError);
    //console.log(messageField);

    radioOrder.addEventListener('click', event => 
    {
        displayOrderNumber(radioOrder, orderField);
    });
    
    radioQuestion.addEventListener('click', event => 
    {
        hideOrderNumber(radioQuestion, orderField, orderError);
    });
    
    radioComment.addEventListener('click', event => 
    {
        hideOrderNumber(radioComment, orderField, orderError);
    });

    //check order number field if radio button order is select, when customer start adding the message. To alert customer to provide order number before writing the message
    messageField.addEventListener('click', event => 
    {
        const orderInput = orderField.value;
        if(!isVaildOrderNumber(radioOrder, orderInput))
        {
            orderError.classList.remove("hide");
            orderError.innerText = "please add a valid order number";
        }
        else
        {
            orderError.classList.add("hide");
        }
        return isVaildOrderNumber;
    });
    
    postcodeField.addEventListener('blur', event => 
    {
        const postCodeInput = postcodeField.value;
        if(!isValidPostCode(postCodeInput))
        {
            errorField.classList.remove("hide");
            errorField.innerText = "please add a valid Canadian post code";
        }
        else
        {
            errorField.classList.add("hide");
        }
    });

    emailField.addEventListener('blur', event => 
    {
        const emailInput = emailField.value;
        if(!isValidEmail(emailInput))
        {
            emailError.classList.remove("hide");
            emailError.innerText = "please add a valid email address";
        }
        else
        {
            emailError.classList.add("hide");
        }
        return isValidEmail
    });

    orderField.addEventListener('blur', event => 
    {
        const orderInput = orderField.value;
        if(!isVaildOrderNumber(radioOrder, orderInput))
        {
            orderError.classList.remove("hide");
            orderError.innerText = "please add a valid order number";
        }
        else
        {
            orderError.classList.add("hide");
        }
        return isVaildOrderNumber
    });

    //set the form value attritube to zero to prevent empty submission
    window.addEventListener('load', event => 
    {
        submitForm.value = 0;
    });

    submitButton.addEventListener('click', event => 
    {
        ////test form value
        //console.log(`value before checking ${submitForm.value}`)
        const emailInput = emailField.value;
        const postCodeInput = postcodeField.value;
        const orderInput = orderField.value;

        if(isValidEmail(emailInput) && isValidPostCode(postCodeInput) && isVaildOrderNumber(radioOrder, orderInput))
        {
            submitForm.value = 1;
            submitForm.action = "https://httpbin.org/post"
            formError.classList.add("hide");
        }
        else
        {
            event.preventDefault();           
            formError.classList.remove("hide");
            formError.innerText = "Your form contain error. Please check mandatory fields";
        }
        ////test form value
        //console.log(`value after checking ${submitForm.value}`)
    });
} 

main();
/* Add your JavaScript to this file */

window.addEventListener('load', function(){

    let msg = document.querySelector('.message');
    let email = document.getElementById('email');
    let btn = document.querySelector('.newsletter .btn');  

        btn.addEventListener('click', (event)=>{
        event.preventDefault();
        let info = email.value;

        if (info){
            msg.textContent = `Thank you! Your email address '${info}' has been added to our mailing list!`;
        }
        else{
            msg.textContent = "Please enter a valid email address";
        }
        email.value = '';
    });
});
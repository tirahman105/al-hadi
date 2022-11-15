function message(){
    var Name = document.getElementById('studentName');
    var Age = document.getElementById('age');
    var Parentname = document.getElementById('parentsName');
    // var FBlink = document.getElementById('fbLink');
    var Email = document.getElementById('email');
    var Mobile = document.getElementById('mobile');
    var Address = document.getElementById('address');
    var Country = document.getElementById('country');
    var Course = document.getElementById('course');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || Age.value === '' || Parentname.value === '' || Email.value === '' || Mobile.value === '' || Address.value === '' || Country.value === '' || Course.value === '' ){
        danger.style.display = 'block'; 
    } 

    else{
        setTimeout(() => {
            Name.value = '';
            Age.value = '';
            Parentname.value = '';
            Email.value = '';
            Mobile.value = '';
            Address.value = '';
            Country.value = '';
            Course.value = '';
        }, 2000);

        success.style.display = 'block';
    }
    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);
}


let popup = document.getElementById("popup");

function openPopup(){
  popup.classList.add("open-popup");
}
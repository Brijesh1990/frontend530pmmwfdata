function login()
{
    var email=document.getElementById("email").value;
    var pass=document.getElementById("pass").value;
    if(email=='bkpandey@gmail.com' && pass=='b123')
    {
        // document.write('You are logged in successfully')
        alert('You are logged in successfully')
        window.location='welcome.html'; 
    }
    else 
    {
        alert('Your email and password are Incorect try again')
        window.location='login_logout.html'; 
    }
    
}

function lg()
{
    alert('You are logout  successfully')
    window.location='login_logout.html'; 
}
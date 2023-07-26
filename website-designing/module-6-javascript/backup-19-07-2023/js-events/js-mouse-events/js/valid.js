function test()
{
  if(document.frm.email.value=="")
  {
    alert('Please enter your email address')
    document.frm.email.focus();
    return false;
  }   
//   regular  expresssions
var em= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(!em.test(document.frm.email.value))
{
  alert('Please enter your valid email address')
  document.frm.email.focus();
  return false;
}   

  if(document.frm.pass.value=="")
  {
    alert('Please enter your Password')
    document.frm.pass.focus();
    return false;
  }   
  
var pwd=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
if(!pwd.test(document.frm.pass.value))
{
  alert('Please enter your password with upper,lower and special character and not more than 16 character or mininum 6 charcter')
  document.frm.pass.focus();
  return false;
}   

 
}
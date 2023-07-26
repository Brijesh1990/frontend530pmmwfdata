var myvar;
function MainFunction()
{
    myvar=setTimeout("loader()",2000);
}
function loader()
{
    document.getElementById("loader").style="display:none";
    document.getElementById("mainwebsite").style="display:block";
}

var myvar1;
function MainFunction1()
{
    myvar1=setTimeout("loader1()",200);
}
function loader1()
{
    document.getElementById("loader1").style="display:none";
    document.getElementById("mainwebsite").style="display:block";
}
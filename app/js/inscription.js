function validationCin()
{
    var valid;
    var element=$("#inscriptionCin");
    var reg=new RegExp("^[a-zA-Z]{1,2}[0-9]{4,7}$");
    if(reg.test(element.val()))
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function validationNom()
{
    var valid;
    var element=$("#inscriptionNom");
    var reg=new RegExp("^[a-zA-Z ]{3,}$");
    if(reg.test(element.val()))
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function validationPrenom()
{
    var valid;
    var element=$("#inscriptionPrenom");
    var reg=new RegExp("^[a-zA-Z ]{3,}$");
    if(reg.test(element.val()))
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function validationDateNaissance()
{
    var valid;
    var element=$("#inscriptionDateNaissance");
    var date=new Date(element.val()).getFullYear();
    var d = new Date().getFullYear();
    if((d-date)>18)
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function validationEmail()
{
    var valid;
    var element=$("#inscriptionEmail");
    var reg=new RegExp("^[a-zA-Z0-9._-]{5,}\@[a-z]{5,7}\.[a-z]{2,3}$");
    if(reg.test(element.val()))
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function validationNumeroDeTelephone()
{
    var valid;
    var element=$("#inscriptionNumeroDeTelephone");
    var reg=new RegExp("^(06|\\+2126|\\+2125|05)([0-9]{8})$");
    if(reg.test(element.val()))
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function validationMotDePass()
{
    var valid;
    var element=$("#inscriptionMotDePass");
    var reg=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(reg.test(element.val()))
    {
        valid=true;
        element.css("border-color", "#2893DA");
    }
    else
    {
        valid=false;
        element.css("border-color", "red");
    }
    return valid;
}
function confirmationMotDePass()
{
    if(validationMotDePass())
    {
        var valid;
        var element1=$("#inscriptionMotDePass");
        var element=$("#confirmationMotDePass")
        if(element.val()==element1.val())
        {
            valid=true;
            element.css("border-color", "#2893DA");
        }
        else
        {
            valid=false;
            element.css("border-color", "red");
        }
        return valid;
    }
}
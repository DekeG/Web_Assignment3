function validate(form) {
    fail = validateForename(form.forename.value)
    fail += validateNumber(form.number.value)
    fail += validateEmail(form.email.value)
    fail += validateEnquiry(form.enquiry.value)
    if (fail == "") return true
    else { alert(fail); return false }
}
function validateForename(field) {
    if (field == "") return "No Forename was entered.\n" 
    else if(!/[a-z]/.test(field) || ! /[A-Z]/.test(field))
    return "Enter text and Your name should start with a capital letter"
    return ""
    }
    
    function validateNumber(field) {
        if (isNaN(field)) return "Numbers only allowed.\n"
        else if (field =="")
        return "No Numbers entered.\n"
        return ""
        }
  
    function validateEmail(field) {
            if (field == "") return "No Email was entered.\n"
            else if (!((field.indexOf(".") > 0) &&
        (field.indexOf("@") > 0)) ||
        /[^a-zA-Z0-9.@_-]/.test(field))
        return "The Email address is invalid.\n"
        return ""
}
function validateEnquiry(field) {
    if (field == "") return "No enquiry entered.\n" 
    return ""
    }
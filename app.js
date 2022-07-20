formValidate = () =>{
    flag = true
    if (!nameValidate())
        flag = false
    if (!addValidate())
        flag = false
    if (!emailValidate())
        flag = false
    if (!passValidate())
        flag = false
    if (!conpassValidate())
        flag = false
    if(!phoneValidate())
        flag = false
    
    if(flag)
        document.getElementById("result").innerText = "Regex Validation Success"

    return false
}


nameValidate = () => {
    let str = document.getElementById("name").value
    pattern = /\w{8,15}/
    if(pattern.test(str)){
        document.getElementById("sname").innerText = ""
        return true
    }
    else if(str === ""){
        document.getElementById("sname").innerText = "Username must not be empty."
        return false
    }
    else{
        document.getElementById("sname").innerText = "Username must be alphanumeric and between 8-15 characters."
        return false
    }
}

addValidate = () => {
    let str = document.getElementById("address").value
    pattern = /./
    if(pattern.test(str)){
        document.getElementById("sadd").innerText = ""
        return true
    }
    else{
        document.getElementById("sadd").innerText = "Address must not be empty."
        return false
    }
}

emailValidate = () => {
    let str = document.getElementById("email").value
    pattern = /\w+@\w+.\w+/
    if(pattern.test(str)){
        document.getElementById("smail").innerText = ""
        return true
    }
    else if(str === ""){
        document.getElementById("smail").innerText = "Email must not be empty."
        return false
    }
    else{
        document.getElementById("smail").innerText = "Invalid Email."
        return false
    }
}


passValidate = () => {
    let str = document.getElementById("pwd").value
    pattern = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{4,}$/
    if(pattern.test(str)){
        document.getElementById("spass").innerText = ""
        return true
    }
    else if(str === ""){
        document.getElementById("spass").innerText = "Password must not be empty."
        return false
    }
    else{
        document.getElementById("spass").innerText = "Password must have at least one lowercase, an uppercase, a digit and a special character."
        return false
    }
}


conpassValidate = () => {

    let str = document.getElementById("pwd").value
    if(document.getElementById("cpwd").value !== ""  && document.getElementById("cpwd").value === str){
        document.getElementById("sconpass").innerText = ""
        return true
    }
    else{
        document.getElementById("sconpass").innerText = "Password and Confirm Password do not match."
    }
}

phoneValidate = () => {
    let num = document.getElementById("phone").value
    pattern = /^[6|7|8|9]\d{9}/
    if(pattern.test(num.toString())){
        document.getElementById("sphone").innerText = ""
        return true
    }
    else if(num.toString === ""){
        document.getElementById("sphone").innerText = "Phone must not be empty."
        return false
    }
    else{
        document.getElementById("sphone").innerText = "Phone must contain only 10 digits and be valid."
        return false
    }
}
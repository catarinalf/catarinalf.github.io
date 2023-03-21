function copyEmailToClipboard(){
    var textArea = document.createElement("textarea");
    var email = "catarina.filipa.1517@gmail.com";
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        if(successful)
        {
            alert("Email copied to clipboard")
            textArea.remove()
        }
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } 
    catch (err) 
    {
        console.log('Oops, unable to copy');
    }
}
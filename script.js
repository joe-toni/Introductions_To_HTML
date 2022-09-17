let sample = ``;    
let content = ``;
let center = document.getElementById("focus");
function setSubject(name)
{
    let subject = document.getElementById(name);
    sample =  subject.dataset.content;
    content = subject.innerHTML;
    localStorage.setItem('subject', sample);
    center.innerHTML= content;
}

setSubject("intro");

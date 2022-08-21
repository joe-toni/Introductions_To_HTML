var total = ``;                                        

function setSubject(name)
{
    let subject = document.getElementById(name);
    total =  subject.dataset.content;
    localStorage.setItem('subject', total);
}

setSubject("intro");
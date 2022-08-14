var opening = 
`
<html>
<body>
`;

var content =``;

var ending = 
`
</body>
</html>
`

var total = ``;

function setSubject(name)
{
    let subject = document.getElementById(name);
    total =  opening + subject.dataset.content + ending;
    localStorage.setItem('subject', total);
}
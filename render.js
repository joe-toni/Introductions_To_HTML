let workarea = document.getElementById("current");

var opening = 
`
<!DOCTYPE html>
<html lang="en-us">
<head>
    <title>HTML Playground</title>
    <link rel="icon" type="image/x-icon" href= "favicon.ico">
    <meta charset="UTF-8">
    <meta name="author" content="Jose Faburrieta">
    <meta name="description" content="A personal project meant for checking out some HTML components">
    <meta name="keywords" content="HTML, testing, elements">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
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
    workarea.value = subject.dataset.content;


}

function current() 
{
    let content = document.getElementById("current").value;
    total = opening + content + ending;
}

function display()
{
    let location = document.getElementById("location");
    location.setAttribute("srcdoc", total);
}

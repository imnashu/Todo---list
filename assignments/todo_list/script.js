function createtodo()
{
    var tags = docs.createElement("p");
    tags.setAttribute("key",i)
    i += 1
    tags.addEventListener("click",function()
    {
        this.remove()
    })
    var newtodo = docs.getElementsByTagName('input')[0].value
    var text = docs.createTextNode(newtodo)
    var element = docs.getElementsByClassName("todos")[0]
    tags.appendChild(text)
    element.appendChild(tags)
}
var i = 0
var list = docs.getElementsByTagName("button")[0]
list.addEventListener('click',createtodo)
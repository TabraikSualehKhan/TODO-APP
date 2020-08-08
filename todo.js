function addtodo() {
    var list = document.getElementById("list");

    var todo_item = document.getElementById("todo-item")

    // create li tag with text node
    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)

    // delete button 
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode ("DELETE")
    delbtn.setAttribute("onclick","deleteitem(this)")
    delbtn.setAttribute("class","btn")
    delbtn.appendChild(deltext)
    li.appendChild(delbtn)

    // create edit button
    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("EDIT")
    editbtn.appendChild(edittext)
    editbtn.setAttribute("onclick","edititem(this)")

    li.appendChild(editbtn)

    list.appendChild(li)
    todo_item.value=" "
 
}

function deleteitem(e){
    // console.log(e.parentNode)
    e.parentNode.remove()
    
}

function deleteall(){
    list.innerHTML=""
}

function edititem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editvalue = prompt("Enter edit value", val);
    e.parentNode.firstChild.nodeValue=editvalue;
    console.log(e.parentNode.firstChild);
}


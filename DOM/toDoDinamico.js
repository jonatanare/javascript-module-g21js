let toDos = function(cantidad,nombreTarea,title){
    const toDoList = document.getElementById('toDoList');
    const ul = document.createElement('ul');
    const h1 = document.createElement('h1');
    h1.innerHTML = title
    toDoList.appendChild(h1)
    toDoList.appendChild(ul)
    for (let i = 1; i <= cantidad; i++) {
        let li = document.createElement('li');
        li.innerText = `${nombreTarea} - ${i}`
        ul.append(li);      
    }
}
function createLi(nombreTarea){
    const li = document.createElement('li');
    li.innerText = text
}
toDos(20, 'Tarea', 'To - Do - List')
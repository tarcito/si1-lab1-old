document.getElementById('adicionar').onclick = adiciona;
    
function adiciona () {
	add_li("list_assuntos", document.getElementById('assunto').value);
}

function add_li(list, text) {
	var list = document.getElementById(list);
	var li = document.createElement("li");
	var bt = document.createElement("button");
	li.innerHTML = text;
	list.appendChild(li);
}
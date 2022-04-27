var info = []
var task = document.querySelector("#idtextbox").value;
var dplist = document.querySelector("#dplist");

function addfun() {
    let taska = document.getElementById("idtextbox");
    if (taska.value == "") {
        alert("Please enter the items")
    } else {
        let task = document.querySelector("#idtextbox");
        info.push(task.value);
        var clit = document.getElementById("idbtnclr");
        clit.style.display = "block"
            // bud.style.display = "none";
            // bue.style.display = "none";
        task.value = ""
        dis();
    }
}

function dis() {
    dplist.innerHTML = ""
    info.forEach((info, i) => {
        dplist.innerHTML += `<li class="tasktext" id="idtasktext"><a class="listin">${info}<a><button id="ediid" class="edit" onclick="edit(${i})"><i id='edit' class='fa-solid fa-pen-to-square'></i></button><button  id="delid" onclick="del(${i})" class="delete"><i id='delet' class="fa-solid fa-trash-can" type'></i></button></li>`
    })
}

function clrfun() {
    info = [];
    var clit = document.getElementById("idbtnclr");
    clit.style.display = "none"
    dis();
}

function del(i) {
    info.splice(i, 1);
    dis();
}

function edit(i) {
    let taska = document.getElementById("idtextbox");
    taska.value = info[i]
    info.splice(i, 1);
}

function fil() {
    let input = document.getElementById("idtextbox");
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('dplist');
    let li = ul.getElementsByTagName("li");
    let bud = document.getElementById("ediid");
    let bue = document.getElementById("delid");
    for (i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0];
        let textValue = a.textContent || a.innerText;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
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
        task.value = ""
        dis();
    }
}

function dis() {
    dplist.innerHTML = ""
    info.forEach((info, i) => {
        dplist.innerHTML += `<li class="tasktext" id="idtasktext"><a class="listin">${info}<a><button id="${i}ediid" class="edit" onclick="edit(${i})"><i id='edit' class='fa-solid fa-pen-to-square'></i></button><button  id="delid" onclick="del(${i})" class="delete"><i id='delet' class="fa-solid fa-trash-can" type'></i></button></li>`
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
var st = document.getElementById("str")
var sub = document.getElementById("idbtnsub");
var su = document.getElementById("idedisub");
var taskad = document.getElementById("idtextbox");

function edit(i) {
    st.value = i
    taskad.value = info[i]
    su.style.display = "block";
    sub.style.display = "none"
}

var le = document.getElementById("idedisub");
le.addEventListener("click", function() {
    let ig = st.value
    info[ig] = taskad.value
    su.style.display = "none";
    sub.style.display = "block";
    taskad.value = ""
    dis();
})

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
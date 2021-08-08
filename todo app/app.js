console.log("welcome")
showNote();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    let myTxt = document.getElementById("myTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }
    noteobj.push(myTxt.value);
    localStorage.setItem("notes", JSON.stringify(noteobj));
    myTxt.value = '';
    console.log(noteobj)
    showNote();
})


function showNote() {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }

    let html = ""
    noteobj.forEach(function (element, index) {
        html += `
        <div class="card my-2 mx-2 notecard" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text"> ${element}.</p>
                    <button id="${index}" onclick="del(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>
        `
    });

    let notElem = document.getElementById('notes')
    if (noteobj.length != 0) {
        notElem.innerHTML = html;
    }
    else {
        notElem.innerHTML = `Nothing to show! Use "Add a Note".`
    }

}

function del(index) {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        noteobj = [];
    }
    else {
        noteobj = JSON.parse(notes);
    }

    noteobj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(noteobj));
    showNote();

}

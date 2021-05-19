var addButton = document.getElementById("add-button"); 
    addButton.addEventListener("click",loadList());
var emailBox = document.getElementById("email-box");
var nameBox = document.getElementById("name-box");
let list = document.getElementById("record-list");


function newToDoItem(name) {         //function to add new item in the list
    var recordList = document.createElement("li");
    var recordText = document.createTextNode(name);
  
    recordList.appendChild(recordText);
    emailBox.value="";
    nameBox.value="";
    list.appendChild(recordList);
}

function loadList() {

    var records = [];

    records = TodoModel.find({},(err,docs)=>{
        if(err) 
        return res.json(err,docs);
        else   
        arr=  {TodoModels : docs};
    });

        for (var i = 0; i < records.length; i++) {
            var record = records[i];
            newToDoItem(record.name);
        }
}
loadList();

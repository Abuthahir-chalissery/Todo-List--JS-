
let inputText = document.getElementById("input");
let addBtn = document.getElementById("addbtn");
let taskLIst = document.getElementById("task-list");
// let error;

let arr = [];

let inputData;

function setLocalStorage() {
    localStorage.setItem("tasks",JSON.stringify(arr))
}

function getLocalStorage(){
    if (localStorage.getItem('tasks')) {
        arr = JSON.parse(localStorage.getItem('tasks'))
        buildUI()
    }
    // else{
    //     error.textContent = "Not found Data..."
    // }

}

function buildUI () {
    taskLIst.textContent = ""
    arr.forEach((item) =>{

        // Create DOM elements now
    let li = document.createElement('li');
    li.classList = " flex items-center relative border-1 p-1 rounded-sm border-gray-500 bg-gray-50"
    let spanli = document.createElement('span');
    li.appendChild(spanli)
    spanli.classList = "flex "
    spanli.textContent = item;

    taskLIst.appendChild(li);
    inputText.value = '';
    inputText.focus()  


    // Create Edit Button 
    let editBtn = document.createElement('img')
    editBtn.src = "images/pencil.png"
    editBtn.alt = "Sample Image"
    editBtn.className = "edit size-5 cursor-pointer absolute right-10 ";
    // editBtn.textContent = "Edit";
    li.appendChild(editBtn)

    // Create Trash Button
    let DeleteBtn = document.createElement('img')
    DeleteBtn.src = "images/delete.png";
    DeleteBtn.className = "delete size-5 cursor-pointer absolute right-1";
    li.appendChild(DeleteBtn)
    });
}

// Step-2
function additems(event){
    
    inputData = inputText.value;

    if (inputData != ''){
        arr.push(inputData)
        setLocalStorage()
        buildUI()
    }else
        error()
        

}


// Delete item from tasks list

function deleteItems(event) {
    if (event.target.classList[0] === "delete"){
        let item = event.target.parentElement;
        let text = item.querySelector("span").textContent;
        // let itemId = parseInt(item.dataset.itemId);
        item.remove()
        deletemessage()
        arr = arr.filter(item => item !== text)

        setLocalStorage()
        

    }
}


// Edit the text

function editText(event) {
    if (event.target.classList[0] === "edit"){
        let editedText = prompt("Please add new text")
        let item = event.target.parentElement;
        let spanli = item.querySelector('span')
        spanli.textContent = editedText;
        editmessage()
        // let spanText = spanli.textContent;
        // console.log(spanText)

        // inputText.value = spanText;
        
        
    }

}





// Step-1
// Add event

addBtn.addEventListener('click', additems);
taskLIst.addEventListener('click', deleteItems)
taskLIst.addEventListener('click', editText);


// Local Storage
getLocalStorage();


// Error
function error(){
    document.getElementById("error").textContent = "Enter anything...";
    document.getElementById("error").classList = 'bg-red-300 p-1 rounded-md text-center font-mono border-1 border-gray-600'

    setTimeout(() => {
        document.getElementById("error").textContent = "TODO-LIST"
        document.getElementById("error").classList = 'bg-gray-300 p-1 rounded-md text-center font-mono border-1 border-gray-600'
    }, 3000);
}


function deletemessage(){
    document.getElementById("error").textContent = "Deleted....";
    document.getElementById("error").classList = 'bg-red-300 p-1 rounded-md text-center font-mono border-1 border-gray-600'


    setTimeout(() => {
        document.getElementById("error").textContent = "TODO-LIST"
        document.getElementById("error").classList = 'bg-gray-300 p-1 rounded-md text-center font-mono border-1 border-gray-600'
    }, 2000);
}



function editmessage(){
    document.getElementById("error").textContent = "Edited...";
    document.getElementById("error").classList = 'bg-green-300 p-1 rounded-md text-center font-mono border-1 border-gray-600'


    setTimeout(() => {
        document.getElementById("error").textContent = "TODO-LIST"
        document.getElementById("error").classList = 'bg-gray-300 p-1 rounded-md text-center font-mono border-1 border-gray-600'
    }, 2000);
}





















// function displayInput() {
//     var input = document.getElementById('input').value
    
    

//     if (input == ''){
//         var error = document.getElementById('error')
//         error.textContent = 'Enthelum ezhudhedaaa...'
//         setTimeout(() => {
//             error.remove();
//         }, 5000);

//     }else{

        

//          // Create the main div 
//         let taskDiv = document.createElement('div');
//         taskDiv.className = "w-100 h-auto p-2 items-center rounded-sm bg-gray-200  list-none text-lg font-semibold capitalize flex justify-between";

//         // Create the div for the task name
//         let taskNameDiv = document.createElement('div');
//         let listItem    = document.createElement('li');
//         listItem.textContent = input;

//         // Clear the input field
//         document.getElementById('input').value = "";
//         taskNameDiv.appendChild(listItem);

//         // Create the div for the buttons
//         const buttonDiv = document.createElement('div')
//         buttonDiv.className = "space-x-2"

//         // Create the Update button
//         var updateButton = document.createElement('button')
//         updateButton.className = "bg-orange-300 p-1 rounded-md cursor-pointer hover:bg-orange-500";
//         updateButton.textContent = 'Update';
        


//         const deleteButton = document.createElement('button');
//         deleteButton.className = " bg-red-300 p-1 rounded-md cursor-pointer hover:bg-red-500";
//         deleteButton.textContent = 'Delete'


//         buttonDiv.appendChild(updateButton);
//         buttonDiv.appendChild(deleteButton);

//         taskDiv.appendChild(taskNameDiv);
//         taskDiv.appendChild(buttonDiv);

//         document.getElementById('taskContainer').appendChild(taskDiv)


//     }
    

// }



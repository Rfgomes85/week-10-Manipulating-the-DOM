let id = 0;

document.getElementById('add').addEventListener('click', () => {
let createdDate = new Date();
let table = document.getElementById('list');
let row = table.insertRow(1);
row.setAttribute('id', `item-${id}`);
row.insertCell(0).innerHTML = document.getElementById('new-job').value; //Job
row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`; //Date Created
row.insertCell(2).innerHTML = document.getElementById('hire-date').value; //Hire Date
row.insertCell(3).innerHTML = document.getElementById('end-date').value; //End Date
let actions = row.insertCell(4); //Actions Button
actions.appendChild(createDeleteButton(id++));//Delete Button Function
document.getElementById('new-job').value = ''; //returns to blank action job created for good UI experience
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}
let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let jobInput = document.getElementById('new-job');
    let hireDateInput = document.getElementById('hire-date');
    let endDateInput = document.getElementById('end-date');

    // create alert to provide information into job input field
    if (jobInput.value === '') {
        alert('Please enter a job name.');
        return;
    }
// create alert to provide information into hire date input field
    if (hireDateInput.value === '') {
        alert('Please enter a hire date.');
        return;
    }
// create alert to provide information into end input field
    if (endDateInput.value === '') {
        alert('Please enter an end date.');
        return;
    }

    let createdDate = new Date();
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = jobInput.value; //Job
    row.insertCell(1).innerHTML = `${createdDate.getFullYear()}-${createdDate.getMonth() + 1}-${createdDate.getDate()}`; //Date Created
    row.insertCell(2).innerHTML = hireDateInput.value; //Hire Date
    row.insertCell(3).innerHTML = endDateInput.value; //End Date
    let actions = row.insertCell(4); //Actions Button
    actions.appendChild(createDeleteButton(id++));//Delete Button Function
    jobInput.value = ''; //returns to blank action job created for good UI experience
    hireDateInput.value = ''; // Clear Hire Date input field
    endDateInput.value = ''; // Clear End Date input field
});

function createDeleteButton(id) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-info';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        console.log(`Deleting row with id: item-${id}`);
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}

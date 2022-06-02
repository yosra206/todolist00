var selectedRow = null

function onFormSubmit(e) {
    event.preventDefault();
    var formData = readFormData();
    if (selectedRow == null) {
        insertNewRecord(formData);
    } else {
        updateRecord(formData);
    }
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["userName"] = document.getElementById("userName").value;
    formData["userId"] = document.getElementById("userId").value;
    formData["userBalance"] = document.getElementById("userBalance").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.userName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.userId;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.userBalance;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<button class="btn1" onClick="onEdit(this)">Edit user</button> <button  class="btn2" onClick="onDelete(this)">Remove user</button>`;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("userName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("userId").value = selectedRow.cells[1].innerHTML;
    document.getElementById("userBalance").value = selectedRow.cells[2].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.userName;
    selectedRow.cells[1].innerHTML = formData.userId;
    selectedRow.cells[2].innerHTML = formData.userBalance;

}

function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}
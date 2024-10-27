function addUser() {
    
    var userText = document.getElementById('user').value;
    var priority = document.getElementById('priority').value;
    var dueDate = document.getElementById('dueDate').value;
    
    if (userText !== '') {
        var userList = document.getElementById('userList');
        var newRow  = document.createElement('tr');
        
        newRow.innerHTML = `
            <td>${userText}</td>
            <td>${priority}</td>
            <td>${dueDate}</td>
            <td><button onclick="removeUser(this)">Remove</button></td>
        `;
        
        userList.appendChild(newRow);

        document.getElementById('user').value = '';
        document.getElementById('priority').value = '';
        document.getElementById('dueDate').value = '';
    }
    
}
function removeUser(button) {
    var row = button.parentElement.parentElement;
    row.remove();
}

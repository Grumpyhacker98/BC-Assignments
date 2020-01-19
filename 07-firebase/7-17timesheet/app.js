var config = {
    apiKey: "AIzaSyD-AV2aTE2P4bKpZOuqcnyinFrZdtX7mbI",
    authDomain: "followalong-5844d.firebaseapp.com",
    databaseURL: "https://followalong-5844d.firebaseio.com",
    projectId: "followalong-5844d",
    storageBucket: "followalong-5844d.appspot.com",
    messagingSenderId: "879265537909",
    appId: "1:879265537909:web:ef7dbdb47009f2db53bd3c",
    measurementId: "G-XDQ504P4MV"
};

firebase.initializeApp(config);
  
var database = firebase.database();

var newdiv
// on value refresh values from firebase
database.ref().on("child_added", function(childSnapshot) {

    data = childSnapshot.val().newEmployee

    employment = Math.floor(moment().diff(moment(data[2]), 'months', true))

    netWage = employment * data[3]

    var table = document.getElementById("Employee-Display");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = data[0];
    cell2.innerHTML = data[1];
    cell3.innerHTML = data[2];
    cell4.innerHTML = employment;
    cell5.innerHTML = data[3];
    cell6.innerHTML = netWage;
    
});

// enters new employee data into firebase
$("#Submit-Data").on("click", function(event){
    event.preventDefault()

    newEmployee = []

    name = $("#New-Name").val()
    role = $("#New-Role").val()
    date = $("#New-Date").val()
    rate = $("#New-Rate").val()

    newEmployee.push(name)
    newEmployee.push(role)
    newEmployee.push(date)
    newEmployee.push(rate)

    database.ref().push({
        newEmployee
    })

    $("#New-Name").val("")
    $("#New-Role").val("")
    $("#New-Date").val("")
    $("#New-Rate").val("")

})

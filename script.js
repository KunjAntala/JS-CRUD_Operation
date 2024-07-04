function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var phone_no = document.getElementById("phone_no").value;
    var city = document.getElementById("city").value;

    if (name == "") {
        alert("Name is required");
        return false;
    }
    if (email == "") {
        alert("Email is required");
        return false;
    }
    if (age == "") {
        alert("Age is required");
        return false;
    }
    if (phone_no == "") {
        alert("Phone No. is required");
        return false;
    }
    if (city == "") {
        alert("City is Required");
        return false;
    }
    return true;
}

function showData() {
    var employeeList;
    const tableElem = document.querySelector("#crudTable tbody")
    const employeeData =  JSON.parse(localStorage.getItem("employeeList")) || []
    if (employeeData.length === 0 || employeeList === "")   {
        employeeList = [];
    } else {
        employeeList = employeeData;
    }

    var empdata = "";
    employeeList?.map(function (element, index) {
    console.log(element)

        empdata += "<tr>";
        empdata += "<td>" + element.name + "</td>";
        empdata += "<td>" + element.email + "</td>";
        empdata += "<td>" + element.age + "</td>";
        empdata += "<td>" + element.phone_no + "</td>";
        empdata += "<td>" + element.city + "</td>";
        empdata += '<td><button onclick="editData(' + index + ')" class="btn btn-warning">Edit</button><button onclick="deleteData(' + index + ')" class="btn btn-danger m-2">Delete</button></td>';
        empdata += "</tr>";
    })
    console.log(tableElem)
    tableElem.innerHTML = empdata;
}


function AddData() {
    if (validateForm() == true) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var age = document.getElementById("age").value;
        var phone_no = document.getElementById("phone_no").value;
        var city = document.getElementById("city").value;

        var employeeList;
        if (localStorage.getItem("employeeList") == null) {
            employeeList = [];
        } else {
            employeeList = JSON.parse(localStorage.getItem("employeeList"));
        }

        employeeList.push({
            name: name,
            email: email,
            age: age,
            phone_no: phone_no,
            city : city
        });

        localStorage.setItem("employeeList", JSON.stringify(employeeList));
        showData();
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("age").value = "";
        document.getElementById("phone_no").value = "";
        document.getElementById("city").value = "";
    }
}

function editData(index) {
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";

    var employeeList;
    const employeeData =  JSON.parse(localStorage.getItem("employeeList")) || []
    if (employeeData.length === 0 || employeeList === "")   {
        employeeList = [];
    } else {
        employeeList = employeeData;
    }

    document.getElementById("name").value = employeeList[index].name;
    document.getElementById("email").value = employeeList[index].email;
    document.getElementById("age").value = employeeList[index].age;
    document.getElementById("phone_no").value = employeeList[index].phone_no;
    document.getElementById("city").value = employeeList[index].city;

    document.querySelector("#update").onclick = function() {
        if (validateForm() == true) {
            employeeList[index].name = document.getElementById("name").value;
            employeeList[index].email = document.getElementById("email").value;
            employeeList[index].age = document.getElementById("age").value;
            employeeList[index].phone_no = document.getElementById("phone_no").value;
            employeeList[index].city = document.getElementById("city").value;

            localStorage.setItem("employeeList", JSON.stringify(employeeList));
            showData();
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("age").value = "";
            document.getElementById("phone_no").value = "";
            document.getElementById("city").value = "";

            document.getElementById("submit").style.display = "block";
            document.getElementById("update").style.display = "none";
        }
    }
}

function deleteData(index) {
    var employeeList;
    const employeeData =  JSON.parse(localStorage.getItem("employeeList")) || []
    if (employeeData.length === 0 || employeeList === "")   {
        employeeList = [];
    } else {
        employeeList = employeeData;
    }

    employeeList.splice(index, 1);
    localStorage.setItem("employeeList", JSON.stringify(employeeList));
    showData();
}

showData()
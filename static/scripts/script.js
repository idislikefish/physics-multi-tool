// Function to move to the selected topic
function move_to_topic() {
    // Get the value of the selected option from the dropdown menu
    var selection = document.getElementById("select").value;

    // Check if a topic is selected
    if (selection === "null") {
        // If not selected, show an alert message
        alert("Please choose a topic from the dropdown menu.");
    } else {
        // If a topic is selected, redirect to the corresponding page
        document.location.href = "/topics/" + selection;
    }
}

// Function to calculate Newton's second law of motion
function newton2() {
    // Get the values of mass and acceleration from the input fields
    var mass = document.getElementById("mass").value;
    var acc = document.getElementById("acc").value;
    var answer = document.getElementById("answer"); // Get the element to display the answer

    // Check if both mass and acceleration values are provided
    if (mass && acc) {
        // If both values are provided, calculate the force and display it
        answer.innerText = "F = " + mass * acc + "N";
    } else {
        // If any of the values is missing, display an empty answer
        answer.innerText = "F =";
    }
}

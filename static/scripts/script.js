function move_to_topic() {
    var selection = document.getElementById("select").value;

    document.location.href = "/topics/" + selection
}

function newton2() {
    var mass = document.getElementById("mass").value;
    var acc = document.getElementById("acc").value;
    var answer = document.getElementById("answer");

    if (mass && acc) {
        answer.innerText = "F = " + mass * acc;
    } else {
        answer.innerText = "F ="
    }
}


const missionForm = document.getElementById("missionForm");
const missionInput = document.getElementById("missionInput");
const missionList = document.getElementById("missionList");
const missionCount = document.getElementById("missionCount");
const emptyMessage = document.getElementById("emptyMessage");
const colourButton = document.getElementById("colourButton");

const colours = [
    "#dbeafe",
    "#dcfce7",
    "#fce7f3",
    "#fef3c7",
    "#ede9fe"
];

let colourIndex = 0;


function updateMissionCount() {
    missionCount.textContent = missionList.children.length;

    if (missionList.children.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}


function addMission() {
    const missionName = missionInput.value.trim();

    if (missionName === "") {
        alert("Please enter a mission!");
        return;
    }

    const listItem = document.createElement("li");
    listItem.classList.add("mission-item");

    const missionText = document.createElement("span");
    missionText.textContent = missionName;
    missionText.classList.add("mission-text");

    missionText.addEventListener("click", function () {
        missionText.classList.toggle("completed");
    });

    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.type = "button";

    
    deleteButton.addEventListener("click", function () {
        listItem.remove();
        updateMissionCount();
    });

    listItem.appendChild(missionText);
    listItem.appendChild(deleteButton);

    missionList.appendChild(listItem);

    missionInput.value = "";


    updateMissionCount();

    missionInput.focus();
}


missionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addMission();
});


colourButton.addEventListener("click", function () {
    document.body.style.backgroundColor = colours[colourIndex];

    colourIndex = (colourIndex + 1) % colours.length;
});


updateMissionCount();



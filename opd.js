const patientQueue = [];
let waitingTime = 0;
let uhid = '';

// function to add patient to the queue
function addPatient(patientName, uhid, waitingTime) {
    patientQueue.push({ name: patientName, uhid: uhid, waitingTime: waitingTime });
    updateQueueDisplay();
    updateWaitingTimeDisplay();
    updateUHIDDisplay();
}

// function to update the patient queue display
function updateQueueDisplay() {
    const patientList = document.getElementById('patient-list');
    patientList.innerHTML = '';
    patientQueue.forEach((patient) => {
        const patientListItem = document.createElement('li');
        patientListItem.textContent = `${patient.name} (UHID: ${patient.uhid}, Waiting Time: ${patient.waitingTime} minutes)`;
        patientList.appendChild(patientListItem);
    });
}

// function to update the waiting time display
function updateWaitingTimeDisplay() {
    const waitingTimeDisplay = document.getElementById('waiting-time-display');
    waitingTimeDisplay.textContent = `Waiting Time: ${waitingTime} minutes`;
}

// function to update the UHID display
function updateUHIDDisplay() {
    const uhidDisplay = document.getElementById('uhid-display');
    uhidDisplay.textContent = `UHID: ${uhid}`;
}

// add event listener to the form submission
document.getElementById('add-patient-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const patientName = document.getElementById('patient-name').value;
    const uhid = document.getElementById('uhid').value;
    const waitingTime = document.getElementById('waiting-time').value;
    addPatient(patientName, uhid, waitingTime);
    document.getElementById('add-patient-form').reset();
});
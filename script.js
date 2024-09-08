// script.js
let opdQueue = [];
let bedAvailability = 10;
let inventory = [];
let admittedPatients = [];

// OPD Queue
document.getElementById('add-patient-btn').addEventListener('click', () => {
    const patientName = prompt('Enter patient name:');
    if (patientName) {
        opdQueue.push(patientName);
        updateOpdQueueList();
    }
});

function updateOpdQueueList() {
    const opdQueueList = document.getElementById('opd-queue-list');
    opdQueueList.innerHTML = '';
    opdQueue.forEach((patient, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${patient}`;
        opdQueueList.appendChild(li);
    });
}

// Bed Availability
document.getElementById('admit-patient-btn').addEventListener('click', () => {
    const patientName = document.getElementById('patient-name').value;
    const bedType = document.getElementById('bed-type').value;
    if (patientName && bedType) {
        if (bedAvailability > 0) {
            bedAvailability--;
            updateBedAvailabilityCount();
            admittedPatients.push({ name: patientName, bedType: bedType });
            updateAdmittedPatientsList();
            alert(`Patient ${patientName} has been admitted to a ${bedType} bed.`);
            // Remove patient from OPD queue
            const patientIndex = opdQueue.indexOf(patientName);
            if (patientIndex !== -1) {
                opdQueue.splice(patientIndex, 1);
                updateOpdQueueList();
            }
        } else {
            alert('No beds available.');
        }
    }
});

function updateBedAvailabilityCount() {
    const bedAvailabilityCount = document.getElementById('bed-availability-count');
    bedAvailabilityCount.textContent = `Bed Availability: ${bedAvailability}`;
}

function updateAdmittedPatientsList() {
    const admittedPatientsList = document.getElementById('admitted-patients-list');
    admittedPatientsList.innerHTML = '';
    admittedPatients.forEach((patient, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${patient.name} - ${patient.bedType}`;
        admittedPatientsList.appendChild(li);
    });
}

// Discharge Patient
document.getElementById('discharge-patient-btn').addEventListener('click', () => {
    const patientName = document.getElementById('discharge-patient-name').value;
    if (patientName) {
        const patientIndex = admittedPatients.findIndex(patient => patient.name === patientName);
        if (patientIndex !== -1) {
            admittedPatients.splice(patientIndex, 1);
            bedAvailability++;
            updateBedAvailabilityCount();
            updateAdmittedPatientsList();
            alert(`Patient ${patientName} has been discharged.`);
        } else {
            alert(`Patient ${patientName} not found.`);
        }
    }
});
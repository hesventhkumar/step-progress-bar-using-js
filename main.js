const steps = document.querySelectorAll('.step');
const buttons = document.querySelectorAll('.button');
let currentStep = 0;

function updateSteps() {
    steps.forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index === currentStep) {
            step.classList.add('active');
            step.querySelector('i').textContent = '✓';
        } else if (index < currentStep) {
            step.classList.add('completed');
            step.querySelector('i').textContent = '✓';
        } else {
            step.querySelector('i').textContent = 'X';
        }
    });
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index === 0) {
            if (currentStep > 0) {
                currentStep--;
            }
        } else {
            if (currentStep < steps.length - 1) {
                currentStep++;
            }
        }
        updateSteps();
    });
});

updateSteps(); 
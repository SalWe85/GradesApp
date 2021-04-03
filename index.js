function getNumberOfGrades(grades) {
    // return the number of grades
    return grades.length;
}

function getAverageValue(grades) {
    // return the average value of all grades (sum of all grades / total number of grades)
    let sum = 0;
    grades.forEach(grade =>{
        sum += grade;
    })
    let roundy = sum / grades.length;
    return Math.round(roundy);
}

function getLowestValue(grades) {
    // return the lowest grade from the array
    return Math.min(...grades);
}

function getHighestValue(grades) {
    // return the highest grade from the array
    return Math.max(...grades);
}

function getPassingGrades(grades) {
    // return a CSV of all passing grades (10 and above)
    return grades.filter(grade =>grade >= 10).join(", ");
}

function getFailingGrades(grades) {
    // return a CSV of all failing grades (9 and below)
    return grades.filter(grade => grade <= 9).join(", ");
}

function getRaisedGrades(grades) {
    // return a CSV of all the grades raised by 2 (grades should not exceed 20)
    return grades.map(grade => {
        const sum = grade + 2;
        if (sum > 20) {
            return 20;
        } return sum;
    }).join(", ");
}


const gradesForm = document.querySelector("#grades-form");
const yourGrade = document.querySelector("#your-grade");

const grades = [12, 19, 10, 4, 15, 9];

const renderSecondTable = grades => {
    document.querySelector("#passing-grades").innerHTML = getPassingGrades(grades);
    document.querySelector("#failing-grades").innerHTML = getFailingGrades(grades);
    document.querySelector("#raised-grades").innerHTML = getRaisedGrades(grades);
}

const renderStatsTable = grades => {
    const tbody = document.querySelector("#stats-table tbody");
    tbody.innerHTML = `<tr>
        <td>${getLowestValue(grades)}</td>
        <td>${getAverageValue(grades)}</td>
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getHighestValue(grades)}</td>
    </tr>`;
}

const render = grades => {
    console.log("Grades: " + grades.join(', '));
    renderStatsTable(grades);
    renderSecondTable(grades);
}

gradesForm.addEventListener("submit", event => {
    event.preventDefault();
    const newGrade = Number.parseInt(yourGrade.value, 10);
    grades.push(newGrade);
    yourGrade.value = "";
    render(grades);
});

render(grades);
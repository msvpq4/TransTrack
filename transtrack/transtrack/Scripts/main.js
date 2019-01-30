// Global vars:

let totalAlerts = 4;

function generate_statements() {
    document.getElementById("append_row").innerHTML =     
        `
            <td> 1 </td>
            <td colspan = "2"> 12/07/2018 </td>
            <td>
                <a href="../Content/statement.csv" download="statement.csv">Save<a/>
            </td>
        `;
}

function addStatement() {
    document.getElementById("add_row").innerHTML =
       `
        <td> 4 </td>
        <td> <input type='text' id="employee_name"/></td>
        <td> <input type='date' placeholder= "YYYY-MM-DD" id="date"/> </td>
        <td> <input type='text' id="alert_description"/></td>
        <td> <input type='button' value='Save' id='save_alert_button' onclick="saveAlert()"/></td>
        `;
}

function addStatementEmployee() {
    document.getElementById("add_row_two").innerHTML =
        `
        <td> 4 </td>
        <td> <input type='date' placeholder= "YYYY-MM-DD" id="date"/> </td>
        <td> <input type='text' id="alert_description"/></td>
        <td> <input type='button' value='Save' id='save_alert_button' onclick="saveAlert()"/></td>
        `;
}

function saveAlert() {
    let employee_name = document.getElementById("employee_name").value;
    let date = document.getElementById("date").value;
    let formatted_date = date.slice(5,7) + "/" + date.slice(8,10) + "/" + date.slice(0,4);
    
    
    let alert_description = document.getElementById("alert_description").value;
    document.getElementById("add_row").innerHTML = 
        `
        <td> ${totalAlerts}</td>
        <td> ${employee_name}</td>
        <td> 12/07/2018-${formatted_date}</td>
        <td> ${alert_description}</td>
        <td> None </td>
        `;
}

var page = document.getElementById("page").value;

if (page == "individual") {
    //alert("Its individual page");
    var data = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ['#026A87', '#1DBFB4', '#02DFE0']
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Food',
            'Transportation',
            'MISC'
        ]
    }
}

else if (page == "team" || page == "portal"){
    var data = {
        datasets: [{
            data: [10, 20, 30],
            backgroundColor: ['#026A87', '#1DBFB4', '#02DFE0']
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Chad',
            'Carter',
            'Steven'
        ]
    }
}


const topSpenders = document.getElementById("donutChart");
let topSpendersChart = new Chart(topSpenders, {
    type: 'doughnut',
    data: data,
    options: Chart.defaults.doughnut
});



const expenditurePercentage = document.getElementById("barChart");
let expenditurePercentageChart = new Chart(expenditurePercentage, {
    type: 'bar', 
    data: {
        datasets: [{
            data: [14, 9, 19, 11, 17, 21, 9],
            backgroundColor: ['#014C61', '#026A87', '#1D9CBF', '#1DBFB4', '#02DFE0', '#A9E8DC','#E1F7E7']
        }],
        labels: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
        ]
        
    },
    options: {
        legend: {
            display: false
        }
    }
});

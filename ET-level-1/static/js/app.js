// from data.js
const tableData = data;

// YOUR CODE HERE!

// function to handle click of button
function buttonHandler(){
    // Get the value property of the textbox element
    const input = d3.select('#datetime').property('value');
	
    //filter out the data using an arrow function
    const filteredData = tableData.filter(sighting => (sighting.datetime == input));

    // add filteredData to table
    const tbody = d3.select('tbody');
    tbody.html(''); //empties table before filling it

    if (filteredData.length == 0) { //be responsive and indicate 0 results if so
        tbody.append('tr').append('td').text(`ERROR: No sightings found for date entered: ${input}`);
        const emptyRow = d3.select('tbody>tr');
        for (let i = 0; i < 5; i++) {emptyRow.append('td').text('');} 
        emptyRow.append('td').text('THEY are trying to suppress the truth!!!'); //who are THEY!?!?
    }
    else {
        filteredData.forEach(sighting => {
            const row = tbody.append('tr');
            Object.values(sighting).forEach(value => row.append('td').text(value));
        });
    } 
}

buttonHandler(); //load the table when the page is loaded
d3.select('#datetime').property('value', '') //clear the default value

//button-click listener
const button = d3.select('#filter-btn');
button.on('click', buttonHandler);
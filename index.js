// Get form fields
const tableForm = document.getElementById("tableForm")
const columnsInput = document.getElementsByName("columns")
const rowsInput = document.getElementsByName("rows")
const canvas = document.getElementById("canvas")
const table = document.getElementById("table")

// Handle form submission
tableForm.addEventListener("submit", (e) => {
  e.preventDefault()
  
  // Get the button type ('generate' or 'clear')
  const button = e.submitter.getAttribute("id")

	// Clear the form and table
	if (button === "clear") {
    resetTool()
		console.log("tool reset successful")
	}
  
  // Generate a table form form inputs
  if (button === 'generate') {
    // Get column and row values
    columns = columnsInput[0].value
    rows = rowsInput[0].value

    // Reset tool before generating new table
    resetTool()

    // Randomly select an index to color yellow
    
    // Generate the table
    makeTable(columns, rows)
    console.log('table generation successful')
    
    // Randomly color a single cell
    colorRandomCell()


    // reset form fields
    resetFormFields()

  }
})

function makeTable(columns, rows) {
  // Used to add numbers to table cells
  let iterator = 1

  // Create the table
	for (let i = 0; i < rows; i++) {
    
    // Create the row(s)
    let tr = document.createElement("tr")
    for (let i = 0; i < columns; i++) {

      // create the column(s)
      let td = document.createElement("td")
      td.innerHTML = iterator // add number to cell
      iterator++

      // add table column (<td>) to table row
      tr.appendChild(td)
    }
    // add the table to the page.
    table.appendChild(tr)
  }
}

function resetFormFields() {
  rowsInput[0].value = ""
  columnsInput[0].value = ""
}

function resetTool() {
  rowsInput[0].value = ""
  columnsInput[0].value = ""
  table.replaceChildren()
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function colorRandomCell() {
  const cells = document.querySelectorAll('td')
  const index = getRandomInt(1, columns * rows )

  cells[index].classList.add("yellow")
}

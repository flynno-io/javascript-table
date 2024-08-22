// Get form fields
const tableForm = document.getElementById("tableForm")
const columnsInput = document.getElementsByName("columns")
const rowsInput = document.getElementsByName("rows")
const table = document.getElementById("table")
const clearBtn = document.getElementById("clear")

// Prevent default form submission
tableForm.addEventListener("submit", (e) => {
  e.preventDefault()
})

// Add action to 'clear' button
clearBtn.addEventListener('click', () => {

  // clear the form fields and remove the table (if any)
  resetTool()

  // log successful run to the console
  console.log("tool reset successful")
})

// Handle form submission
// NOTE: an event listener on the form is used over the 'generate' button itself
// in order to leverage the out-of-the-box form field validation such as 'max' and
// 'required'.
tableForm.addEventListener("submit", (e) => {

  // Prevent the default submission behavior
  e.preventDefault()
  
  // Get column and row values
  columns = columnsInput[0].value
  rows = rowsInput[0].value

  // Reset tool before generating new table
  resetTool()

  // Generate an HTML table from form inputs
  makeTable(columns, rows)
  console.log('table generation successful')

  // Randomly color a single cell to yellow
  colorRandomCell()

  // reset form fields
  resetFormFields()
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
  resetFormFields()
  table.replaceChildren()
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function colorRandomCell() {
  const cells = document.querySelectorAll('td')
  const index = getRandomInt(1, columns * rows)

  cells[index].classList.add("yellow")
}

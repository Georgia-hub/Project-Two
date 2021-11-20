const selectionButtons = document.querySelectorAll("[data-selection]")
const finalColumn = document.qureyselectorALL("[data-final-column]")
const SELECTIONS = [
    {
        name: "rock",
        emoji: "👊",
        beats: "scissors"
    },
    {
        name: "paper",
        emoji: "✋",
        beats: "rock"
    },
    {
        name: "scissors",
        emoji: "✌️",
        beats: "paper"
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
       const selectionName = selectionButton.dataset.selection
       const selection = SELECTIONS.find(selection => selection.name === selectionName)
       makeSelection(selection)

    })

})


function makeSelection (selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner (selection, computerSelection)
    const computerWinner = isWinner (computerSelection, selection)
    console.log(computerSelection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
}

function addSelectionResult(selection, winner) {
    const div = document.createElement("div")
    div.innerText(selection.emoji)
    div.classList.add("result-selection")
    if (winner) div.classList.add("winner")
    finalColumn.after(div)

}

function isWinner(selection, opponentSelection ) {
    return SELECTIONS.beats === opponentSelection.name
}

function randomSelection () {
    const randomInedx = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomInedx]
}
const selectionButtons = document.querySelectorAll("[data-selection]")
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

}

function isWinner(selection, opponentSelection ) {
    return SELECTIONS.beats === opponentSelection.name
}

function randomSelection () {
    const randomInedx = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomInedx]
}
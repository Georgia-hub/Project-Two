const selectionButtons = document.querySelectorAll("[data-selection]")
const SELECTIONS = [
    {
        name: "rock",
        emoji: "👊",
        beats: "scissors"
    },
    {
        name: "paper",
        emoji: "👊",
        beats: "rock"
    },
    {
        name: "scissors",
        emoji: "👊",
        beats: "paper"
    }
]

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener("click", e => {
       const selectionName = selectionButton.dataset.selection
       makeSelection(selectionName)

    })

})


function makeSelection (selection) {
    console.log(selection)
}
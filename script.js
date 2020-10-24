const grids = document.querySelectorAll('.grid')
console.log(grids)
const headings = document.querySelectorAll('.heading .wrapper .text')

function enterScreen(index) {
    const grid = grids[index],
        heading = headings[index],
        gridColumns = grid.querySelectorAll('.column')

    grid.classList.add('active')

    gridColumns.forEach(element => {
        element.classList.remove('animate-before', 'animate-after')
    })
    heading.classList.remove('animate-before', 'animate-after')
}
function exitSecrren(index, exitDelay) {
    const grid = grids[index],
        heading = headings[index],
        gridColumns = grid.querySelectorAll('.column')

    gridColumns.forEach(element => {
        element.classList.add('animate-after')
    })
    heading.classList.add('animate-after')
    setTimeout(() => {
        grid.classList.remove('active')
    }, exitDelay);
}

function setuoAnimationCycle({ timePerScreen, exitDelay }) {
    const cycleTime = timePerScreen + exitDelay;
    let nextIndex = 0
    function nextCycle() {
        const currentIndex = nextIndex
        enterScreen(currentIndex);

        setTimeout(() => exitSecrren(currentIndex, exitDelay), timePerScreen);

        nextIndex = nextIndex >= grids.length - 1 ? 0 : nextIndex + 1;
    }
    nextCycle();

    setInterval(nextCycle, cycleTime);

}

setuoAnimationCycle({
    timePerScreen: 2000,
    exitDelay: 200 * 7
})
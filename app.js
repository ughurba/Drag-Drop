const drags = document.querySelectorAll('.drag')
const placholder = document.querySelectorAll('.placholder')

function handleDragStart(e) {
    this.style.opacity = '0.01';
    let dataDrag = this.getAttribute('data-drag')
    e.dataTransfer.setData('data', dataDrag)
}

function handleDragOver(e) {
    e.preventDefault()
}

function handleDragEnd(e) {
    this.style.opacity = '1';
}

function handleDragDrop(e) {
    let dataAtribute = e.dataTransfer.getData('data')
    let dataPlacholder = this.getAttribute('data-drag')
    let element = document.querySelector(`.${dataAtribute}`)
    console.log(element)
    if (dataAtribute === dataPlacholder) {
        this.append(element)
    }

}


drags.forEach(item => {

    item.addEventListener('dragstart', handleDragStart);
    item.addEventListener('dragend', handleDragEnd);
});

placholder.forEach(item => {
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('drop', handleDragDrop);
});

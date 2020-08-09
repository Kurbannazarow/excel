const CODES = {
    A: 65,
    Z: 90
}

function toCell(_, index) {
    return `
        <div class="cell" contenteditable spellcheck="false" data-col = "${index}"></div>
    `
}

function toColumn(content, i) {
    return `
        <div class="column" data-type="resizable" data-col="${i}">
            ${content}
            <div class="col-resize" data-resize="col"></div>
        </div>
    `
}

function createRow(index, content) {
    let resize = ''
    let ind = ''
    if (index) {
        ind = index
        resize = `<div class="row-resize" data-resize = "row"></div>`
    }
    return `
    <div class="row" data-type="resizable">
        <div class="row-info" data-type="resizable-row">
            ${ind} ${resize}
        </div>
        <div class="row-data">${content}</div>
    </div>
    `
}

function toChar(_, index) {
    return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 20) {
    const colsCount = CODES.Z - CODES.A + 1
    const rows = []
    const cols = new Array(colsCount)
        .fill('')
        .map(toChar)
        .map(toColumn)
        .join('')

    rows.push(createRow(null, cols))

    for (let i = 0; i < rowsCount; i++) {
        const cells = new Array(colsCount)
            .fill('')
            .map(toChar)
            .map(toCell)
            .join('')
        rows.push(createRow(i + 1, cells))
    }

    return rows.join('')
}
const app = document.getElementById('gantt')!;
const timeline = app.querySelector<HTMLDivElement>('.gantt-timeline')!;

const gridCols = 30;
const gridRows = 9;

// Creates a CSS Grid Columns definition for the timeline based on data size
const getGridColsCSS = () => {
    let cols = '';
    for (let i = 0; i < gridCols; i++) {
        cols += ' 1fr'; // Each date cell
    }
    return cols;
};

// Renders timeline grid columns
const renderGridColumns = () => {
    const totalCells = gridCols * gridRows;
    let html = '';

    // Add all content cells
    for (let i = 0; i < totalCells; i++) {
        html += '<div class="gantt-timeline-cell">&nbsp;</div>';
    }
    return html;
};

document.addEventListener('DOMContentLoaded', () => {
    // Render task pane contents
    // @TODO

    // Render grid columns
    timeline.style.setProperty('--timeline-grid-columns', getGridColsCSS());
    timeline.insertAdjacentHTML('afterbegin', renderGridColumns());
});

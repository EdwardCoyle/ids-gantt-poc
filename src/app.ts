const app = document.getElementById('gantt')!;
const taskPane = app.querySelector<HTMLDivElement>('.gantt-task-pane')!;
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

    // Add header cells
    html += '<div class="gantt-timeline-header gantt-cell-container">';
    for (let i = 0; i < gridCols; i++) {
        html += `<div class="gantt-cell">${i + 1}</div>`;
    }
    html += '</div>';

    // Add content cells
    html += '<div class="gantt-timeline-cells gantt-cell-container">';
    for (let i = 0; i < totalCells; i++) {
        html += '<div class="gantt-cell">&nbsp;</div>';
    }
    html += '</div>';

    return html;
};

document.addEventListener('DOMContentLoaded', () => {
    // Render task pane contents
    // @TODO

    // Render grid columns
    timeline.style.setProperty('--timeline-grid-columns', getGridColsCSS());
    timeline.insertAdjacentHTML('afterbegin', renderGridColumns());
});

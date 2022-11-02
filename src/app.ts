import type { IdsGanttChartData } from './data';
import { data } from './data';

const app = document.getElementById('gantt')!;
const taskPane = app.querySelector<HTMLDivElement>('.gantt-task-pane')!;
const timeline = app.querySelector<HTMLDivElement>('.gantt-timeline')!;

// @TODO pull this from some sort of calendar configuration (days/months/etc)
const gridCols = 30;

// Calculates number of rows to display based on data
const getTotalRows = (thisData: IdsGanttChartData) => {
    let rows = 0;
    rows += thisData.groups.length;
    thisData.groups.forEach((group: any) => {
        rows += group.contents?.length || 0;
    });
    return rows;
}

// Creates a CSS Grid Columns definition for the task pane based on number of headers
const getTaskPaneColsCSS = () => {
    let cols = '';
    for (let i = 0; i < data.headers.length; i++) {
        cols += ' minmax(100px, 1fr)';
    }
    return cols;
};

// Renders task pane grid columns
// @TODO build in support for accordions
const renderTaskPaneColumns = (thisData: IdsGanttChartData) => {
    const totalRows = getTotalRows(thisData);
    const totalCells = totalRows * 2;
    let html = '';

    // Render Headers
    html += '<div class="gantt-task-pane-header gantt-cell-container">';
    for (let i = 0; i < thisData.headers.length; i++) {
        html += `<div class="gantt-cell">${thisData.headers[i].name}</div>`;
    }
    html += '</div>';

    // Render Cells
    html += '<div class="gantt-task-pane-cells gantt-cell-container">';
    for (let i = 0; i < totalCells; i++) {
        html += '<div class="gantt-cell">&nbsp;</div>';
    }
    html += '</div>';

    return html;
}

// Creates a CSS Grid Columns definition for the timeline based on data size
const getTimelineColsCSS = () => {
    let cols = '';
    for (let i = 0; i < gridCols; i++) {
        cols += ' minmax(44px, 1fr)'; // Each date cell
    }
    return cols;
};

// Renders timeline grid columns
const renderTimelineColumns = (thisData: IdsGanttChartData) => {
    const totalCells = gridCols * getTotalRows(thisData);
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
    taskPane.style.setProperty('--task-pane-grid-columns', getTaskPaneColsCSS());
    taskPane.insertAdjacentHTML('afterbegin', renderTaskPaneColumns(data));

    // Render timeline contents
    timeline.style.setProperty('--timeline-grid-columns', getTimelineColsCSS());
    timeline.insertAdjacentHTML('afterbegin', renderTimelineColumns(data));
});

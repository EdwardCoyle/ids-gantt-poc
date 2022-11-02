# IDS Gantt Chart POC TODO

## Basic functionality

- [ ] Add expand/collapse support for "accordion headers" (probably better off just using rows)
- [ ] Implement calendar event bars (draggable/snappable)
- [ ] implement SVG icons (legend, calendar event bar, etc)

## Improvements

- [ ] Explore rendering SVG for chart cells instead of individual DOM elements (in general, we need to cut down on the amount of elements being used)
- [ ] Improve scrolling behavior (add Y scrolling to timeline cells, but don't scroll the header cells)
- [ ] Hide scrollbars
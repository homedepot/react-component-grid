# react-component-grid
React Flexbox Component Grid provides a simple, flexbox-based grid to be used for tabular data or other scenarios where you desire a header-ed or header-less grid.

React - Because componentized, one-way data flowish frontend development

Flexbox - For a responsive, aligned grid that's easy to customize via parameters while also remaining unobtrusive

Component - Because just taking text or numbers is so un-Reactish, we expect to represent every cell with a component

Grid - Or datagrid. Or matrix. In this case, a framework of rectangular cells

[![Stories in Ready](https://badge.waffle.io/homedepot/react-component-grid.png?label=ready&title=Ready)](https://waffle.io/homedepot/react-component-grid)

[![Build Status](https://travis-ci.org/homedepot/react-component-grid.svg?branch=master)](https://travis-ci.org/homedepot/react-component-grid)

[![npm version](https://img.shields.io/npm/v/react-flexbox-component-grid.svg?style=flat)](https://www.npmjs.com/package/react-flexbox-component-grid)


## Installation

```
$ npm i -S react-flexbox-component-grid
```

## Getting Started

The grid requires 3 properties:

**Data**: An array containing the row-wise data you wish to display; each data item MUST contain a unique id property (either a string or a number)
```
const data = [
        {
            id: 1,
            objectToSendToComponentAsProps: { quantity: 1 },
            
        },
        {
            id: 2,
            objectToSendToComponentAsProps: { quantity: 3 },
            
        },
    ];
```
**Columns**: An array representation of the columns you wish to display
```
const columns = [
        {
            data: 'objectToSendToComponentAsProps',
            component: reactComponentToRenderInThisColumn,
        }
    ];
```
**Components**: At least one component to render as a grid cell
```
const reactComponentToRenderInThisColumn = props => (
  <div>{props.quantity}</div>
)
```

## Optional Properties

By default, the React Flexbox Component Grid relies on inline styles to build its grid. This can make changing the styling with CSS classes tricky. If you'd like to bypass the inline styling and build your own, you can set the `useDefaultStyle` property to false.
```
<ReactFlexboxComponentGrid
    data={listsData}
    columns={columns}
    useDefaultStyle={false}
/>
```
Creating a CSS class-based grid is relatively simple -- you can even use a mix of flexible width and fixed width columns. The HTML rendered for a single row in of the React Flexbox Component Grid will look something like this:
```
<div class="flex-row">
    <div class="col fixed-width-col">This is a fixed width column.</div>
    <div class="col flex-width-col">This is a flexible width column.</div>
</div>
```
In our CSS, we create a parent row class. Each column inside the row will be given a base `col` style, which will be modified using either the `fixed-width-col` class (in this example, 100px wide) or the `flex-width-col` class. You can create as many fixed width classes as you like, or tweak the flex-basis property on the flexible width column to alter how much space they should take up.

```
.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.col { flex: 1 1 8%; }

.fixed-width-col { flex: 0 0 100px; }

.flex-width-col { flex-basis: 8.3333%; }

```

**Note:** Your project can also contain a mix of inline and class-based styling. When using the default (inline styles) implementation of React Flexbox Component Grid, be aware that inline styles have higher specificity than class-based styles and thus override any class-based styles. When using class-based styling, be careful to avoid classname conflicts.

## Sample Implementations
You can also check out a few sample implementations in the [examples section](https://github.com/homedepot/react-component-grid/tree/master/src/examples). These examples use Bootstrap to things like the table header and background color, but Bootstrap is _not_ a dependency of `react-component-grid`.

## To Run the Project Locally
Clone the repo and serve the files using the `node server.js` command.

# Contributors:
* Jon Oropeza -- [@jonnyohjonnyo](https://github.com/jonnyohjonnyo)
* Stephen Mesa -- [@thd-mesa](https://github.com/thd-mesa)
* Whitney Williams -- [@whitneyw](https://github.com/whitneyw)


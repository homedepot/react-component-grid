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

# Getting Started

3 props are expected and required to use the component grid:

data: An array containing the row-wise data you wish to display. Each data item MUST contain a unique id property (either string or number).
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
columns: An array representation of the columns you wish to display
```
const columns = [
        {
            data: 'objectToSendToComponentAsProps',
            component: reactComponentToRenderInThisColumn,
        }
    ];
```
component: at least one component to render as a grid cell
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
It's relatively simple to create a grid using HTML and CSS. You can even use a mix of flexible width and fixed width columns:
```
<div class="row">
    <div class="col fixed">This is a fixed width column.</div>
    <div class="col flex-col">This is a flexible width column.</div>
</div>
```

```
.row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.col { flex: 1 1 8%; }

.flex-col { flex-basis: 8.3333%; }

.fixed { flex: 0 0 40px; }

```

You can also check out a few sample implementations in the [examples section](https://github.com/homedepot/react-component-grid/tree/master/src/examples).

# Key Contributors:

* [@jonnyohjonnyo](https://github.com/jonnyohjonnyo)
* [@thd-mesa](https://github.com/thd-mesa)

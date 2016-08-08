[![Stories in Ready](https://badge.waffle.io/homedepot/react-component-grid.png?label=ready&title=Ready)](https://waffle.io/homedepot/react-component-grid)

[![Build Status](https://travis-ci.org/homedepot/react-component-grid.svg?branch=master)](https://travis-ci.org/homedepot/react-component-grid)

# react-component-grid
React Flexbox Component Grid provides a simple, flexbox-based grid to be used for tabular data or other scenarios where you desire a header-ed or header-less grid.

React - Because componentized, one-way data flowish frontend development

Flexbox - For a responsive, aligned grid that's easy to customize via parameters while also remaining unobtrusive

Component - Because just taking text or numbers is so un-Reactish, we expect to represent every cell with a component

Grid - Or datagrid. Or matrix. In this case, a framework of rectangular cells

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

Key Contributors:

* [@jonnyohjonnyo](https://github.com/jonnyohjonnyo)
* [@thd-mesa](https://github.com/thd-mesa)

Repo Admin:

* [@adron-orange](https://github.com/adron-orange)

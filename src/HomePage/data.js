export default [
{
title: 'the all man bros',
link: 'https://github.com/nmartinet/allManBand',
desc: `
Website for my borther's band, the all man bros. 

Check'em out if you're in montreal [allmanbrothersarebelongto.us](http://allmanbrothersarebelongto.us).

Semi-static site build with react/webpack. 
`
},
{
title: 'nmartinet.github.io',
link: 'https://github.com/nmartinet/nmartinet.github.io',
desc: `
This.

Small porfolio site using reac tand webpack. Small enough to be a good starting point for a react isomprphic app. uses:

  - Full es6 - babel-node for the server
  - Express
  - Webpack with hot middleware
  - React and React router
  - SASS
  - Webpack static site generator and extract text plugins to output prerendered page to use as github pages.

Page borders inspired by/shamelessly stolen from [the state of js survey](http://stateofjs.com/)
`
},
{
title: 'radiatr',
link: 'https://github.com/nmartinet/radiatr',
desc:`
_in progress_

In browser react document editor. Lets you create and edit react documnets in a single self contained html file. Can modify and save changes without needing to have a server runnig.

Features:

  - Uses ACE edit
  - Babel transpiler to enable ES6
  - No setup needed
  - Automatic changes/no realoads
  - Uses normal React components - good for prototyping
  - data driven documents
`
},
{
title: 'radiatr todo',
link: 'https://github.com/nmartinet/radiatr-todo',
desc: `
The canonical example for js/web libs today. Creating a todo app with radiatr. 

A sample of what can be done with radiatr, and some details on how it works.

The main difference between this and othe examples is that the result gives is a standalone portable todo that can be used immediatly, moved as easely as a word document, and contains the tools to edit/extend itself.
`  
},
{
title: 'CV',
link: 'https://github.com/nmartinet/CV',
desc: `
My already not so up to date CV.

Use case/test for radiatr. A data driven document and layout/styling with html is a lot less infuriating than using word.

Another example of a radiatr output. Gives a static html file/document.
`
},
{
title: 'excel-tools',
link: 'https://github.com/nmartinet/excel-tools',
desc: `
__in progress__

Successor to excel-libraries. 

A bunch of vba to make developing in excel less painfull. Like an underscore/lodash/jquery for excel.

A bit overboard but fun and good examples. Needs programatic access to the vb project to do some fun metaprogramming stuff (creating lambdas :) ).

Features:

  - add shortcuts and a menu for commands missing in excel (show all sheets, lock/unlock all/etc...)
  - a simple test runner and tests for the library
  - a simple docstring system
  - language extentions - default object value, casting with fallback, variable number of arguments
  - Simple lambdas - (x,y) => x + y;
  - Rudimentary map/reduce/filter 
  - string interpellation

See the project page for details. Still in progress.

`
},
{
title: 'excel-libraries',
link: 'https://github.com/nmartinet/excel-libraries',
desc: `
**deprecated** 

see excel-tools for it's successor (to come)

A bunch of excel/vba stuff to make developping in excel a little more pleasant/less painful.

Most of the code is from me. In the workbook all the modules with calls to user32 or foreign functions aren't from me. They're examples that I collected thinking that I could do something cool but never did. 
`
} 
]
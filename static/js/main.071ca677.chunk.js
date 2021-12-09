(this["webpackJsonpsorting-visualizer-2"]=this["webpackJsonpsorting-visualizer-2"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(11),s=n.n(a),i=(n(23),n(24),n(2)),c=n(9),o=n(4),l=n.n(o),h=n(5),d=n(12),u=n(0),b={title:Object(u.jsx)("a",{href:"https://en.wikipedia.org/wiki/Bubble_sort",target:"_blank",rel:"noopener noreferrer",children:" Bubble Sort "}),description:Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Bubble Sort"}),' is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list. Although the algorithm is simple, it is too slow and impractical for most problems']}),worstCase:Object(u.jsxs)("span",{children:["O(n",Object(u.jsx)("sup",{children:"2"}),")"]}),avgCase:Object(u.jsxs)("span",{children:["O(n",Object(u.jsx)("sup",{children:"2"}),")"]}),bestCase:Object(u.jsx)("span",{children:"O(n)"}),space:Object(u.jsx)("span",{children:"O(1)"})},j=function(e,t,n){var r=e[t];e[t]=e[n],e[n]=r},p={title:Object(u.jsx)("a",{href:"https://en.wikipedia.org/wiki/Insertion_sort",target:"_blank",rel:"noopener noreferrer",children:"Insertion Sort"}),description:Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Insertion Sort "}),"is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. Compared to other quadratic sorting algorithms like bubble sort and selection sort, it is efficient for small data sets and those that are already substantially sorted."]}),worstCase:Object(u.jsxs)("span",{children:["O(n",Object(u.jsx)("sup",{children:"2"}),")"]}),avgCase:Object(u.jsxs)("span",{children:["O(n",Object(u.jsx)("sup",{children:"2"}),")"]}),bestCase:Object(u.jsx)("span",{children:"O(n)"}),space:Object(u.jsx)("span",{children:"O(1)"})},f={title:Object(u.jsx)("a",{href:"https://en.wikipedia.org/wiki/Selection_sort",target:"_blank",rel:"noopener noreferrer",children:"Selection Sort"}),description:Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Selection Sort "}),"is an in-place comparison sorting algorithm that divides the input list into two parts: the sublist of items already sorted, which is built up from left to right at the front (left) of the list, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right."]}),worstCase:Object(u.jsxs)("span",{children:["O(n",Object(u.jsx)("sup",{children:"2"}),")"]}),avgCase:Object(u.jsxs)("span",{children:["O(n",Object(u.jsx)("sup",{children:"2"}),")"]}),bestCase:Object(u.jsxs)("span",{children:["O(n",Object(u.jsx)("sup",{children:"2"}),")"]}),space:Object(u.jsx)("span",{children:"O(1)"})},O=function e(t,n,r,a){var s=a,i=2*a+1,c=2*a+2;n[i]>n[s]&&i<r&&(s=i),n[c]>n[s]&&c<r&&(s=c),s!==a&&(t.push([a,s,!0]),j(n,a,s),e(t,n,r,s))},m={title:Object(u.jsx)("a",{href:"https://en.wikipedia.org/wiki/Heapsort",target:"_blank",rel:"noopener noreferrer",children:"Heap Sort"}),description:Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Heap Sort "}),"is a comparison-based sorting algorithm that uses the heap data structure rather than a linear-time search to find the maximum or minimum element. Unlike Selection Sort, Heap Sort maintains the unsorted region in a heap data structure to more quickly find the largest element in each step."]}),Object(u.jsx)("p",{children:"The heapsort algorithm can be divided into two parts. In the first step, a heap is built out of the data. In the second step, a sorted array is created by repeatedly removing the largest element from the heap (the root of the heap), and inserting it into the array. The heap is updated after each removal to maintain the heap property."})]}),worstCase:Object(u.jsxs)("span",{children:["O(",Object(u.jsx)("em",{children:"n"})," log ",Object(u.jsx)("em",{children:"n"}),")"]}),avgCase:Object(u.jsxs)("span",{children:["O(",Object(u.jsx)("em",{children:"n"})," log ",Object(u.jsx)("em",{children:"n"}),")"]}),bestCase:Object(u.jsxs)("span",{children:["O(",Object(u.jsx)("em",{children:"n"})," log ",Object(u.jsx)("em",{children:"n"}),")"]}),space:Object(u.jsx)("span",{children:"O(1)"})},g=function e(t,n,r,a){if(r<a){var s=Math.floor((a+r)/2);e(t,n,r,s),e(t,n,s+1,a),x(t,n,r,s,a)}},x=function(e,t,n,r,a){for(var s=[],i=n,c=r+1;i<=r&&c<=a;)e[i]<=e[c]?s.push(e[i++]):s.push(e[c++]);for(;i<=r;)s.push(e[i++]);for(;c<=a;)s.push(e[c++]);for(var o=[],l=n;l<=a;l++)o.push(l);for(var h=n;h<=a;h++)e[h]=s[h-n],t.push([h,e[h],!0,o])},v={title:Object(u.jsx)("a",{href:"https://en.wikipedia.org/wiki/Merge_sort",target:"_blank",rel:"noopener noreferrer",children:"Merge Sort"}),description:Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Merge Sort "}),"is an efficient, comparison-based sorting algorithm that makes use of the divide and conquer strategy. Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output. Conceptually the algorithm works as follows:"]}),Object(u.jsxs)("ol",{children:[Object(u.jsxs)("li",{children:["Divide the unsorted list into ",Object(u.jsx)("em",{children:"n"})," sublists, each containing one element(a list of one element is considered sorted)"]}),Object(u.jsx)("li",{children:"Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list."})]})]}),worstCase:Object(u.jsxs)("span",{children:["O(",Object(u.jsx)("em",{children:"n"})," log ",Object(u.jsx)("em",{children:"n"}),")"]}),avgCase:Object(u.jsxs)("span",{children:["O(",Object(u.jsx)("em",{children:"n"})," log ",Object(u.jsx)("em",{children:"n"}),")"]}),bestCase:Object(u.jsxs)("span",{children:["O(",Object(u.jsx)("em",{children:"n"})," log ",Object(u.jsx)("em",{children:"n"}),")"]}),space:Object(u.jsxs)("span",{children:["O(",Object(u.jsx)("em",{children:"n"}),")"]})},y=function e(t,n,r,a){if(r<a){var s=w(t,n,r,a);e(t,n,r,s-1),e(t,n,s+1,a)}},w=function(e,t,n,r){for(var a=n-1,s=n;s<r;s++)s!==r&&e.push([s,r,!1]),t[s]<t[r]&&(++a,j(t,s,a),e.push([s,a,!0]));return j(t,a+1,r),e.push([r,a+1,!0]),a+1},k={title:Object(u.jsx)("a",{href:"https://en.wikipedia.org/wiki/Quicksort",target:"_blank",rel:"noopener noreferrer",children:"Quick Sort"}),description:Object(u.jsxs)("div",{children:[Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:"Quick Sort "}),"is an in-place, divide-and-conquer algorithm that can be faster than MergeSort and HeapSort. It works by dividing a large array into two smaller sub-array saccording to whether they are less than or greater than the pivot. The sub-arrays are recursively sorted. The steps are:"]}),Object(u.jsxs)("ol",{children:[Object(u.jsx)("li",{children:"Pick an element, called a pivot, from the array."}),Object(u.jsx)("li",{children:"Move pivot element to the start of the array."}),Object(u.jsxs)("li",{children:[Object(u.jsx)("em",{children:"Partitioning: "})," reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position."]}),Object(u.jsx)("li",{children:"Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values."})]})]}),worstCase:Object(u.jsxs)("span",{children:["O(",Object(u.jsx)("em",{children:"n"}),Object(u.jsx)("sup",{children:"2"}),")"]}),avgCase:Object(u.jsxs)("span",{children:["O(",Object(u.jsx)("em",{children:"n"}),"log",Object(u.jsx)("em",{children:"n"}),")"]}),bestCase:Object(u.jsxs)("span",{children:["O(",Object(u.jsx)("em",{children:"n"}),"log",Object(u.jsx)("em",{children:"n"}),")"]}),space:Object(u.jsxs)("span",{children:["O(log",Object(u.jsx)("em",{children:"n"}),")"]})},C=function(e){for(var t=[],n=0;n<e;n++){var r=Date.now().toString()+n.toString(),a=4*Math.floor(96*Math.random()+5);t.push({id:parseInt(r),height:parseInt(a),type:0})}return t},N=function(){var e=Object(h.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){setTimeout((function(){e()}),450/t)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t,n){var r=B(e,t),a=[];return"Bubble Sort"===r&&(a=function(e){for(var t=[],n=e.length,r=0;r<n-1;r++)for(var a=0;a<n-r-1;a++){var s=e[a],i=e[a+1];s>i?(e[a]=i,e[a+1]=s,t.push([a,a+1,!0])):t.push([a,a+1,!1])}return t}(n)),"Selection Sort"===r&&(a=function(e){for(var t=[],n=e.length,r=0;r<n;r++){for(var a=r,s=r+1;s<n;s++)e[s]<e[a]&&(a=s),t.push([s,a,!1]);j(e,r,a),t.push([r,a,!0])}return t}(n)),"Insertion Sort"===r&&(a=function(e){for(var t=[],n=e.length,r=0;r<n-1;r++)for(var a=r;a>=0&&e[a]>e[a+1];)j(e,a,a+1),t.push([a,a+1,!0]),a--;return t}(n)),"Merge Sort"===r&&(a=function(e){var t=[],n=e.length;return g(e,t,0,n-1),t}(n)),"Quick Sort"===r&&(a=function(e){var t=[];return y(t,e,0,e.length-1),t}(n)),"Heap Sort"===r&&(a=function(e){for(var t=[],n=e.length,r=Math.ceil(n/2)-1;r>=0;r--)O(t,e,n,r);for(var a=n-1;a>=0;a--)t.push([a,0,!0]),j(e,a,0),O(t,e,a,0);return t}(n)),a},B=function(e,t){return t.find((function(t){return t.id===e})).type},L=Object(d.b)({name:"chart",initialState:{barsList:[],movingBars:[],isPaused:!0,finished:!0,worstCase:!1,menuChanged:!1,currentAlgo:1,speed:1,numOfBars:5,algoOptions:[{id:1,type:"Bubble Sort"},{id:2,type:"Selection Sort"},{id:3,type:"Insertion Sort"},{id:4,type:"Merge Sort"},{id:5,type:"Quick Sort"},{id:6,type:"Heap Sort"}],numOfBarsOptions:[5,10,20,30,50,70,100],speedOptions:[.5,.75,1,2,4],barTypes:[{NORMAL:0},{CURRENT:1},{SORTED:2}]},reducers:{createList:function(e,t){e.barsList=t.payload.barsList},saveMovingBars:function(e,t){e.movingBars=t.payload.movingBars},clearMovingBars:function(e){e.movingBars=[]},changePaused:function(e,t){e.isPaused=t.payload.isPaused},changeMenu:function(e,t){e.menuChanged=t.payload.menuChanged},changeFinished:function(e,t){e.finished=t.payload.finished},changeAlgo:function(e,t){e.currentAlgo=t.payload.currentAlgo,e.menuChanged=!0},changeWorstCase:function(e,t){e.worstCase=t.payload.worstCase,e.menuChanged=!0},changeNumOfBars:function(e,t){e.numOfBars=t.payload.numOfBars,e.menuChanged=!0},changeSpeed:function(e,t){e.speed=t.payload.speed,e.menuChanged=!0},swappingBars:function(e,t){var n=t.payload,r=n.barsInCheck,a=n.barsList,s=JSON.parse(JSON.stringify(a)),i=s[r[0]].height;s[r[0]].height=s[r[1]].height,s[r[1]].height=i,e.barsList=s},changeBarColor:function(e,t){for(var n=t.payload,r=n.barIndexesToChange,a=n.barColor,s=n.barsList,i=JSON.parse(JSON.stringify(s)),c=0;c<r.length;c++){i[r[c]].type=a}e.barsList=i},changeAllBarsColors:function(e,t){for(var n=t.payload,r=n.barsList,a=n.barColor,s=JSON.parse(JSON.stringify(r)),i=0;i<e.numOfBars;i++)s[i].type=a;e.barsList=s},changeBarHeight:function(e,t){var n=t.payload,r=n.barsList,a=n.barsRange,s=JSON.parse(JSON.stringify(r));s[a[0]].height=a[1],e.barsList=s}}}),M=L.actions,R=M.createList,A=M.saveMovingBars,I=M.clearMovingBars,T=M.changeAlgo,_=M.changeNumOfBars,P=M.changeSpeed,E=M.changePaused,z=M.changeMenu,D=M.swappingBars,H=M.changeBarColor,J=M.changeAllBarsColors,q=M.changeBarHeight,U=M.changeFinished,Q=M.changeWorstCase,W=function(e){return function(){var t=Object(h.a)(l.a.mark((function t(n,r){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=r().chart.barsList,n(D({barsInCheck:e,barsList:a}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},F=function(e,t){return function(){var n=Object(h.a)(l.a.mark((function n(r,a){var s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s=a().chart.barsList,r(H({barIndexesToChange:e,barColor:t,barsList:s}));case 2:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()},Y=function(e){return function(){var t=Object(h.a)(l.a.mark((function t(n,r){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=r().chart.barsList,n(J({barsList:a,barColor:e}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},V=function(e){return function(){var t=Object(h.a)(l.a.mark((function t(n,r){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=r().chart.barsList,n(q({barsList:a,barsRange:e}));case 2:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},G=function(){return function(){var e=Object(h.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n().chart.numOfBars,document.getElementById("flexCheckDefault").checked=!1,t(U({finished:!0})),t(E({isPaused:!0})),t(R({barsList:C(r)})),t(Q({worstCase:!1})),t(I());case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},K=function(){return function(){var e=Object(h.a)(l.a.mark((function e(t,n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n().chart.numOfBars,a=C(r),a.sort((function(e,t){return t.height-e.height})),t(U({finished:!0})),t(E({isPaused:!0})),t(Q({worstCase:!0})),t(R({barsList:a})),t(I());case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},X=L.reducer,Z=function(e){e.currentAlgo;var t=e.algoOptions,n=Object(i.b)(),a=Object(r.useState)("Algorithm"),s=Object(c.a)(a,2),o=s[0],l=s[1];return Object(u.jsxs)("div",{className:"dropdown",children:[Object(u.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:o}),Object(u.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"dropdown-item disabled",tabIndex:"-1","aria-disabled":"true",children:"Algorithm"})}),t?t.map((function(e,r){return Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"dropdown-item text-dark",type:"button",value:e.type,onClick:function(e){l(e.target.value);var r=t.find((function(t){return t.type===e.target.value}));n(T({currentAlgo:r.id})),n(G())},children:e.type},e.id)},r)})):"Loading menu"]})]})},$=function(e){e.speed;var t=e.speedOptions,n=Object(i.b)(),a=Object(r.useState)("Speed"),s=Object(c.a)(a,2),o=s[0],l=s[1];return Object(u.jsxs)("div",{className:"dropdown",children:[Object(u.jsx)("button",{className:"btn btn-secondary dropdown-toggle",id:"speedBtn",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:o}),Object(u.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"dropdown-item disabled",tabIndex:"-1","aria-disabled":"true",children:"Speed"})}),t?t.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsxs)("button",{className:"dropdown-item text-dark",type:"button",value:e,onClick:function(e){l(e.target.value+"x"),n(P({speed:e.target.value})),n(G())},children:[e,"x"]},e)},t)})):"Loading menu"]})]})},ee=function(e){e.numOfBars;var t=e.numOfBarsOptions,n=Object(i.b)(),a=Object(r.useState)("Size"),s=Object(c.a)(a,2),o=s[0],l=s[1];return Object(u.jsxs)("div",{className:"dropdown",children:[Object(u.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:o}),Object(u.jsxs)("ul",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton1",children:[Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"dropdown-item disabled",tabIndex:"-1","aria-disabled":"true",children:"Size"})}),t?t.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)("button",{className:"dropdown-item text-dark",type:"button",value:e,onClick:function(e){l(e.target.value),n(_({numOfBars:e.target.value})),n(G())},children:e},10*e)},t)})):"Loading menu"]})]})},te=function(){var e=Object(i.b)();return Object(u.jsx)("div",{className:"form-check",children:Object(u.jsxs)("label",{className:"form-check-label",htmlFor:"flexCheckDefault",children:[Object(u.jsx)("input",{className:"form-check-input",type:"checkbox",id:"flexCheckDefault",onChange:function(t){return function(t){!0===t.target.checked?e(K()):e(G())}(t)}}),"Worst Case"]})})},ne=function(e){var t=e.barsList,n=function(e){if(5===t.length||10===t.length)return t.filter((function(t,n){return n===e}))[0].height/4};return Object(u.jsx)("div",{className:"barsList",children:t?t.map((function(e,t){return Object(u.jsx)("div",{className:(r=e.type,0===r?"bar":1===r?"bar current":2===r?"bar sorted":void 0),style:{height:"".concat(e.height,"px")},height:e.height,value:e.height,children:Object(u.jsxs)("span",{children:[" ",n(t)," "]})},t);var r})):"Loading bar chart"})},re=function(e){var t,n=e.algoName;"Quick Sort"===n&&(t=k),"Bubble Sort"===n&&(t=b),"Selection Sort"===n&&(t=f),"Insertion Sort"===n&&(t=p),"Merge Sort"===n&&(t=v),"Heap Sort"===n&&(t=m);var r=t,a=r.title,s=r.description,i=r.worstCase,c=r.avgCase,o=r.bestCase,l=r.space;return Object(u.jsxs)("div",{className:"SortInfo",children:[Object(u.jsx)("hr",{}),Object(u.jsx)("h1",{children:a||"Select Algorithm"}),Object(u.jsxs)("div",{className:"SortInfo__Body",children:[Object(u.jsx)("article",{className:"SortInfo__Article",children:s||Object(u.jsx)("p",{children:"You must select an algorithm before you can visualize it's execution on an array of numbers."})}),Object(u.jsxs)("aside",{className:"SortInfo__Aside",children:[Object(u.jsx)("h3",{children:"Performance"}),Object(u.jsx)("table",{className:"performance",children:Object(u.jsxs)("tbody",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Worst-case time complexity "}),Object(u.jsx)("td",{children:Object(u.jsx)("code",{children:i})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Average time complexity"}),Object(u.jsx)("td",{children:Object(u.jsx)("code",{children:c})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Best-case time complexity"}),Object(u.jsx)("td",{children:Object(u.jsx)("code",{children:o})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:"Worst-case space complexity "}),Object(u.jsx)("td",{children:Object(u.jsx)("code",{children:l})})]})]})})]})]})]})},ae=function(e){return e.chart.barsList},se=function(e){return e.chart.movingBars},ie=function(e){return e.chart.currentAlgo},ce=function(e){return e.chart.algoOptions},oe=function(e){return e.chart.isPaused},le=function(e){return e.chart.speedOptions},he=function(e){return e.chart.speed},de=function(e){return e.chart.numOfBars},ue=function(e){return e.chart.numOfBarsOptions},be=function(e){return e.chart.finished},je=n(7),pe=n(18),fe=function(){var e=Object(i.b)(),t=Object(i.c)(oe);return Object(u.jsx)("button",{type:"button",id:"randomizeBtn",className:"btn btn-outline-secondary",onClick:function(){t&&(e(z({menuChanged:!0})),e(G()))},children:"Randomize"})},Oe=n(8),me=n(6),ge=Object(me.b)({chart:X}),xe=Object(d.a)({reducer:ge}),ve=function(){return xe.getState().chart},ye=function(){var e=Object(h.a)(l.a.mark((function e(t,n){var r,a,s,i,c,o,h,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.length>0)){e.next=28;break}if(r=ve(),a=r.isPaused,s=r.finished,i=r.menuChanged,c=r.worstCase,!i){e.next=7;break}return c?xe.dispatch(K()):xe.dispatch(G()),e.abrupt("break",28);case 7:if(!a||s){e.next=11;break}return o=n[0],ke([o[0],o[1]],n),e.abrupt("break",28);case 11:return xe.dispatch(Y(Se("NORMAL"))),h=n[0],d=[h[0],h[1]],xe.dispatch(F(d,Se("CURRENT"))),e.next=17,N(t);case 17:if(!0!==h[2]){e.next=22;break}return console.log("we are swapping"),xe.dispatch(W(d)),e.next=22,N(t);case 22:return xe.dispatch(F(d,Se("NORMAL"))),e.next=25,N(t);case 25:n.shift(),e.next=0;break;case 28:Ne(n);case 29:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),we=function(){var e=Object(h.a)(l.a.mark((function e(t,n){var r,a,s,i,c,o,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("animateBarsInRange"),r=[];case 2:if(!(n.length>0)){e.next=28;break}if(a=ve(),s=a.isPaused,i=a.finished,c=a.menuChanged,o=a.worstCase,!c){e.next=9;break}return o?xe.dispatch(K()):xe.dispatch(G()),e.abrupt("break",28);case 9:if(!s||i){e.next=12;break}return ke(r,n),e.abrupt("break",28);case 12:if(xe.dispatch(Y(Se("NORMAL"))),r===n[0][3]){e.next=21;break}return xe.dispatch(F(r,Se("NORMAL"))),e.next=17,N(t);case 17:return r=n[0][3],xe.dispatch(F(n[0][3],Se("CURRENT"))),e.next=21,N(t);case 21:return h=[n[0][0],n[0][1]],xe.dispatch(V(h)),e.next=25,N(t);case 25:n.shift(),e.next=2;break;case 28:Ne(n);case 29:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ke=function(){var e=Object(h.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:xe.dispatch(F(t,Se("CURRENT"))),xe.dispatch(A({movingBars:n}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(h.a)(l.a.mark((function e(t,n,r,a,s){var i,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.length>0?i=t:(c=n.map((function(e){return e.height})),i=S(r,a,c)),4!==r){e.next=6;break}return e.next=4,we(s,i);case 4:e.next=8;break;case 6:return e.next=8,ye(s,i);case 8:case"end":return e.stop()}}),e)})));return function(t,n,r,a,s){return e.apply(this,arguments)}}(),Ne=function(e){0!==e.length||ve().finished||(console.log("no more bars to move"),xe.dispatch(Y(Se("SORTED"))),xe.dispatch(U({finished:!0})),xe.dispatch(E({isPaused:!0})),xe.dispatch(Q({worstCase:!1})))},Se=function(e){var t=ve().barTypes;return"CURRENT"===e?t[1].CURRENT:"NORMAL"===e?t[0].NORMAL:"SORTED"===e?t[2].SORTED:void 0},Be=function(){var e=Object(i.b)(),t=Object(i.c)(oe),n=Object(i.c)(ie),r=Object(i.c)(ce),a=Object(i.c)(he),s=Object(i.c)(ae),c=Object(i.c)(se).slice();return Object(u.jsx)("button",{type:"button",id:"startBtn",className:"btn btn-danger",onClick:function(){t&&(e(z({menuChanged:!1})),e(U({finished:!1})),e(E({isPaused:!1})),Ce(c,s,n,r,a))},children:Object(u.jsx)(je.a,{icon:Oe.b,size:"lg"})})},Le=function(){var e=Object(i.c)(be),t=Object(i.b)();return Object(u.jsx)("button",{type:"button",id:"pauseBtn",className:"btn btn-danger",onClick:function(){!e&&t(E({isPaused:!0}))},children:Object(u.jsx)(je.a,{icon:Oe.a,size:"lg"})})},Me=function(){var e=Object(i.b)(),t=Object(i.c)(de),n=Object(i.c)(ue),a=Object(i.c)(ie),s=Object(i.c)(ce),c=Object(i.c)(he),o=Object(i.c)(le),l=Object(i.c)(ae),h=Object(i.c)(oe),d=C(t);return Object(r.useEffect)((function(){e(R({barsList:d}))}),[]),Object(u.jsxs)("div",{id:"content",children:[Object(u.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark py-3 sticky-top",id:"navbar",style:{backgroundColor:"#6351ce"},children:[Object(u.jsxs)("a",{className:"navbar-brand mx-3",href:"/",onClick:function(e){e.preventDefault(),window.scrollTo(0,0)},children:[Object(u.jsx)(je.a,{icon:pe.a,size:"1x"}),Object(u.jsx)("b",{style:{padding:"10px"},children:"Sorting Visualizer"})]}),Object(u.jsx)("button",{className:"navbar-toggler me-2",id:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarCollapse",children:Object(u.jsxs)("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0",children:[Object(u.jsx)("li",{className:"nav-item active m-2",children:Object(u.jsx)(fe,{})}),Object(u.jsx)("li",{className:"nav-item m-2",children:Object(u.jsx)(Z,{currentAlgo:a,algoOptions:s})}),Object(u.jsx)("li",{className:"nav-item m-2 ",children:Object(u.jsx)(ee,{numOfBars:t,numOfBarsOptions:n})}),Object(u.jsx)("li",{className:"nav-item m-2 ",children:Object(u.jsx)($,{speed:c,speedOptions:o})}),Object(u.jsx)("li",{className:"nav-item m-2",children:h?Object(u.jsx)(Be,{}):Object(u.jsx)(Le,{})}),Object(u.jsx)("li",{className:"nav-item m-2",children:Object(u.jsx)(te,{})})]})})]}),Object(u.jsx)(ne,{barsList:l}),Object(u.jsx)(re,{algoName:B(a,s)})]})},Re=n(17),Ae=function(){return Object(u.jsxs)("footer",{className:"text-center mt-4 text-white position-absolute",children:[Object(u.jsx)("div",{className:"container p-3 pb-2",children:Object(u.jsxs)("section",{children:[Object(u.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"https://github.com/tttn13",role:"button",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(je.a,{icon:Re.a})}),Object(u.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"#!",role:"button",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(je.a,{icon:Oe.c})}),Object(u.jsx)("a",{className:"btn btn-outline-light btn-floating m-1",href:"https://www.linkedin.com/in/thi-nguyen-1310/",role:"button",target:"_blank",rel:"noopener noreferrer",children:Object(u.jsx)(je.a,{icon:Re.b})})]})}),Object(u.jsxs)("div",{className:"text-center p-3",children:["\xa9 ",(new Date).getFullYear()," Copyright: Thi Nguyen"," ",Object(u.jsx)("span",{style:{color:"#e25555"},children:"\u2665"}),Object(u.jsx)("a",{className:"nav-link",style:{fontWeight:"600"},href:"https://github.com/tttn13/sorting-visualizer",target:"_blank",rel:"noopener noreferrer",children:"Source Code"})]})]})};var Ie=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(Me,{}),Object(u.jsx)(Ae,{})]})};s.a.render(Object(u.jsx)(i.a,{store:xe,children:Object(u.jsx)(Ie,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.071ca677.chunk.js.map
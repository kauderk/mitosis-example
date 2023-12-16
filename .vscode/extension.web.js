const table = {
  root: '.view-lines>div>span',
  controlKeyword: 'mtk4',
  blank: 'mtk1',
  jsxMarker: 'mtk18',
  text: 'mtk16',
  jsxTag: 'mtk8',
  jsxBracket: 'mtk4',
  quotationMark: 'mtk9',
  bracket: 'bracket-highlighting',
  glue: 'mtk1',
  quote: 'mtk9',
  brace: 'mtk1',
  colon: 'mtk5',
  other: 'mtk16',
  semicolorTerminator: 'mtk17'
};
const derived = {
  singleLineControlKeyword: `${table.controlKeyword}+.${table.glue}`
};
const style = `
  /* note: using ".view-lines>div>" to increase specificity/perforrmance */

  /* jsx begin ( ) and end } */
  ${table.root}:has(.${table.controlKeyword}:nth-child(2)+.${table.blank}+.${table.blank}[class*='${table.bracket}']:last-child) :is(:last-child,:nth-child(2)),
${table.root}:has(.${table.blank}:first-child+.${table.blank}[class*='${table.bracket}']+.${table.semicolorTerminator}:last-child),
${table.root} > [class*='${table.bracket}']:first-child:last-child,

/* jsx closing tag: </tag> */                         /*jsx or marko*/
${table.root}:has(:nth-last-child(3).${table.jsxMarker}+:is(.${table.jsxTag},.${table.controlKeyword})+.${table.jsxMarker}) :is(:nth-last-child(3),:nth-last-child(2),:last-child),
/* jsx closing tag: </tag> in between text */
${table.root}:has(:nth-last-child(5).${table.text}+.${table.jsxMarker}+.${table.jsxTag}+.${table.jsxMarker}+.${table.semicolorTerminator}) :is(:nth-last-child(4),:nth-last-child(3),:nth-last-child(2),:last-child),
/* jsx closing tag: </tag after text */
${table.root}:has(:nth-last-child(3).${table.text}:not(:first-child)+.${table.jsxMarker}+.${table.jsxTag}) :is(:nth-last-child(2),:last-child),
/* jsx attributes { } */
${table.root} .${table.jsxBracket}[class*='${table.bracket}'],


/* <tag> the first one in a line */
${table.root} :nth-child(2)[class="${table.jsxMarker}"],
${table.root} :nth-child(2)[class="${table.jsxMarker}"]+.${table.jsxTag}+.${table.jsxMarker},
/* > after jsx attribute } */                                             /* it should ignore its own kind, or the bracket that is actual javascript*/
${table.root} .${table.jsxBracket}[class*='${table.bracket}']+.${table.jsxMarker}:not(:is(.${table.bracket}-3,.${table.bracket}-4,.${table.bracket}-1)),
/* last > after jsx attribute } */
${table.root} .${table.jsxBracket}+.${table.jsxMarker}+.${table.jsxMarker}:last-child,


/* > after marko } in single line */
${table.root}:has(.${table.text}+.${table.text}.${table.bracket}-0+.${table.jsxMarker}) :last-child,
/* > after marko ) in line end */
${table.root}:has(.${table.blank}:nth-last-child(2)+.${table.jsxMarker}) :last-child,
/* > after marko variable in line end */
${table.root}:has(:nth-last-child(2).${table.jsxMarker}) :first-child.${table.jsxMarker}+:last-child.${table.jsxMarker},
/* /> after marko variable */
${table.root}:has(.${table.blank}+.${table.controlKeyword}+.${table.jsxMarker}+.${table.jsxMarker}:last-child) :last-child,

/* > after a quotation marks */
${table.root}:has(:nth-last-child(2).${table.quotationMark}) :last-child.${table.jsxMarker},
/* > before text 
${table.root} .${table.jsxMarker}:has(+ .${table.text}), */


/* < */
${table.root}>.${table.jsxMarker}:first-child,
${table.root}:has(:nth-child(3).${table.jsxTag}) :nth-child(2).${table.jsxMarker},
/* < after the return keyword */
${table.root}:has(:nth-child(2).${derived.singleLineControlKeyword}+.${table.jsxMarker}+.${table.jsxTag}) :nth-child(4).${table.jsxMarker},

/* quotation marks 
${table.root} .${table.quotationMark}:not(:last-child):not(:has(+ :is(.${table.jsxMarker},.${table.other},.${table.quotationMark},.${table.jsxBracket},.${table.blank},.${table.quotationMark}+.${table.text}))),
${table.root} .${table.quote}+.${table.quotationMark}, */


/* jsx ternary operation ? ( ) : null } */
${table.root}:has(.${table.blank}+.${table.controlKeyword}+.${table.blank}+.${table.bracket}-4:last-child) :last-child,
${table.root}:has(.${table.blank}+.${table.bracket}-4+.${table.blank}+.${table.controlKeyword}+.${table.blank}+.${table.colon}+.${table.bracket}-3:last-child),


/* svelte {#block } {/block} operators */
${table.root}:has(.${table.blank}.${table.bracket}-0:nth-child(2):not(:last-child)) :is(:nth-child(1),:nth-child(2),:nth-child(3),:last-child),
${table.root}:has(:nth-child(3)):has(.${table.blank}.${table.bracket}-0:nth-child(2)):not(:has(:nth-child(6))),


/* marko <if( )>< operators - bug, it triggers one selector above*/
${table.root}:has(.${table.blank}.${table.bracket}-0:nth-child(4):not(:last-child)) :is(:nth-child(4),:nth-last-child(2),:last-child),


/* marko end line ( )*/
${table.root}:has(:is(.${table.brace},.${table.text})+.${table.blank}.${table.bracket}-0:last-child) :last-child {
    opacity: 0.5;
    &:hover {
      opacity: 1;
    }
  }
`;

console.log(style);

`  /* note: using ".view-lines>div>" to increase specificity/perforrmance */

/* jsx begin ( ) and end } */
.view-lines>div>span:has(.mtk4:nth-child(2)+.mtk1+.mtk1[class*='bracket-highlighting']:last-child) :is(:last-child,:nth-child(2)),
.view-lines>div>span:has(.mtk1:first-child+.mtk1[class*='bracket-highlighting']+.mtk17:last-child),
.view-lines>div>span > [class*='bracket-highlighting']:first-child:last-child,

/* jsx closing tag: </tag> */                         /*jsx or marko*/
.view-lines>div>span:has(:nth-last-child(3).mtk18+:is(.mtk8,.mtk4)+.mtk18) :is(:nth-last-child(3),:nth-last-child(2),:last-child),
/* jsx closing tag: </tag> in between text */
.view-lines>div>span:has(:nth-last-child(5).mtk16+.mtk18+.mtk8+.mtk18+.mtk17) :is(:nth-last-child(4),:nth-last-child(3),:nth-last-child(2),:last-child),
/* jsx closing tag: </tag after text */
.view-lines>div>span:has(:nth-last-child(3).mtk16:not(:first-child)+.mtk18+.mtk8) :is(:nth-last-child(2),:last-child),
/* jsx attributes { } */
.view-lines>div>span .mtk4[class*='bracket-highlighting'],


/* <tag> the first one in a line */
.view-lines>div>span :nth-child(2)[class="mtk18"],
.view-lines>div>span :nth-child(2)[class="mtk18"]+.mtk8+.mtk18,
/* > after jsx attribute } */                                             /* it should ignore its own kind, or the bracket that is actual javascript*/
.view-lines>div>span .mtk4[class*='bracket-highlighting']+.mtk18:not(:is(.bracket-highlighting-3,.bracket-highlighting-4,.bracket-highlighting-1)),
/* last > after jsx attribute } */
.view-lines>div>span .mtk4+.mtk18+.mtk18:last-child,


/* > after marko } in single line */
.view-lines>div>span:has(.mtk16+.mtk16.bracket-highlighting-0+.mtk18) :last-child,
/* > after marko ) in line end */
.view-lines>div>span:has(.mtk1:nth-last-child(2)+.mtk18) :last-child,
/* > after marko variable in line end */
.view-lines>div>span:has(:nth-last-child(2).mtk18) :first-child.mtk18+:last-child.mtk18,
/* /> after marko variable */
.view-lines>div>span:has(.mtk1+.mtk4+.mtk18+.mtk18:last-child) :last-child,

/* > after a quotation marks */
.view-lines>div>span:has(:nth-last-child(2).mtk9) :last-child.mtk18,
/* > before text 
.view-lines>div>span .mtk18:has(+ .mtk16), */


/* < */
.view-lines>div>span>.mtk18:first-child,
.view-lines>div>span:has(:nth-child(3).mtk8) :nth-child(2).mtk18,
/* < after the return keyword */
.view-lines>div>span:has(:nth-child(2).mtk4+.mtk1+.mtk18+.mtk8) :nth-child(4).mtk18,

/* quotation marks 
.view-lines>div>span .mtk9:not(:last-child):not(:has(+ :is(.mtk18,.mtk16,.mtk9,.mtk4,.mtk1,.mtk9+.mtk16))),
.view-lines>div>span .mtk9+.mtk9, */


/* jsx ternary operation ? ( ) : null } */
.view-lines>div>span:has(.mtk1+.mtk4+.mtk1+.bracket-highlighting-4:last-child) :last-child,
.view-lines>div>span:has(.mtk1+.bracket-highlighting-4+.mtk1+.mtk4+.mtk1+.mtk5+.bracket-highlighting-3:last-child),


/* svelte {#block } {/block} operators */
.view-lines>div>span:has(.mtk1.bracket-highlighting-0:nth-child(2):not(:last-child)) :is(:nth-child(1),:nth-child(2),:nth-child(3),:last-child),
.view-lines>div>span:has(:nth-child(3)):has(.mtk1.bracket-highlighting-0:nth-child(2)):not(:has(:nth-child(6))),


/* marko <if( )>< operators - bug, it triggers one selector above*/
.view-lines>div>span:has(.mtk1.bracket-highlighting-0:nth-child(4):not(:last-child)) :is(:nth-child(4),:nth-last-child(2),:last-child),


/* marko end line ( )*/
.view-lines>div>span:has(:is(.mtk1,.mtk16)+.mtk1.bracket-highlighting-0:last-child) :last-child {
	opacity: 0.1;
	&:hover {
		opacity: 1;
	}
}`
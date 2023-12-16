var Table = {
    root: '.view-lines>div>span',
    controlKeyword: 'mtk10',
    blank: 'mtk1',
    jsxMarker: 'mtk13',
    text: 'mtk34',
    jsxTag: 'mtk14',
    jsxBracket: 'mtk17',
    quotationMark: 'mtk20',
    bracket: 'bracket-highlighting',
    glue: 'mtki',
    quote: 'mtk4',
    brace: 'mtk5',
    colon: 'mtk19',
    other: 'mtk12',
    endJsx: 'mtk1'
};
var Derived = {
    singleLineControlKeyword: "".concat(Table.controlKeyword, ".").concat(Table.glue, "+.").concat(Table.text),
    quotaionMarkBlank: Table.text,
    quotaionMarkJsxMarker: Table.jsxMarker,
    singleQuote: true
};
var webTable = {
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
    endJsx: 'mtk17'
};
var webDerived = {
    singleLineControlKeyword: "".concat(webTable.controlKeyword, "+.").concat(webTable.glue),
    quotaionMarkBlank: webTable.blank,
    quotaionMarkJsxMarker: webTable.controlKeyword,
    singleQuote: false
};
// prettier-ignore
var generateStyles = function (table, derived) { return "\n/* note: using \".view-lines>div>\" to increase specificity/perforrmance */\n\n/* jsx begin ( ) and end } */\n".concat(table.root, ":has(.").concat(table.controlKeyword, ":nth-child(2)+.").concat(table.blank, "+.").concat(table.blank, "[class*='").concat(table.bracket, "']:last-child) :is(:last-child,:nth-child(2)),\n").concat(table.root, ":has(.").concat(table.blank, ":first-child+.").concat(table.blank, "[class*='").concat(table.bracket, "']+.").concat(table.endJsx, ":last-child),\n").concat(table.root, " > [class*='").concat(table.bracket, "']:first-child:last-child,\n\n/* jsx closing tag: </tag> */                         /*jsx or marko*/\n").concat(table.root, ":has(:nth-last-child(3).").concat(table.jsxMarker, "+:is(.").concat(table.jsxTag, ",.").concat(table.controlKeyword, ")+.").concat(table.jsxMarker, ") :is(:nth-last-child(3),:nth-last-child(2),:last-child),\n/* jsx closing tag: </tag> in between text */\n").concat(table.root, ":has(:nth-last-child(5).").concat(table.text, "+.").concat(table.jsxMarker, "+.").concat(table.jsxTag, "+.").concat(table.jsxMarker, "+.").concat(table.endJsx, ") :is(:nth-last-child(4),:nth-last-child(3),:nth-last-child(2),:last-child),\n/* jsx closing tag: </tag after text */\n").concat(table.root, ":has(:nth-last-child(3).").concat(table.text, ":not(:first-child)+.").concat(table.jsxMarker, "+.").concat(table.jsxTag, ") :is(:nth-last-child(2),:last-child),\n/* jsx attributes { } */\n").concat(table.root, " .").concat(table.jsxBracket, "[class*='").concat(table.bracket, "'],\n\n\n/* <tag> the first one in a line */\n").concat(table.root, " :nth-child(2)[class=\"").concat(table.jsxMarker, "\"],\n").concat(table.root, " :nth-child(2)[class=\"").concat(table.jsxMarker, "\"]+.").concat(table.jsxTag, "+.").concat(table.jsxMarker, ",\n/* > after jsx attribute } */                                             /* it should ignore its own kind, or the bracket that is actual javascript*/\n").concat(table.root, " .").concat(table.jsxBracket, "[class*='").concat(table.bracket, "']+.").concat(table.jsxMarker, ":not(:is(.").concat(table.bracket, "-3,.").concat(table.bracket, "-4,.").concat(table.bracket, "-1)),\n/* last > after jsx attribute } */\n").concat(table.root, " .").concat(table.jsxBracket, "+.").concat(table.jsxMarker, "+.").concat(table.jsxMarker, ":last-child,\n\n\n/* > after marko } in single line */\n").concat(table.root, ":has(.").concat(table.text, "+.").concat(table.text, ".").concat(table.bracket, "-0+.").concat(table.jsxMarker, ") :last-child,\n/* > after marko ) in line end */\n").concat(table.root, ":has(.").concat(table.blank, ":nth-last-child(2)+.").concat(table.jsxMarker, ") :last-child,\n/* > after marko variable in line end */\n").concat(table.root, ":has(:nth-last-child(2).").concat(table.jsxMarker, ") :first-child.").concat(table.jsxMarker, "+:last-child.").concat(table.jsxMarker, ",\n/* /> after marko variable */\n").concat(table.root, ":has(.").concat(table.blank, "+.").concat(table.controlKeyword, "+.").concat(table.jsxMarker, "+.").concat(table.jsxMarker, ":last-child) :last-child,\n\n/* > after a quotation marks */\n").concat(table.root, ":has(:nth-last-child(2).").concat(table.quotationMark, ") :last-child.").concat(table.jsxMarker, ",\n/* > before text \n").concat(table.root, " .").concat(table.jsxMarker, ":has(+ .").concat(table.text, "), */\n\n\n/* < */\n").concat(table.root, ">.").concat(table.jsxMarker, ":first-child,\n").concat(table.root, ":has(:nth-child(3).").concat(table.jsxTag, ") :nth-child(2).").concat(table.jsxMarker, ",\n/* < after the return keyword */\n").concat(table.root, ":has(:nth-child(2).").concat(derived.singleLineControlKeyword, "+.").concat(table.jsxMarker, "+.").concat(table.jsxTag, ") :nth-child(4).").concat(table.jsxMarker, ",\n\n/* quotation marks ").concat(derived.singleQuote ? '*/' : '', "\n").concat(table.root, " .").concat(table.quotationMark, ":not(:last-child):not(:has(+ :is(.").concat(table.jsxMarker, ",.").concat(table.other, ",.").concat(table.quotationMark, ",.").concat(table.jsxBracket, ",.").concat(table.blank, ",.").concat(table.quotationMark, "+.").concat(table.text, "))),\n").concat(table.root, " .").concat(table.quote, "+.").concat(table.quotationMark, ",\n").concat(!derived.singleQuote ? '*/' : '', "\n\n/* jsx ternary operation ? ( ) : null } */\n").concat(table.root, ":has(.").concat(derived.quotaionMarkBlank, "+.").concat(derived.quotaionMarkJsxMarker, "+.").concat(derived.quotaionMarkBlank, "+.").concat(table.bracket, "-4:last-child) :last-child,\n").concat(table.root, ":has(.").concat(derived.quotaionMarkBlank, "+.").concat(table.bracket, "-4+.").concat(derived.quotaionMarkBlank, "+.").concat(derived.quotaionMarkJsxMarker, "+.").concat(derived.quotaionMarkBlank, "+.").concat(table.colon, "+.").concat(table.bracket, "-3:last-child),\n\n\n/* svelte {#block } {/block} operators */\n").concat(table.root, ":has(.").concat(table.blank, ".").concat(table.bracket, "-0:nth-child(2):not(:last-child)) :is(:nth-child(1),:nth-child(2),:nth-child(3),:last-child),\n").concat(table.root, ":has(:nth-child(3)):has(.").concat(table.blank, ".").concat(table.bracket, "-0:nth-child(2)):not(:has(:nth-child(6))),\n\n\n/* marko <if( )>< operators - bug, it triggers one selector above*/\n").concat(table.root, ":has(.").concat(table.blank, ".").concat(table.bracket, "-0:nth-child(4):not(:last-child)) :is(:nth-child(4),:nth-last-child(2),:last-child),\n\n\n/* marko end line ( )*/\n").concat(table.root, ":has(:is(.").concat(table.brace, ",.").concat(table.text, ")+.").concat(table.blank, ".").concat(table.bracket, "-0:last-child) :last-child {\n    opacity: 0.5;\n    &:hover {\n      opacity: 1;\n    }\n  }\n"); };
var styles = generateStyles(Table, Derived);
var webStyles = generateStyles(webTable, webDerived);
console.log(styles);

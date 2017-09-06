var commaSeparator = "\u002C";
var newLineSeparator = "\n";
var spaceSeparator = "\u0020";
var tableHorizontalTabSeparator = "\u0009";
// var tableVerticalTabSeparator = "\u000B";
var tableVerticalTabSeparator = "\n";

// Commas
function pasteWithCommas (context) {
  paster(context, commaSeparator);
};

// New lines
function pasteWithNewLines (context) {
  paster(context, newLineSeparator);
};

// Spaces
function pasteWithSpaces (context) {
  paster(context, spaceSeparator);
};

// Table row
function pasteFromTableRow (context) {
  paster(context, tableHorizontalTabSeparator);
};

// Table column
function pasteFromTableColumn (context) {
  paster(context, tableVerticalTabSeparator);
};


// Main func
function paster (context, separator) {
    //
    var doc = context.document;
    // Get a data from your pasteboard
    // doc.showMessage("hi");
    var pasteBoard = NSPasteboard.generalPasteboard();
    // Turn a data in the string type
    var stringFromPasteBoard = [pasteBoard stringForType:NSPasteboardTypeString];
    //
    var sep = separator;
    // Get selected elements from your artboard
    var selection = context.selection;
    // Define an array length of elements in your artboard
    var arrayLength = selection.length;
    // Contert a getting string to a JS string
    var jsString = String(stringFromPasteBoard);
    // How many we meet a separator in your pasteboard data
    var countOfSring = jsString.search(sep);
    // Create empty array from your pasteboardDara
    var arrayFromStringPasteBoard = [];

     // Fill an array with a data from a pasteboard
    if (countOfSring <= 0) {
      doc.showMessage("Format your text for a right format ☝");
    } else {
      // Fill an array
      arrayFromStringPasteBoard = jsString.split(sep);
      // Populate a pasteboard array with a selected elements array
      for (var i = 0; i < arrayLength; i++) {
        var layer = selection[i]
        layer.stringValue = arrayFromStringPasteBoard[i]
        doc.showMessage("Done 👍")
      };
    };   
};

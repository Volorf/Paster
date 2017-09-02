function pasteData(context) {

  var doc = context.document;

  // Get selected elements from your artboard
  var selection = context.selection;

  // Define array length of elements in your artboart
  var arrayLength = selection.length;

  // Get data from your pasteboard
  var pasteBoard = NSPasteboard.generalPasteboard();

  // Turn data in the string type
  var stringFromPasteBoard = [pasteBoard stringForType:NSPasteboardTypeString];

  // Convert a getting string to JS string
  var stringFromPasteToJsString = String(stringFromPasteBoard);

  // Populate pasteboard array with selected elements array
  for (var i=0; i<arrayLength; i++) {
    var layer = selection[i]
    layer.stringValue = stringFromPasteToJsString
  };
  doc.showMessage("Done 👍🏻")
}

function pasteDataSpecial(context) {

  var doc = context.document;

  // Get selected elements from your artboard
  var selection = context.selection;

  // Define array length of elements in your artboard
  var arrayLength = selection.length;

  // Get data from your pasteboard
  var pasteBoard = NSPasteboard.generalPasteboard();

  // Turn data in the string type
  var stringFromPasteBoard = [pasteBoard stringForType:NSPasteboardTypeString];

  // Convert getting string to JS string
  var stringFromPasteToJsString = String(stringFromPasteBoard);

  // Remove horizontal tab U+0009
  var stringWithoutHorizontalTab = stringFromPasteToJsString.replace(/\u0009/g, "\u0020");

  // Remove vertical tab U+000B
  var stringWithoutVerticalTab = stringWithoutHorizontalTab.replace(/\u000B/g, "\u0020");

  // Remove \n
  var stringThatWeNeed = stringWithoutVerticalTab.replace(/\n/g, "\u0020");

  // Set separator type. In the next version (1.2) you can change this.
  var separator = "\u0020";

  // How often does the separator occur in the pasteboard data
  var countOfString = stringThatWeNeed.search(separator);

  // Create empty array from your pasteboardData
  var arrayFromStringPasteBoard = [];

  // Fill array with data from pasteboard
  if (countOfString <= 0) {
      doc.showMessage("Format your text for a right format ☝🏻");
  } else {
      // Fill array
      arrayFromStringPasteBoard = stringThatWeNeed.split(separator);
      // Populate pasteboard array with selected elements array
      for (var i=0; i<arrayLength; i++) {
        var layer = selection[i]
        layer.stringValue = arrayFromStringPasteBoard[i]
      };
      doc.showMessage("Done 👍🏻")
  };

}

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

  // Set separator type. In the next version (1.1) you can change this.
  var separator = "\n";

  // How many we meet separator in yout pasteboard data
  var countOfSring = stringFromPasteBoard.search(separator);

  // Create empty array from your pasteboardDara
  var arrayFromStringPasteBoard = [];

  // Fill array with data from pasteboard
  if (countOfSring <= 0) {
      log("format your text for right format.")
  } else {
      // Fill array
      arrayFromStringPasteBoard = stringFromPasteBoard.split(separator);
      // Populate pasteboard array with selected elements array
      for (var i=0; i<arrayLength; i++) {
        var layer = selection[i]
        layer.stringValue = arrayFromStringPasteBoard[i]
      };

  };

}

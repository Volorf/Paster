var doc = context.document;

var selection = context.selection;

var arrayLength = selection.length;

log(arrayLength)

var pasteBoard = NSPasteboard.generalPasteboard();

var stringFromPasteBoard = [pasteBoard stringForType:NSPasteboardTypeString];

var arrayFromStringPasteBoard = []

var separator = ", "

function createLabelsWithCustomData(separator) {

  var countOfSring = stringFromPasteBoard.search(separator)

  if (countOfSring <= 0) {
      log("format your text for right format.")
  } else {
      arrayFromStringPasteBoard = stringFromPasteBoard.split(separator)

  for (var i=0; i<arrayLength; i++) {
      var layer = selection[i]
      layer.stringValue = arrayFromStringPasteBoard[i]
    }
  }

}

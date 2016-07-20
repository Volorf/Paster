var doc = context.document

var pasteBoard = NSPasteboard.generalPasteboard();
var string = [pasteBoard stringForType:NSPasteboardTypeString];

var selection = context.selection;
if(selection.count() == 1) {
    log("your select right amount of layers")
    var layer = selection[0]
    layer.stringValue = string
} if(selection.count() == 0) {
    doc.showMessage("You didn't select a text layer")
} else {
    doc.showMessage("You need to select one layer only")
}

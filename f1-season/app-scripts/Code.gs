// Main entry point of the whole script
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('F1 Results')
      .addItem('Setup Sheet', 'setupSheet')
      .addItem('Sync Race Results', 'syncRaceResults')
      .addToUi();
}

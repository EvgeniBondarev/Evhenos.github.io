function getSelectedItems() {
    var checkboxes = document.getElementsByName("fruit");
    var selectedItems = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedItems.push(checkboxes[i].value);
      }
    }
    console.log(selectedItems);
  }
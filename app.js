let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";


tg.MainButton.show();


Telegram.WebApp.onEvent("mainButtonClicked", function(){
    var checkboxes = document.getElementsByName("fruit");
    var selectedItems = [];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        selectedItems.push(checkboxes[i].value);
      }
    }

	tg.sendData(selectedItems);
});

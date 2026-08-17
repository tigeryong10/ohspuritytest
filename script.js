// Live score: starts at the number of questions and drops by one per checked box.
// Weston: just add more <li><label><input type="checkbox"> ...</label></li> items
// to the list in index.html — the total updates automatically.
(function () {
  var scoreEl = document.getElementById("score");
  var resetBtn = document.getElementById("reset");
  var boxes = document.querySelectorAll(".questions input[type=checkbox]");

  function update() {
    var checked = 0;
    boxes.forEach(function (box) {
      if (box.checked) checked++;
    });
    scoreEl.textContent = "Score: " + (boxes.length - checked) + "/" + boxes.length;
  }

  boxes.forEach(function (box) {
    box.addEventListener("change", update);
  });

  resetBtn.addEventListener("click", function () {
    boxes.forEach(function (box) {
      box.checked = false;
    });
    update();
  });

  update();
})();

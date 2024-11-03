const btn = document.getElementById(`btn`) ;

const addText = document.getElementById(`text`);

btn.addEventListener(`click`,() => {
  addText.textContent = `ボタンをクリックしました`;
})
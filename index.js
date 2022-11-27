class Reverser {
  constructor(text) {
    this.text = text;
  }
  reverse(theString) {
    if (theString === "") {
      this.status = false;
      return (this.newString = "Error Please Fill the Filed");
    }
    let theStringArr = [];
    this.newString = "";
    for (let x = 0; x < theString.length; x++) {
      theStringArr.unshift(theString[x]);
    }
    for (let x = 0; x < theStringArr.length; x++) {
      this.newString += theStringArr[x];
    }
  }
  displayUpdate() {
    this.text.innerText = `${this.newString}`;
  }
}
const text = document.querySelector("[data-input]");
const button = document.querySelector("[data-submit]");
const textWrapper = document.querySelector("[data-text-wrapper]");
const reverse = new Reverser(textWrapper);
button.addEventListener("click", () => {
  reverse.reverse(text.value);
  reverse.displayUpdate();
});

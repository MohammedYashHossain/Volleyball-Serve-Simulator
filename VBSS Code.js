// Mohammed Hossain AP CSP Final Project

// Global Variables
var selectedArea;
var selectedServeType;
var areas = ["Right Back", "Middle Back", "Left Back", "Right Front", "Middle Front", "Left Front"];

// Screens
setScreen("homeScreen");

onEvent("RulesButton", "click", function() {
  setScreen("ruleScreen");
});

onEvent("homeButton", "click", function() {
  setScreen("homeScreen");
});

onEvent("PlayButton", "click", function() {
  setScreen("serveScreen");
  setProperty("areaDropdown", "text", areas);
});

onEvent("serveButton", "click", function() {
  selectedArea = getText("areaDropdown");
  selectedServeType = getText("serveDropdown");
  
  if (selectedArea === areas[5]) {
    setScreen("RecievedScreen");
  } else if (selectedServeType === "Underhand") {
    setScreen("RecievedScreen");
  } else {
    var randomNum = randomNumber(1, 2);
    if (randomNum === 1) {
      setScreen("RecievedScreen");
    } else {
      setScreen("AceScreen");
    }
  }
});
// Function
ReServe();

function ReServe() {
  onEvent("ReServe1", "click", function() {
    var randomNum = randomNumber(1, 2);
    if (randomNum === 1) {
      setScreen("RecievedScreen");
    } else {
      setScreen("serveScreen");
    }
  });
  onEvent("ReServe2", "click", function() {
    var randomNum = randomNumber(1, 2);
    if (randomNum === 1) {
      setScreen("RecievedScreen");
    } else {
      setScreen("serveScreen");
    }
  });
}

var likeCount = 0;

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    doLike();
    if (request.cmd == "start")
      sendResponse({});
  });

function getHeartElement() {
  var knownHeartElementNames = ["coreSpriteHeartOpen", "coreSpriteLikeHeartOpen"];
  var i = 0;

  for (i = 0; i < knownHeartElementNames.length; i++) {
    var heartElement = document.querySelector('.' + knownHeartElementNames[i]);
    if (heartElement != undefined) {
      break;
    }
  }

  return heartElement;
}

function doLike() {
  var likeElement = getHeartElement();
  var nextElement = document.querySelector('.coreSpriteRightPaginationArrow');
  likeCount++;
  var nextTime = Math.random() * (14000 - 4000) + 4000;
  if (likeElement !== null) {
    likeElement.click();
    setTimeout(function () {
      nextElement.click();
    }, nextTime);
    window.scrollTo(0, document.body.scrollHeight);
  }


  setTimeout(doLike, nextTime);
}
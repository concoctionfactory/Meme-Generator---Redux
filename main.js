$("#add").on("click", addMeme);

function addMeme() {
  let $topText = $("#top-text");
  let $botText = $("#bot-text");
  let $imgUrl = $("#img-url");
  let newMeme = {
    topText: $topText.val(),
    botText: $botText.val(),
    imgUrl: $imgUrl.val(),
  };

  store.dispatch({ type: "ADD", payload: newMeme });
  $topText.val("");
  $botText.val("");
  $imgUrl.val("");
  console.log(store.getState());
  showMeme();
}

function remove(event) {
  store.dispatch({ type: "REMOVE", payload: { id: event.data.id } });
  showMeme();
}

function showMeme() {
  let $memes = $("#memes");
  let $memeClone = $("#memeClone .meme");
  $memes.empty();

  let memes = store.getState().memes;
  memes.map((m) => {
    let $newMeme = $memeClone.clone();
    $($newMeme).find(".top").text(m.topText);
    $($newMeme).find(".bot").text(m.botText);
    $($newMeme).find(".image").attr("src", m.imgUrl);
    $($newMeme).find(".btn-remove").on("click", { id: m.id }, remove);
    $memes.append($newMeme);
  });
  console.log($memes);
}

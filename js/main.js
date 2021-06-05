$(function() {
  // 定数定義
  const first = 0
  const maru = "○"
  const batsu = "✖︎"

  let now_attack = first
  let got_match = false

  const complete_patterns = [
    [0, 3, 6], //縦1列目
    [1, 4, 7], //縦2列目
    [2, 5, 8], //縦3列目
    [0, 1, 2], //横1列目
    [3, 4, 5], //横2列目
    [6, 7, 8], //横3列目
    [0, 4, 8], //斜め1列目
    [2, 4, 6]  //斜め2列目
  ]

  $("td").click(function() {
    if (got_match) {
      alert("決着がつきました。画面をリロードしてください")
    } else {
      let result_symbol = now_attack ? batsu : maru
      $(this).html(result_symbol)
      now_attack = !now_attack

      if (check_complete()) {
        got_match = true
        alert(result_symbol + "の勝ち！")
      }
    }
  })

  function check_complete() {
    let results = $("td").get()
    let completed = false

    for (let cnt = 0; cnt < complete_patterns.length; cnt++) {
      let pattern = complete_patterns[cnt]
      let cell1 = $(results[pattern[0]]).html()
      let cell2 = $(results[pattern[1]]).html()
      let cell3 = $(results[pattern[2]]).html()
      completed = cell1 && cell1 == cell2 && cell2 == cell3 && cell3 ==  cell1
      if (completed) break
    }
    return completed
  }

})
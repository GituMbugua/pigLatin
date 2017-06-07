$(document).ready(function() {
  $("form.latin").submit(function(event) {
    event.preventDefault();
    var wordInput = $("input#word").val();
    var sentence_list = []

    var splitWords = wordInput.split(" ");
    var vowels=['a', 'e', 'i', 'o', 'u'];
    splitWords.forEach(function(splitWord){
        if(vowels.includes(splitWord[0])){
          var final = splitWord + "ay"

          sentence_list.push(final)
        }else{
          sentence_list.push(splitWord)
        }



        //console.log(splitWords);
        // var result) = (w)
        //$(".output").text(wordInput);
      })
        var sentence = sentence_list.join(" ")
      alert(sentence)
    })
    })

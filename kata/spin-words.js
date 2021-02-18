function spinWords(string) {
    return string
      .split(" ")
      .map((words) =>
        words.length >= 5 ? words.split("").reverse().join("") : words
      )
      .join(" ");
  }
  
  console.log(spinWords("Welcome"), "emocleW");
  console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
  console.log(spinWords("This is a test"), "This is a test");
  console.log(spinWords("This is another test"), "This is rehtona test");
  console.log(
    spinWords("You are almost to the last test"),
    "You are tsomla to the last test"
  );
  console.log(
    spinWords("Just kidding there is still one more"),
    "Just gniddik ereht is llits one more"
  );
  console.log(
    spinWords("Seriously this is the last one"),
    "ylsuoireS this is the last one"
  );
  
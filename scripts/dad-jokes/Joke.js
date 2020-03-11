const JokeHTMLRepresentation = (jokeObject) => {
  return `
  <section class="DadJoke__joke">
  <h3>Joke #${jokeObject.id}</h3>
  <h4>${jokeObject.question}</h4>
  <h4>${jokeObject.answer}</h4>
  </section>
  `

}

export default JokeHTMLRepresentation
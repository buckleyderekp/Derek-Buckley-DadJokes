import { useJokes } from "./JokeDataProvider.js";
import JokeHTMLRepresentation from "./Joke.js";


const contentTarget = document.querySelector(".DadJokeContainer") 

const JokeList = () => {
  const ArrayOfJokes= useJokes()

  for (const JokeObject of ArrayOfJokes) {
      const HTMLforOneJoke = JokeHTMLRepresentation(JokeObject)
      contentTarget.innerHTML += HTMLforOneJoke
}

}


export default JokeList



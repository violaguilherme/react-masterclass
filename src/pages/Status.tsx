import { Separator } from "../components/Separator"
import { TimelineHeader } from "../components/Timeline-header"
import { Tweet } from "../components/Tweet"
import "./Status.css"

const answers = [
    "Nice!",
    "Congrats",
    "Make sense"
]

export function Status() {
    return (
        <main className="status">   
            <TimelineHeader title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, mollitia id explicabo iusto tempore eum alias provident sit deleniti ipsam reiciendis tempora. Ipsa fugiat iure reiciendis, aut rem nobis voluptatibus?" />
            
            < Separator />

            <form className="answer-tweet-form">
              <label htmlFor="tweet">
                <img src="https://github.com/violaguilherme.png" alt="Guilherme Viola" />
                <textarea id="tweet" placeholder="Tweet your answer"></textarea>
              </label>

              <button type="submit">Answer</button>
            </form>
            

            {answers.map(answer => {
                return (
                    <Tweet 
                        key={answer} 
                        content={answer} 
                    />
                ) 
            })}
        </main>
    )
}
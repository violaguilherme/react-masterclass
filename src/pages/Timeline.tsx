import { Separator } from "../components/Separator"
import { TimelineHeader } from "../components/Timeline-header"
import { Tweet } from "../components/Tweet"
import "./Timeline.css"

const tweets = [
    "My first tweet",
    "Learning React",
    "lorem lorem lorem"
]

export function Timeline() {
    return (
        <main className="timeline">   
            <TimelineHeader title="Home" />
            
            <form className="new-tweet-form">
              <label htmlFor="tweet">
                <img src="https://github.com/violaguilherme.png" alt="Guilherme Viola" />
                <textarea id="tweet" placeholder="What's happening?"></textarea>
              </label>

              <button type="submit">Tweet</button>
            </form>
            
            < Separator />

            {tweets.map(tweet => {
                return (
                    <Tweet 
                        key={tweet} 
                        content={tweet} 
                    />
                ) 
            })}
        </main>
    )
}
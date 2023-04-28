import React from "react"
import ReactDOM from "react-dom/client"

import "./global.css"
import { Tweet } from "./components/Tweet"
import { Sidebar } from "./components/Sidebar"
import { TimelineHeader } from "./components/Timeline-header"
import { Separator } from "./components/Separator"

const tweets = [
    "My first tweet",
    "Learning React",
    "lorem lorem lorem"
]

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
        <Sidebar />

        <div className="content">
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
        </div>
    </div>
  </React.StrictMode>
)

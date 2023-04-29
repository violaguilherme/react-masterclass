import { FormEvent, useState, KeyboardEvent } from "react"

import { Separator } from "../components/Separator"
import { TimelineHeader } from "../components/Timeline-header"
import { Tweet } from "../components/Tweet"
import "./Status.css"
import { PaperPlaneRight } from "phosphor-react"

export function Status() {
    const [ newAnswer, setNewAnswer ] = useState("")
    const [ answers, setAnswers ] = useState([
        "Nice!",
        "Congrats",
        "Make sense"
    ])

    function createnewAnswer(event: FormEvent) {
        event.preventDefault()

        setAnswers([ newAnswer, ...answers])
        setNewAnswer("")
    }

    function handleHotKeySubmit(event: KeyboardEvent) {
        if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
            setAnswers([ newAnswer, ...answers])
            setNewAnswer("")
        }
    }

    return (
        <main className="status">   
            <TimelineHeader title="Tweet" />

            <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, mollitia id explicabo iusto tempore eum alias provident sit deleniti ipsam reiciendis tempora. Ipsa fugiat iure reiciendis, aut rem nobis voluptatibus?" />
            
            < Separator />

            <form onSubmit={createnewAnswer} className="answer-tweet-form">
              <label htmlFor="tweet">
                <img src="https://github.com/violaguilherme.png" alt="Guilherme Viola" />
                <textarea 
                    id="tweet" 
                    value={newAnswer}
                    placeholder="Tweet your answer"
                    onKeyDown={handleHotKeySubmit}
                    onChange={(event) => {
                        setNewAnswer(event.target.value)
                    }} 
                />
              </label>

                <button type="submit">
                   <PaperPlaneRight />
                   <span>Answer</span> 
                </button>
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
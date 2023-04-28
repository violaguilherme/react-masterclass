import { Link } from "react-router-dom"
import { ArrowsClockwise, ChatCircle, Heart } from "phosphor-react"

import "./Tweet.css"

interface ITweetProps {
    content: string
}

export function Tweet({ content }: ITweetProps) {
    return (
        <Link to="/status" className="tweet">
            <img src="https://github.com/violaguilherme.png" alt="Guilherme viola" />

            <div className="tweet-content">
                <div className="tweet-content-header">
                    <strong>Guilherme Viola</strong>
                    <span>@guilhermeviolaschott</span>
                </div>

                <p>{content}</p>

                <div className="tweet-content-footer">
                    <button type="button">
                        <ChatCircle />
                        35
                    </button>

                    <button type="button">
                        <ArrowsClockwise />
                        28
                    </button>
                    
                    <button type="button">
                        <Heart />
                        20
                    </button>
                </div>
            </div>
        </Link>
    )
}
interface TweetProps {
    user: string
    children: string
    likes?: number
}

export function Tweet({ user, children, likes }: TweetProps) {
    return (
        <div className="tweet">
            {user}< br />
            {children}
            <button>Likes {likes ?? "0"}</button>
        </div>
    )
}
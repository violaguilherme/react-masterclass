import "./Timeline-header.css"

import { Sparkle } from "phosphor-react";

interface IHeaderProps {
    title: string
}

export function TimelineHeader({ title }: IHeaderProps) {
    return (
        <div className="timeline-header">
            {title}
            <Sparkle />
        </div>
    )
}
import { Sparkle } from "phosphor-react";

import "./Timeline-header.css"

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
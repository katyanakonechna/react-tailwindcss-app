import React from "react";

interface Props {
    children: string | React.ReactElement;
    bgClass?: string;
}

const Card: React.FC<Props> = ({ children, bgClass= 'bg-white' }) => {
    return <div className={`w-auto h-auto flex flex-col rounded-xl shadow-md ${bgClass}`}>{children}</div>
}

export default Card;
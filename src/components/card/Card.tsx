import React from "react";

interface Props {
    children: string | React.ReactElement;
    bgClass?: string;
    widthClass?: string;
}

const Card: React.FC<Props> = ({ children, bgClass= 'bg-white', widthClass='w-auto' }) => {
    return <div className={`h-auto flex flex-col rounded-xl shadow-md ${bgClass} ${widthClass}`}>{children}</div>
}

export default Card;
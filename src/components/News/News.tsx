import {news} from "../../pages/dashboard/Mocks";

const News = () => {
    const getTime = (time: string) => {
        const dateTime = new Date(Number(time));
        return dateTime.getHours() + ':' + dateTime.getMinutes()
    }
    return <ul className="py-1 divide-y divide-chocolate-50">
        {news.map((el) => <li className="p-4 lg:p-8 grid grid-flow-col gap-8" key={el.id}>
                <div className="grid gap-2">
                    <div className="flex justify-center text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                    </div>
                    <p className="font-bold text-white">{el.author}</p>
                </div>
                <div>
                    <h2 className="font-bold text-white">{el.title}</h2>
                    <p className="text-chocolate-50">
                        {el.content}
                    </p>
                    <div className="flex justify-end">
                        <span className="font-bold text-chocolate-50">{getTime(el.time)}</span>
                    </div>
                </div>
            </li>
        )}

    </ul>
}
export default News;
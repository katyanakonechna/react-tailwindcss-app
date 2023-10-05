import {useEffect, useState} from "react";

const Dashboard = () => {
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        const newsBlock = document.getElementById('news');

        function watchScroll() {
            newsBlock?.addEventListener("scroll", () => {
                setScrolled(newsBlock.scrollTop > 20);
            });
        }

        watchScroll();
        return () => {
            newsBlock?.removeEventListener("scroll", () => setScrolled(false));
        };
    }, []);

    return <div className="flex flex-col bg-chocolate-300 bg-opacity-80 min-h-screen">
        {/*<Header/>*/}
        <div className={`transition-height duration-500 ease-in-out ${isScrolled ? 'h-16' : 'h-72'}`}/>
        <div
            className="bg-chocolate-300 bg-opacity-90 rounded-t-2xl flex-1 overflow-hidden relative flex-col flex h-full">
            <h3 className="font-bold text-chocolate-50 px-4 lg:px-8 py-2">News:</h3>
            <div id="news"
                 className="font-bold text-chocolate-50 px-4 lg:px-8 py-2 h-full min-h-0 overflow-auto min-h-0">
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
                explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui
                dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum,
                qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos
                ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias
                excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id,
                quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
                autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates
                repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt,
                explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui
                dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
                vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum,
                qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos
                ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias
                excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
                distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id,
                quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
                autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates
                repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </div>
        </div>
    </div>
}

export default Dashboard;
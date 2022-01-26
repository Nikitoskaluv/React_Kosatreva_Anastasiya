

export const MessagesRender = ({ list }) => {
    if (!list) {
        return <div className="fieldNoMessage">Нет сообщений</div>
    } else {
        Object.keys(list).forEach((ok) => {
            console.log(ok, list[ok])
        })
        return (
            <div className="messageField">
                <ul className="messageBlock">
                    {Object.keys(list).map((ok) => {
                        return <li key={ok}><h3>Автор</h3><p>{list[ok]}</p></li>
                    })}
                </ul>
            </div>
        )
    }
}





















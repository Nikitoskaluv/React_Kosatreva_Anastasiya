

export const MessagesRender = ({ list }) => {
    if (!list) {
        return <div className="fieldNoMessage">Нет сообщений</div>
    } else {
        return (
            <div className="messageField">
                <ul className="messageBlock">
                    {list.map((item) => {
                        return <li key={item.id}><h3>{item.author}</h3><p>{item.message}</p></li>
                    })}
                </ul>
            </div>
        )
    }
}





















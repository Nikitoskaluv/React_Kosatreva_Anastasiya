

const Message = (props) => {
    return (

        <h1 className="title">Переданнный текст: <span style={{ fontStyle: "italic", color: "black" }}>{props.message}</span></h1>
    );
}
export default Message;
export const mapChatSnapshotToChat = (snapshot) => {

    return ({
        name: snapshot.val().name,
        id: snapshot.key,
        messages: snapshot.val().messages
    })
}
export const mapMessageSnapshotToMessage = (snapshot) => (
    ({
        message: snapshot.val(),
        id: snapshot.key
    })
)
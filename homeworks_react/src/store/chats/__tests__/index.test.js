import { chatsReducer, initialState } from '../reducer';
import { addChat, deleteChat } from '../actions';
import { addMessages } from '../../messages/actions'



describe('messages reducer tests', () => {
    it('вызов редьюсера без экшена вернет initialState', () => {
        const result = chatsReducer();
        expect(result).toEqual(initialState);
    })
})

it('новый чат добавляется в конец списка', () => {
    const chat = {
        name: `chat `,
        messages: {}
    };
    const result = chatsReducer(initialState, addChat(chat))

    expect(result).toEqual({
        chatList: [{
            name: `chat `,
            messages: {}
        }]
    });
});


it('чат удаляется из списка', () => {

    const chatList = [{
        name: `chat `,
        messages: {},
        id: 1
    },
    {
        name: `chat `,
        messages: {},
        id: 2
    }]

    const chatsResult = [
        {
            name: `chat `,
            messages: {},
            id: 1
        }
    ]

    const result = chatsReducer(
        { chatList },
        deleteChat(2));

    expect(result).toEqual({
        chatList: chatsResult
    })
})
it('в чат с определнным id добавятся сообщения', () => {
    const initialState = {
        chatList: [{
            name: `chat `,
            messages: {},
            id: 1
        },
        {
            name: `chat `,
            messages: {},
            id: 2
        }],
    };
    const message = {
        111: "hello",
    }
    const expectState = {
        chatList: [{
            name: `chat `,
            messages: {
                111: "hello",
            },
            id: 1
        },
        {
            name: `chat `,
            messages: {},
            id: 2
        }],
    }
    const result = chatsReducer(initialState, addMessages(message, 1));
    expect(result).toEqual(expectState);
})




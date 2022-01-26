import { messagesReducer, initialState } from '../reducer';
// import { render } from '../../test-utils.js';



describe('messages reducer tests', () => {
    it('вызов редьюсера без экшена вернет initialState', () => {
        const result = messagesReducer();
        expect(result).toEqual(initialState);
    })
})
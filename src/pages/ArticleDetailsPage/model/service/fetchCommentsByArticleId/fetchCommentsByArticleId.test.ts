import axios from 'axios';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Comment } from 'entities/Comment';
import {
    fetchCommentsByArticleId,
} from './fetchCommentsByArticleId';

jest.mock('axios');
const mockedAxios = jest.mocked(axios, true);

describe('fetchCommentsByArticleId.test', () => {
    test('success', async () => {
        const comments: Comment[] = [
            {
                id: '1',
                text: 'comment1',
                user: {
                    id: '1',
                    username: 'Algemist',
                    avatar: 'avatar.png',
                },
            },
            {
                id: '2',
                text: 'comment2',
                user: {
                    id: '1',
                    username: 'Algemist',
                    avatar: 'avatar.png',
                },
            },
        ];

        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));
        const result = await thunk.callThunk('1');
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toBe(comments);
    });
    test('reject', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(mockedAxios.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});

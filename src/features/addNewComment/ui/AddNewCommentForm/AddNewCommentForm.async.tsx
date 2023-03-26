import { FC, lazy } from 'react';
import { AddNewCommentFormProps } from './AddNewCommentForm';

export const AddNewCommentFormAsync = lazy<FC<AddNewCommentFormProps>>(() => new Promise((res) => {
    // @ts-ignore
    setTimeout(() => res(import('./AddNewCommentForm')), 1500);
}));

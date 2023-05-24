import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Icon } from '../Icon';
import CopyIcon from '../../../assets/icons/CopyRedesigned.svg';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Icon
                Svg={CopyIcon}
                clickable
                onClick={onCopy}
                className={cls.copyButton}
            />
            <code>{text}</code>
        </pre>
    );
});

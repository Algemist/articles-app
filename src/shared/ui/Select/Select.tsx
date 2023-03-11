import { ChangeEvent, memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOptions[];
    value?: string;
    onChange?: (value?: string) => void;
    readOnly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {
        className,
        options,
        value,
        onChange,
        label,
        readOnly,
    } = props;

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            value={opt.value}
            className={cls.option}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && (
                <span className={classNames(cls.label, {}, [className])}>
                    {`${label}>`}
                </span>
            )}
            <select
                disabled={readOnly}
                value={value}
                className={cls.select}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});

import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

/**
 * @deprecated
 */
export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        fallback,
        alt = 'image',
        src,
        errorFallback,
        ...otherProps
    } = props;

    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setIsError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            setIsLoading(false);
        };

        img.onerror = () => {
            setIsLoading(false);
            setIsError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return <img className={className} alt={alt} src={src} {...otherProps} />;
});

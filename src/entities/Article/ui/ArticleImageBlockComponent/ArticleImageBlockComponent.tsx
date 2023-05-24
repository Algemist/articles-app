import { memo } from 'react';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
    (props: ArticleImageBlockComponentProps) => {
        const { className, block } = props;

        return (
            <figure
                className={classNames(cls.ArticleImageBlockComponent, {}, [
                    className,
                ])}
            >
                <img src={block.src} alt={block.title} className={cls.img} />
                {block.title && (
                    <figcaption>
                        <ToggleFeatures
                            feature="isAppRedesigned"
                            off={
                                <TextDeprecated
                                    text={block.title}
                                    align={TextAlign.CENTER}
                                />
                            }
                            on={
                                <Text
                                    title={block.title}
                                    align="center"
                                    size="m"
                                />
                            }
                        />
                    </figcaption>
                )}
            </figure>
        );
    },
);

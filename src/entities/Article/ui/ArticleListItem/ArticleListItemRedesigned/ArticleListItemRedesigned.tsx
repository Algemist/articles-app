import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItemRedesigned.module.scss';
import { ArticleListItemProps } from '../ArticleListItem';
import { ArticleBlockType, ArticleView } from '../../../model/consts/consts';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import { Icon } from '@/shared/ui/redesigned/Icon';
import EyeIcon from '@/shared/assets/icons/EyeRedesigned.svg';
import { ArticleTextBlock } from '../../../model/types/article';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { getRouteArticlesDetails } from '@/shared/const/router';
import { Button } from '@/shared/ui/redesigned/Button';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListItemRedesignedProps extends ArticleListItemProps {
    className?: string;
}

export const ArticleListItemRedesigned = memo(
    (props: ArticleListItemRedesignedProps) => {
        const { className, article, view, target = '_self' } = props;

        const { t } = useTranslation('articles');

        const Views = (
            <HStack gap="8">
                <Icon Svg={EyeIcon} />
                <Text text={String(article.views)} className={cls.views} />
            </HStack>
        );

        if (view === ArticleView.BIG) {
            const textBlock = article.blocks.find(
                (block) => block.type === ArticleBlockType.TEXT,
            ) as ArticleTextBlock;

            return (
                <Card
                    padding="24"
                    max
                    data-testid="ArticleListItem"
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <VStack max gap="16">
                        <HStack gap="8">
                            <Avatar size={32} src={article.user.avatar} />
                            <Text bold text={article.user.username} />
                            <Text text={article.createdAt} />
                        </HStack>
                        <Text title={article.title} bold />
                        <Text title={article.subtitle} size="s" />
                        <AppImage
                            src={article.img}
                            className={cls.img}
                            alt={article.title}
                            fallback={<Skeleton width="100%" height={250} />}
                        />
                        {textBlock?.paragraphs && (
                            <Text
                                text={textBlock.paragraphs
                                    .slice(0, 2)
                                    .join(' ')}
                                className={cls.textBlock}
                            />
                        )}
                        <HStack max justify="between">
                            <AppLink
                                target={target}
                                to={getRouteArticlesDetails(article.id)}
                            >
                                <Button variant="outline">
                                    {t('Читать далее...')}
                                </Button>
                            </AppLink>
                            {Views}
                        </HStack>
                    </VStack>
                </Card>
            );
        }

        return (
            <AppLink
                target={target}
                to={getRouteArticlesDetails(article.id)}
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleListItem"
            >
                <Card className={cls.card} border="round" padding="0">
                    <AppImage
                        fallback={<Skeleton width="100%" height={200} />}
                        alt={article.title}
                        src={article.img}
                        className={cls.img}
                    />
                    <VStack className={cls.info} gap="4">
                        <Text title={article.title} className={cls.title} />
                        <VStack max gap="4" className={cls.footer}>
                            <HStack justify="between" max>
                                <Text
                                    text={article.createdAt}
                                    className={cls.date}
                                />
                                {Views}
                            </HStack>
                            <HStack gap="4">
                                <Avatar
                                    size={32}
                                    src={article.user.avatar}
                                    className={cls.avatar}
                                />
                                <Text bold text={article.user.username} />
                            </HStack>
                        </VStack>
                    </VStack>
                </Card>
            </AppLink>
        );
    },
);

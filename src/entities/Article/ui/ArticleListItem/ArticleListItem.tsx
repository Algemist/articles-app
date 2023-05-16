import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/deprecated/Text';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { Card } from '@/shared/ui/deprecated/Card';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { AppImage } from '@/shared/ui/deprecated/AppImage';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import { ArticleView, ArticleBlockType } from '../../model/consts/consts';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import { getRouteArticlesDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { className, article, view, target = '_self' } = props;

    const { t } = useTranslation('articles');

    const Types = <Text text={article.type.join(', ')} className={cls.types} />;
    const Views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div
                data-testid="ArticleListItem"
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {Types}
                    <AppImage
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                        fallback={<Skeleton width="100%" height={250} />}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticlesDetails(article.id)}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {t('Читать далее...')}
                            </Button>
                        </AppLink>
                        {Views}
                    </div>
                </Card>
            </div>
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
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <AppImage
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                        fallback={<Skeleton width={200} height={200} />}
                    />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {Types}
                    {Views}
                </div>
                <Text text={article.title} className={cls.title} />
            </Card>
        </AppLink>
    );
});

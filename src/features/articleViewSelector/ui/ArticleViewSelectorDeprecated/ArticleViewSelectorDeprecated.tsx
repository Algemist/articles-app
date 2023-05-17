import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSelectorDeprecated.module.scss';
import { ArticleView } from '@/entities/Article';
import TileIcon from '@/shared/assets/icons/tiled.svg';
import ListIcon from '@/shared/assets/icons/listArticle.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';

interface ArticleViewSelectorDeprecatedProps {
    className?: string;
    onClick: (newView: ArticleView) => () => void;
    view: ArticleView;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TileIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelectorDeprecated = memo(
    (props: ArticleViewSelectorDeprecatedProps) => {
        const { className, onClick, view } = props;

        return (
            <div
                className={classNames(cls.ArticleViewSelectorDeprecated, {}, [
                    className,
                ])}
            >
                {viewTypes.map((viewType) => (
                    <Button
                        theme={ButtonTheme.CLEAR}
                        onClick={onClick(viewType.view)}
                        key={viewType.view}
                    >
                        <Icon
                            Svg={viewType.icon}
                            className={classNames(
                                '',
                                { [cls.Selected]: viewType.view === view },
                                [],
                            )}
                            width={24}
                            height={24}
                        />
                    </Button>
                ))}
            </div>
        );
    },
);

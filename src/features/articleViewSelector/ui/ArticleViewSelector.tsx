import { memo } from 'react';
import { ArticleView } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleViewSelectorDeprecated } from './ArticleViewSelectorDeprecated/ArticleViewSelectorDeprecated';
import { ArticleViewSelectorRedesigned } from './ArticleViewSelectorRedesigned/ArticleViewSelectorRedesigned';

interface ArticleViewSelectorProps {
    className?: string;
    view: ArticleView;
    onViewClick: (view: ArticleView) => void;
}

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
        onViewClick?.(newView);
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <ArticleViewSelectorDeprecated
                    onClick={onClick}
                    view={view}
                    className={className}
                />
            }
            on={
                <ArticleViewSelectorRedesigned
                    onClick={onClick}
                    view={view}
                    className={className}
                />
            }
        />
    );

    // return (
    //     <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
    //         {viewTypes.map((viewType) => (
    //             <Button
    //                 theme={ButtonTheme.CLEAR}
    //                 onClick={onClick(viewType.view)}
    //                 key={viewType.view}
    //             >
    //                 <Icon
    //                     Svg={viewType.icon}
    //                     className={classNames(
    //                         '',
    //                         { [cls.Selected]: viewType.view === view },
    //                         [],
    //                     )}
    //                     width={24}
    //                     height={24}
    //                 />
    //             </Button>
    //         ))}
    //     </div>
    // );
});

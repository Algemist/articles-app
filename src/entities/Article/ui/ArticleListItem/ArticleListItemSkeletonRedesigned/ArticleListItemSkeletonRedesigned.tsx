import { memo } from 'react';
import { ArticleListItemSkeletonProps } from '../ArticleListItemSkeleton';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleView } from '../../../model/consts/consts';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticleListItemSkeletonRedesignedProps
    extends ArticleListItemSkeletonProps {
    className?: string;
}

export const ArticleListItemSkeletonRedesigned = memo(
    (props: ArticleListItemSkeletonRedesignedProps) => {
        const { className, view } = props;

        if (view === ArticleView.BIG) {
            return (
                <Card className={className} padding="24" max>
                    <VStack max gap="16">
                        <VStack max gap="8">
                            <Skeleton width={189} height={32} />
                            <Skeleton width="100%" height={76} />
                        </VStack>
                        <Skeleton width="100%" height={28} />
                        <Skeleton width="100%" height={420} />
                        <Skeleton width="100%" height={66} />
                        <Skeleton width="100%" height={38} />
                    </VStack>
                </Card>
            );
        }

        return <Card className={className}>1</Card>;
    },
);

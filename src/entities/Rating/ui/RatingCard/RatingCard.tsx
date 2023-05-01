import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card';
import { Text } from '@/shared/ui/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating';
import { Modal } from '@/shared/ui/Modal';
import { Input } from '@/shared/ui/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Drawer } from '@/shared/ui/Drawer';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
    } = props;

    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const OnSelectStars = useCallback((selectedStarsCount: number) => {
        setStarsCount(selectedStarsCount);
        if (hasFeedback) {
            setIsModalOpen(true);
        } else {
            onAccept?.(selectedStarsCount);
        }
    }, [hasFeedback, onAccept]);

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalContent = (
        <VStack
            gap="32"
            max
        >
            <Text title={feedbackTitle} />
            <Input
                data-testid="RatingCard.Input"
                placeholder={t('Ваш отзыв')}
                value={feedback}
                onChange={setFeedback}
            />
            <HStack max gap="16" justify="end">
                <Button
                    data-testid="RatingCard.Save"
                    onClick={acceptHandle}
                    theme={ButtonTheme.OUTLINE}
                >
                    {t('Сохранить')}
                </Button>
                <Button
                    data-testid="RatingCard.Cancel"
                    onClick={cancelHandle}
                    theme={ButtonTheme.OUTLINE_RED}
                >
                    {t('Отменить')}
                </Button>
            </HStack>
        </VStack>
    );

    return (
        <Card
            data-testid="RatingCard"
            max
            className={classNames('', {}, [className])}
        >
            <VStack align="center" gap="8">
                <Text title={starsCount ? t('Спасибо за отзыв') : title} />
                <StarRating selectedStarts={starsCount} size={40} onSelect={OnSelectStars} />
            </VStack>
            <BrowserView>
                <Modal isOpen={isModalOpen} lazy>
                    {modalContent}
                </Modal>
            </BrowserView>
            <MobileView>
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
                    {modalContent}
                </Drawer>
            </MobileView>
        </Card>
    );
});

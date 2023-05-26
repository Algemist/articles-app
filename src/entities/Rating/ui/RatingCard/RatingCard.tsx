import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserView, MobileView } from 'react-device-detect';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

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

    const OnSelectStars = useCallback(
        (selectedStarsCount: number) => {
            setStarsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandle = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(starsCount, feedback);
    }, [feedback, onAccept, starsCount]);

    const cancelHandle = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(starsCount);
    }, [onCancel, starsCount]);

    const modalActionButton = (
        <HStack max gap="16" justify="end">
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <>
                        <ButtonDeprecated
                            data-testid="RatingCard.Save"
                            onClick={acceptHandle}
                            theme={ButtonTheme.OUTLINE}
                        >
                            {t('Сохранить')}
                        </ButtonDeprecated>
                        <ButtonDeprecated
                            data-testid="RatingCard.Cancel"
                            onClick={cancelHandle}
                            theme={ButtonTheme.OUTLINE_RED}
                        >
                            {t('Отменить')}
                        </ButtonDeprecated>
                    </>
                }
                on={
                    <>
                        <Button
                            data-testid="RatingCard.Save"
                            onClick={acceptHandle}
                            variant="outline"
                        >
                            {t('Сохранить')}
                        </Button>
                        <Button
                            data-testid="RatingCard.Cancel"
                            onClick={cancelHandle}
                            variant="outline"
                        >
                            {t('Отменить')}
                        </Button>
                    </>
                }
            />
        </HStack>
    );

    const modalContent = (
        <VStack gap="32" max>
            <ToggleFeatures
                feature="isAppRedesigned"
                off={
                    <>
                        <TextDeprecated title={feedbackTitle} />
                        <InputDeprecated
                            data-testid="RatingCard.Input"
                            placeholder={t('Ваш отзыв')}
                            value={feedback}
                            onChange={setFeedback}
                        />
                        {modalActionButton}
                    </>
                }
                on={
                    <>
                        <Text title={feedbackTitle} />
                        <Input
                            data-testid="RatingCard.Input"
                            placeholder={t('Ваш отзыв')}
                            value={feedback}
                            onChange={setFeedback}
                        />
                        {modalActionButton}
                    </>
                }
            />
        </VStack>
    );

    const content = (
        <>
            <VStack align="center" gap="8">
                <ToggleFeatures
                    feature="isAppRedesigned"
                    off={
                        <TextDeprecated
                            title={starsCount ? t('Спасибо за отзыв') : title}
                        />
                    }
                    on={
                        <Text
                            title={starsCount ? t('Спасибо за отзыв') : title}
                        />
                    }
                />

                <StarRating
                    selectedStarts={starsCount}
                    size={40}
                    onSelect={OnSelectStars}
                />
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
        </>
    );

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <CardDeprecated
                    data-testid="RatingCard"
                    max
                    className={classNames('', {}, [className])}
                >
                    {content}
                </CardDeprecated>
            }
            on={
                <Card
                    data-testid="RatingCard"
                    max
                    padding="24"
                    border="round"
                    className={classNames('', {}, [className])}
                >
                    {content}
                </Card>
            }
        />
    );
});

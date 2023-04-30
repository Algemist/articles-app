import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {
    className?: string;
}

const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('adminPanel');

    return (
        <Page data-testid="AdminPanelPage" className={classNames('', {}, [className])}>
            {t('Панель администратора')}
        </Page>
    );
});

export default memo(AdminPanelPage);

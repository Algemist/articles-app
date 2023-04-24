import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';

const ProfilePage = memo(() => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('profile');

    return (
        <Page>
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;

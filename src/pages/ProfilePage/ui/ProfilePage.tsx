import { memo } from 'react';
import { Page } from 'widgets/Page';
import { Text } from 'shared/ui/Text/Text';
import { EditableProfileCard } from 'features/EditableProfileCard';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

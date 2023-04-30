import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from '@/widgets/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';

const ProfilePage = memo(() => {
    const { id } = useParams<{id: string}>();

    return (
        <Page data-testid="ProfilePage">
            <EditableProfileCard id={id} />
        </Page>
    );
});

export default ProfilePage;

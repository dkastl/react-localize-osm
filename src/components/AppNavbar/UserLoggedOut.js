import React from 'react';
import { useTranslation } from 'react-i18next';
import LoadingButton from "../common/LoadingButton";

export default function UserLoggedOut({login, loading}) {
    const { t } = useTranslation();

    return (
        <LoadingButton 
            title={t('Login')}
            loading={loading}
            onClick={login}
        />
    );
}

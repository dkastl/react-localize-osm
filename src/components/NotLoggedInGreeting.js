import { useTranslation } from 'react-i18next';
import { Interweave } from 'interweave';
import { githubUrl } from '../config/settings';

export default function NotLoggedInGreeting() {
    const { t } = useTranslation();

    return (
      <div>
        <h2>{t('Welcome')}</h2>
        <p><Interweave content={t('About', { githubUrl })} /></p>
        <p>{t('StartEditing')}</p>
      </div>
    );
}

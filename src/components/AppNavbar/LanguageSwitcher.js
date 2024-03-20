import { useTranslation } from 'react-i18next';
import Dropdown from 'react-bootstrap/Dropdown';
import { languages } from '../../config/i18n';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
      <Dropdown onSelect={(eventKey) => i18n.changeLanguage(eventKey)}>
          <Dropdown.Toggle variant="secondary" id="dropdown-i18n" className="mx-2">
              {languages[i18n.language].name}
          </Dropdown.Toggle>

          <Dropdown.Menu>
              {Object.entries(languages).map(([code, { name }]) => (
                  <Dropdown.Item eventKey={code} key={code}>
                      {name}
                  </Dropdown.Item>
              ))}
          </Dropdown.Menu>
      </Dropdown>
  );
}

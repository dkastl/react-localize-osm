import Button from "react-bootstrap/Button";
import ChangesetBox from "./ChangesetBox";
import "./ChangesetSettings.css";
import {useState, useEffect} from "react";
import { useTranslation } from 'react-i18next';

export default function ChangesetSettings({changeset, handlers}) {
    const [visible, setVisible] = useState();
    const { t } = useTranslation();

    useEffect(() => {
        if(!changeset)
            setVisible(false);
    }, [changeset]);

    return (
        <div id="changeset">
            <Button 
                id="changeset-button"
                onClick={() => setVisible(!visible)}
                disabled={!changeset}
            >{
                changeset ? 
                t('ActiveChangeset', { id: changeset.id })
                : t('NoActiveChangeset')
            }</Button>
            {visible ?
            <ChangesetBox  
                changeset={changeset}
                handlers={handlers}
            />
            : null}
        </div>
    );
}

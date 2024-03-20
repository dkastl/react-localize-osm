import {Fragment} from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useTranslation } from 'react-i18next'; 

export default function UserLoggedIn({user, logout}) {
    const { t } = useTranslation(); 

    return (
        <Fragment>
            {user.img ? 
                <Image 
                    src={user.img.href}
                    className="avatar" 
                    thumbnail 
                    rounded
                /> 
                : null
            }
            <Navbar.Text className="mx-2"
                >{user.display_name}
            </Navbar.Text>
            <Button onClick={logout}>{t('Logout')}</Button>
        </Fragment>
    );
}

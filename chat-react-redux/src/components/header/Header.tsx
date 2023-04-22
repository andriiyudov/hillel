import './Header.css';
import {Link} from 'react-router-dom';

import type {FC} from 'react';


type Props = {
    backButton?: boolean,
}

const Header: FC<Props> = ({backButton}) => {
    return (
        <header className="header">
            <h1 className="header__title">
                {backButton && (
                    <div className="header__back-button">
                        <Link to='/'>Back</Link>
                    </div>
                )}
                SPDU
            </h1>
        </header>
    );
}

export default Header;

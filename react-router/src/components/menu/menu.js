import {Link} from 'react-router-dom';

export const Menu = () => {
    return (
        <ul>
            <li>
                <Link to="/">Main</Link>
            </li>
            <li>
                <Link to="/contacts">Contacts</Link>
            </li>
        </ul>
    )
}


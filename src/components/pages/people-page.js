import React  from "react";
import Row from '../row';
import { useNavigate, useParams} from 'react-router-dom';
import { PersonList, PersonDetails } from '../sw-components';

const PeoplePage = () =>{

        const navigate = useNavigate();
        const handleItemSelected = (id) => {
            navigate(`/people/${id}`);
        };
        const {id}  = useParams();
        return (
            <Row
                // left={<PersonList />} // default props without func
                left={<PersonList onItemSelected={handleItemSelected} />}
                right={<PersonDetails itemID={id} />}
            />
        )
}

export default PeoplePage;
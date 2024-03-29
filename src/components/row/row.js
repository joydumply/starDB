import React from "react";
import PropTypes from "prop-types";

const Row = ({left, right}) => {
    return(
        <div className='row mb2'>
            <div className='col-md-6'>
                {left}
            </div>

            <div className='col-md-6'>
                {right}
            </div>

        </div>
    )
}

Row.propTypes = {
    left: PropTypes.node,
    right: PropTypes.node // node - что-то что может отрендерить
    // right: PropTypes.element // node - что-то что может отрендерить (только React.Element)
}

export default Row;
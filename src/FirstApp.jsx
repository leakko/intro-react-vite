import PropTypes, { string } from 'prop-types';

export const FirstApp = ( { title, subtitle } ) => {

    return (
        <>
            <h1>{ title }</h1>
            <p>{ subtitle }</p>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}
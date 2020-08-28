import React from 'react';

const Country = (props) => {
    const { name, population, region, flag } = props.country;
    const countryStyle = { border: '1px solid red', margin: '10px', padding: '10px' }
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h3>this is a {name}</h3>
            <img style={{ height: '50px' }} src={flag} alt="" />
            <h2>population:{population} </h2>
            <h3>region:{region}</h3>
            <button onClick={() => handleAddCountry(props.country)}>Add Country:</button>

        </div>
    );
};

export default Country;
import React from 'react';

const Header = ({ title }) => {
    const headerStyle = {
        backgroundColor: 'royalblue',
        color: '#fff'
    };

    return (
        <header style={headerStyle}>
            <h1>{title}</h1>
        </header>
    );
};

Header.defaultProps = {
    title: 'Vivian Love'
};

export default Header;

// UserCard.js
import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <img src={user.avatar} alt={user.name} />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </div>
    );
};

UserCard.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    }).isRequired,
};

export default UserCard;

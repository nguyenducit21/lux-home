import React from 'react';

const MessengerIcon = () => {
    const messengerLink = 'https://m.me/61576564125709';

    const handleClick = () => {
        window.open(messengerLink, '_blank');
    };

    return (
        <div className="messenger-icon" onClick={handleClick}>
            <img
                src="https://www.iconpacks.net/icons/2/free-facebook-messenger-icon-2881-thumb.png"
                alt="Messenger"
            />
            <span className="messenger-tooltip">Bạn muốn tư vấn về các sản phẩm SmartHome</span>
        </div>
    );
};

export default MessengerIcon;
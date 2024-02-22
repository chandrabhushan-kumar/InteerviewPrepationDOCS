import React, { useState } from 'react';

function UpdatedComponent(OriginalComponent) {
    function EnhancedComponent() {
        const [money,setMoney] = useState(10);

        const handleIncrease = () => {
            setMoney(money * 2);
        }

        return <OriginalComponent  handleIncrease={handleIncrease} money={money} />;
    }

    return EnhancedComponent;
}

export default UpdatedComponent;

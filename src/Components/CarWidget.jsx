import React from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { FiShoppingCart } from 'react-icons/fi';

const CarWidget = () => {
    const itemCount = 0;

    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>{`Items en el carrito: ${itemCount}`}</Popover.Body>
        </Popover>
    );

    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button variant="light">
                <FiShoppingCart className='fs-3' />
                <span className="badge bg-danger">{itemCount}</span>
            </Button>
        </OverlayTrigger>
    );
};

export default CarWidget;

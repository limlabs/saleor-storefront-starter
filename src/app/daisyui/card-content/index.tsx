import React, { FC, PropsWithChildren } from 'react';


const CardBody = React.forwardRef(function Card({ children }) {
	return (
        <div className="card-body">
            {children}
        </div>
    );
}) as FC<PropsWithChildren>;

export default CardBody;
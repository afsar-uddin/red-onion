import React from 'react';
import { useParams } from 'react-router';

const BreakfastDetail = () => {
    const { breakfastid } = useParams();
    console.log(breakfastid)
    return (
        <div>
            break fast detail for {breakfastid}
        </div>
    );
};

export default BreakfastDetail;
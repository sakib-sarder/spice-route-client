import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div>
            <div>
                <h1>Indulge in our authentic Bengali cuisine at Spice Route</h1>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Home;
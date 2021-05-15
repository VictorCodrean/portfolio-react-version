import React from 'react';
import Card from '../CardSample/Card'



const Portfolio = () => {
    return (
        <>
            <main className="container">

                <h1 className="my-5 about-header about-background text-center">Portfolio</h1>

                <div className="row row-cols-1 row-cols-md-2 g-4">

                    <Card />

                </div>
            </main>
        </>
    )
}

export default Portfolio;
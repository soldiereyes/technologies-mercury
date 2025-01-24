import React from 'react';
import './Statistics.css';

const Statistics: React.FC = () => {
    return (
        <section className="statistics-section">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-3 col-6">
                        <h2 className="stat-number">+4.000</h2>
                        <p className="stat-description">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="col-md-3 col-6">
                        <h2 className="stat-number">+600</h2>
                        <p className="stat-description">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="col-md-3 col-6">
                        <h2 className="stat-number">+20.000</h2>
                        <p className="stat-description">Lorem ipsum dolor sit amet</p>
                    </div>
                    <div className="col-md-3 col-6">
                        <h2 className="stat-number">+3.000</h2>
                        <p className="stat-description">Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Statistics;

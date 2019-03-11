import React from 'react';



export default ({duration}) =>
            <nav className="level">
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">
                            Days
                        </p>
                        <p className="title">
                            {Math.floor(duration.asDays())}
                        </p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">
                            Hours
                        </p>
                        <p className="title">
                            {duration.hours().toString().padStart(2, '0')}
                        </p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">
                            Minutes
                        </p>
                        <p className="title">
                            {duration.minutes().toString().padStart(2, '0')}
                        </p>
                    </div>
                </div>
                <div className="level-item has-text-centered">
                    <div>
                        <p className="heading">
                            Seconds
                        </p>
                        <p className="title">
                            {duration.seconds().toString().padStart(2, '0')}
                        </p>
                    </div>
                </div>
            </nav>
import React, { useState } from 'react';
import { GoDotFill } from "react-icons/go";

const Permission = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleViewClick = () => {
        setShowPopup(true);
    };

    return (
        <>
            <div className='request-card'>
                <h2 className='title'>Pending Requests</h2>
                <div className='table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Reason</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Vidhesh</td>
                                <td>20-03-2024</td>
                                <td>22-03-2024</td>
                                <td>jane1234@yahoo.com</td>
                                <td><GoDotFill /></td>
                                <td><button onClick={handleViewClick}>View</button></td>
                            </tr>
                            <tr>
                                <td>Vidhesh</td>
                                <td>20-03-2024</td>
                                <td>22-03-2024</td>
                                <td>jane1234@yahoo.com</td>
                                <td><GoDotFill /></td>
                                <td><button onClick={handleViewClick}>View</button></td>
                            </tr>
                            <tr>
                                <td>Vidhesh</td>
                                <td>20-03-2024</td>
                                <td>22-03-2024</td>
                                <td>jane1234@yahoo.com</td>
                                <td><GoDotFill /></td>
                                <td><button onClick={handleViewClick}>View</button></td>
                            </tr>
                            <tr>
                                <td>Vidhesh</td>
                                <td>20-03-2024</td>
                                <td>22-03-2024</td>
                                <td>jane1234@yahoo.com</td>
                                <td><GoDotFill /></td>
                                <td><button onClick={handleViewClick}>View</button></td>
                            </tr>
                            <tr>
                                <td>Vidhesh</td>
                                <td>20-03-2024</td>
                                <td>22-03-2024</td>
                                <td>jane1234@yahoo.com</td>
                                <td><GoDotFill /></td>
                                <td><button onClick={handleViewClick}>View</button></td>
                            </tr>
                            <tr>
                                <td>Vidhesh</td>
                                <td>20-03-2024</td>
                                <td>22-03-2024</td>
                                <td>jane1234@yahoo.com</td>
                                <td><GoDotFill /></td>
                                <td><button onClick={handleViewClick}>View</button></td>
                            </tr>
                            <tr>
                                <td>Vidhesh</td>
                                <td>20-03-2024</td>
                                <td>22-03-2024</td>
                                <td>jane1234@yahoo.com</td>
                                <td><GoDotFill /></td>
                                <td><button onClick={handleViewClick}>View</button></td>
                            </tr>
                            <tr>
                                <td>Vidhesh</td>
                                <td>20-03-2024</td>
                                <td>22-03-2024</td>
                                <td>jane1234@yahoo.com</td>
                                <td><GoDotFill /></td>
                                <td><button onClick={handleViewClick}>View</button></td>
                            </tr>
                            <tr>
                                <td>Vidhesh</td>
                                <td>20-03-2024</td>
                                <td>22-03-2024</td>
                                <td>jane1234@yahoo.com</td>
                                <td><GoDotFill /></td>
                                <td><button onClick={handleViewClick}>View</button></td>
                            </tr>
                            <tr>
                                <td>Vidhesh</td>
                                <td>20-03-2024</td>
                                <td>22-03-2024</td>
                                <td>jane1234@yahoo.com</td>
                                <td><GoDotFill /></td>
                                <td><button onClick={handleViewClick}>View</button></td>
                            </tr>
                            <tr>
                                <td>Vidhesh</td>
                                <td>20-03-2024</td>
                                <td>22-03-2024</td>
                                <td>jane1234@yahoo.com</td>
                                <td><GoDotFill /></td>
                                <td><button onClick={handleViewClick}>View</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-card">
                        <div className="btn">
                        <button className="close-btn" onClick={() => setShowPopup(false)}>x</button>
                        </div>
                        <p><strong>Reason:</strong> Due to an unexpected family emergency, I need to take leave to attend to urgent personal matters.I apologize for any inconvenience this may cause and will ensure a smooth transition of my work during my absence.</p>
                        <p>Let me know if you need a more detailed or formal version!</p>
                        <div className="popup-buttons">
                            <button className="decline">Decline</button>
                            <button className="approve">Approve</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Permission;

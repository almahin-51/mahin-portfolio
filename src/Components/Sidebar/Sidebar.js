import React from 'react';

const Sidebar = () => {
    return (
        <div className="sideBar">
            <img src="https://scontent.fdac31-1.fna.fbcdn.net/v/t39.30808-6/241381072_1641781576153523_5075329523376652900_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEZoyFjZ62q_iGD2a3r5gP_7MmanWBNgRzsyZqdYE2BHAPKMJD1xOsXA3JcbDf-tI2RF_7SVUNBrPYfmnqhMLTE&_nc_ohc=0wd9E3tApzoAX9wtmer&_nc_ht=scontent.fdac31-1.fna&oh=92f454a66997b8bead5ca910ee019aba&oe=61A871FE" alt="" />
            <h2 className="mt-3">AL Mohaiminul Islam Mahin</h2>
            <ul>
                <li><a href="#banner">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
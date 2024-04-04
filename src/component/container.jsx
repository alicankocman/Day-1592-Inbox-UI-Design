    import React from 'react';
    import './main.css';

    const Container = (props) => {

    return (
        <div className="container">
        <div className="content">
            <div className="image">
                <div className="circle"></div>
            {props.imageUrl && <img src={props.imageUrl} alt="Resim" />}
            </div>
            <div className="text">
            <div className="content-wrapper">
                <div className="children">{props.children}</div>
                <div className="additional-text">{props.additionalText}</div>
            </div>
            {props.altyazi && <p>{props.altyazi}</p>}
            </div>
        </div>
        </div>
    );
    };

    export default Container;

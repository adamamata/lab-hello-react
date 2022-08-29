import './Feature.css';

function Feature(props){
    return (
        <div className="Feature">
            <img id='featureImg' src={props.src} alt="feature src"></img>
            <h3>{props.heading}</h3>
            <p>{props.sub}</p>
        </div>
    );
}

export default Feature; 
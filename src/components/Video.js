import { useState } from "react";

const Video = (props) => {
    // let valoraciones = 0;
    // const valorar = () => {
    //     valoraciones += +1;
    //     console.log(valoraciones)
    // }

    const [valoraciones, setValoraciones] = useState(0); // Esto es un Hook
    const valorar = () => {
        setValoraciones(valoraciones + 1);
    }

    return (
        <div className="video-container">
            <div className="video-image">
                <img src={props.thumbnail} alt={props.title} />
            </div>
            <div className="video-info">
                <h3>{props.title}</h3>
                <button onClick={valorar}>Valorar</button> {valoraciones} Estrellas
                <p>Upload date: {props.dateAdded}</p>
                <h4>Channel's Title: {props.channel}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    );
}
export default Video;
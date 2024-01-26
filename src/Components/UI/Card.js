import './Card.css'

const Card=(props)=>{
    const Classes='Card ' +props.className
    return(
        <div className={Classes}>{props.children}</div>
    );
}
export default Card;
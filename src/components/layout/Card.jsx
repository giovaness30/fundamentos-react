import "./Card.css"

export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || '#6C5B7B',
        borderColor: props.color || '#6C5B7B',
    }

    return (
        <div className="card" style={cardStyle}>
            <div className="title">{props.titulo}</div>
            <div className="content">{props.children}</div>
        </div>
        )
}
const myButton = (props) => {
    return(
        <div>
            <button onClick={() => props.clicked()}>Click Here</button>
        </div>

    );
}

export default myButton;
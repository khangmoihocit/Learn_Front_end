function PropsHello(props){
    // , {name = "gia tri mac dinh khi khong truyen", content: message}
    return (
        <>
            {/* <div>{message} {name}</div> */}
            <div>Username: {props.getUserName()}</div>
        </>
    )
}

export default PropsHello;

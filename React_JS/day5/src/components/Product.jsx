export default function Product({url, title, price}){

    return (
        <>
            <div>
                <img src={url}/>
                <div>{title}</div>
                <div>to {price}</div>
            </div>
        </>
    );
}
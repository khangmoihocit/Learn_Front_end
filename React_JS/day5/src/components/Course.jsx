
//render array
export default function Course(){
    const course = ["javascript", "html", "css"];
    const renderUI = ()=>{
        return (
            <ul>
                {course.map((item, index)=>{
                    return <li key={index}> {item} </li>
                })}
            </ul>
        );
    }

    return renderUI();
}
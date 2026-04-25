type FirstProps = {
    content: string;
   isUnderLindes?: boolean; 
   myColor?: string;
}
function First(props: FirstProps) {
    return (
        <div>
            <h1 style={{ color: props.myColor ? props.myColor : 'black' }}>First Component</h1>
            <p style={{ textDecoration: props.isUnderLindes ? 'underline' : 'none'}}>
                {props.content}
            </p>
        </div>
    );
}
export default First;
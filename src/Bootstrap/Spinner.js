import { Spinner } from "react-bootstrap";

const SpinnerFn =(props)=>{
    if (props.isSpin) {
        return (
            <div>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        )
    }
    else {
        return <div></div>
    }

}
export default SpinnerFn;

import { useSelector, useDispatch } from "react-redux";
import * as actions from "./actions";


const useComplex = (value, doIt) => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    if(doIt){
        return () => {
            dispatch(actions.addCount(value))
            dispatch(actions.minusCount(value+1))
        }
    }
    else {
        return () => {}
    }


}


export {useComplex}
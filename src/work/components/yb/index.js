/**
 * Created by zengtao on 2017/5/19.
 */
import React, {Fragment, useEffect , useState } from 'react';
import "./index.scss"
//本项目的模板页面


let defaultProps={}

export default function Index(prop) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    let props={
        ...defaultProps,...prop
    }
    const {} = props;

    useEffect(() => {
        // Update the document title using the browser API

        return ()=>{
        }
    },[count]);



    return (
        <div>

        </div>
    );
}

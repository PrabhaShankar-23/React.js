import React, {useEffect, useState} from 'react'

const test1 = () => {

    const [pageno,setpageno] = useState(1)
    const [data, setdata] = useState([])
    useEffect(funtion(){

        //
fetch(url...)
.then(res => setdata(res) )
.then 
    }, [pageno])
    
  return (
    <div>test1</div>
  )
}

export default test1
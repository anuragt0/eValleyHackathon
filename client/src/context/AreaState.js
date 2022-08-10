import AreaContext from "./AreaContext";

import {React, useState} from 'react'

const AreaState = (props) => {
    const [area, setArea] = useState(null);

  return (


    <AreaContext.Provider value={{area, setArea}}>
            {props.children}
    </AreaContext.Provider>


  )
}

export default AreaState
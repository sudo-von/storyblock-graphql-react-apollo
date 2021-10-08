import Components from './index'
import React  from 'react'

export default (props) =>
    <div>
        {props.content.body.map((blok) =>
            Components(blok)
        )}
    </div>
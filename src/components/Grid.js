import Components from './index'
import React  from 'react'

export default (props) => (
    <div className="grid">
      {props.content.columns.map((blok) =>
        Components(blok)
      )}
    </div>
)
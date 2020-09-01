import * as React from 'react'
import './index.less'

interface IButton {
    name: string,
    type: string,
    return: () => React.ReactElement
}

const MyButton = (): React.ReactElement => {
    return <div></div>
}

export default MyButton

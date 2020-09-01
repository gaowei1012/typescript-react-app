import * as React from 'react'
import './index.less'

interface IProps {
    type: string,
    name: string,
}

class TextInput extends React.PureComponent<IProps> {
    render() {
        return (
            <>
                <div> hello text input </div>
                <p>{name}</p>
            </>
        )
    }
}

export default TextInput

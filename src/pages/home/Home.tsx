import * as React from 'react'
import { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, message } from 'antd'
import './index.less'

interface Pepole {
    name: String,
    age: Number,
    desc?: String
}

const Home = (): React.ReactElement => {

    const [count, setCount] = useState<Number>(0)
    const [arr, setArr] = useState<[]>([])
    const [add, setAdd] = useState<Number>(0)

    const [user, setUser] =useState<Pepole>({name: 'age', age: 12, desc: 'test'})

    useEffect(() => {
        // TODO
    }, [])

    return (
        <div className='homeContainer'>
            <span>{count}</span>
            <Button type='ghost'>增加</Button>
        </div>
    )
}

export default Home

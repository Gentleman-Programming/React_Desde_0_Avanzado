import { useEffect } from "react"

interface Props {
    children: JSX.Element | number | string | boolean
}

function Test({ children }: Props) {
    useEffect(() => {
        console.log('Test');
    });

    return (
        <div style={{ color: 'red' }}>{ children }</div>
    )
}

export default Test
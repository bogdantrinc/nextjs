import axios from 'axios';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

export const Upload = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [input, setInput] = useState(String);
    const [response, setResponse] = useState(Object);

    const handleOnClick = () => {
        axios.get(`http://localhost:5000/api?id=${input ? input : 'default-response'}`)
            .then(res => {
                setResponse(res.data);
                const params = new URLSearchParams();
                params.set('dataId', res.data.id);
                router.replace(`${pathname}?${params.toString()}`);
            })
            .catch(error => console.log(error));
    };

    return (
        <>
            <h1>This Component is part of the Layout.</h1>
            <div>
                <input
                    type='text'
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    className='text-black'
                />
                <button type='submit' onClick={handleOnClick}>Send</button>
            </div>
            <h1>Input: {input}</h1>
            <h1>Response: {JSON.stringify(response)}</h1>
        </>
    );
}

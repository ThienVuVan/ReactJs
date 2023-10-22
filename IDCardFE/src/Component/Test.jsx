import React from 'react';
import axios from 'axios';
function Test() {
    let form = {
        user_name: '0989273623',
        password: '123456a@'
    }
    let handleSend = async () => {
        console.log(form);
        try {
            let response = await axios.post('http://aicsdeep.ddns.net:8090/apiocr/v1/login', form)
            console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <button onClick={handleSend}>send</button>
        </>
    )
}
export default Test;
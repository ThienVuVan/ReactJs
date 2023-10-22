import React from 'react';
import axios from 'axios';
function IDCardTest() {
    let base64String = "";
    let form = {
        user_name: "0989273623",
        token_login: "4ff8f8af3d5e4b33bf85112e5fa6355e",
        encode: "base64",
        image: ""
    }

    function imageUploaded(event) {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function () {
            base64String = reader.result.replace("data:", "")
                .replace(/^.+,/, "");

            form.image = base64String;
        }
        reader.readAsDataURL(file);
    }
    let handleSend = async () => {
        console.log(form);
        try {
            let response = await axios.post('http://aicsdeep.ddns.net:8090/apiocr/v1/ocr', form)
            console.log(response)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <input type="file" onChange={imageUploaded} />
            <button onClick={handleSend}>send</button>
        </>
    )
}
export default IDCardTest;
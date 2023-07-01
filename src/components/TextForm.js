import React, { useState } from 'react'
// import xyz , { showAlert } from "../App";


export default function TextForm(props) {
    const [text, setText] = useState('');
    function convertToupCase() {
        // console.log(' real text value: '+text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upperCase", "success")
    }
    let convertToloCase = () => {
        setText(text.toLowerCase())
        props.showAlert("Converted to lowerCase", "success")
    }
    function evenhandler(event) {
        // console.log('onchange is fired!!dhuz dhuz')
        setText(event.target.value)
    }

    // let removespace = () => {
    //     let newtext = text.replace(/\s/g, "");
    //     setText(newtext)
    // }
    function capitalizeSentences() {
        let sentences = text.split('.');
        let capitalizedSentences = sentences.map((sentence) => {
            let trimmedSentence = sentence.trim();
            if (trimmedSentence.length > 0) {
                let firstChar = trimmedSentence.charAt(0).toUpperCase();
                let restOfString = trimmedSentence.slice(1).toLowerCase();
                return firstChar + restOfString;
            }
            return trimmedSentence;
        });
        setText(capitalizedSentences.join(". "))
        props.showAlert("Text Capitalized", "success");
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    // Credits: Coding Wala
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    const LoremGen = () => {
        setText(`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Minus, voluptatem! Corporis quis velit aliquid quae odit, 
        excepturi molestias deleniti unde esse veniam harum 
        obcaecati repudiandae, commodi sit dolorem repellat possimus Phasellus dapibus dictum mauris, non varius sem suscipit vitae. Sed condimentum dapibus nunc nec commodo. Ut tristique diam eget tellus convallis, a feugiat mauris malesuada. Pellentesque convallis commodo turpis, vitae ultrices ante laoreet a. Fusce non facilisis urna. Integer eget nulla ac nisl viverra mollis id sed turpis. Duis bibendum enim in mi tristique, id feugiat ipsum auctor. Pellentesque aliquet vulputate enim sed ultrices. Etiam laoreet enim non est tristique iaculis. Cras cursus sem felis, 
        id posuere enim luctus id. Sed pellentesque fermentum nisi. Phasellus eleifend sapien ut justo tristique, nec varius 
        ipsum viverra.Nulla semper tincidunt metus, sed elementum massa pharetra ac. Vestibulum varius sem at odio consectetur cursus. 
        Aliquam vel sem sit amet risus efficitur volutpat. 
        Integer mattis neque eu elit vehicula, at consequat nunc sollicitudin. Maecenas 
        sed mauris ac arcu convallis consectetur. Suspendisse`)
        props.showAlert("Lorem Ipsum text Generated!", "success");
    }
    const RnameGen = () => {
        const adjectives = ['Happy', 'Brave', 'Silly', 'Smart', 'Clever', 'Kind', 'Witty'];
        const nouns = ['Cat', 'Dog', 'Tiger', 'Lion', 'Elephant', 'Monkey', 'Dolphin'];
        const numbers = Math.floor(Math.random() * 1000);
        const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
        setText(`${randomAdjective}${randomNoun}${numbers}`)
        props.showAlert("Random Name generated", "success");
    }
    const urlEncode = () => {
        setText(encodeURIComponent(text))
        props.showAlert("URL Encoded!", "success");
    }
    const urlDecode = () => {
        setText(decodeURIComponent(text))
        props.showAlert("URL Decoded!", "success");
    }
    const generateRandomPassword = () => {
        let length = parseInt(prompt("Enter Length of Password"))
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
        let password = '';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }

        setText(password);
        props.showAlert("Random Password Generated", "primary")
    };
    const generateRandomEmail = () => {
        let domain = prompt("Enter Domain Name Like gmail, hotmail etc")
        const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let email = '';

        for (let i = 0; i < 10; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            email += characters[randomIndex];
        }

        email += `@${domain}.com`;

        setText(email);
        props.showAlert("Random Email Generated", "info")
    };
    const textTospeech = () => {
        const speech = new SpeechSynthesisUtterance();
        speech.text = text;
        window.speechSynthesis.speak(speech);
    }


    return (
        <>
            <div className='container'>
                <h1 className='text-center py-3'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: 'grey', color: 'white' }} onChange={evenhandler} id="textarea" rows="8"></textarea>
                </div>
                <div className="container">
                    <button className="btn btn-primary mx-1 my-1" onClick={convertToupCase}>Convert to UpperCase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={convertToloCase}>Convert to LowerCase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={capitalizeSentences}>capitalize</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>copy</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={LoremGen}>LoremIpsum-text Generetor</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={RnameGen}>Generate Random Name</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={urlEncode}>Encode URL</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={urlDecode}>Decode URL</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={generateRandomPassword}>Random Password</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={generateRandomEmail}>Random E-mail</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={textTospeech}>Speak text</button>
                    <button className="btn btn-danger mx-1 my-1" onClick={() => {
                        setText('')
                        props.showAlert("Text Removed", "danger")
                    }}>Clear</button>
                </div>
            </div>
            <div className="container my-4">
                <h2>Your Text Summary</h2>
                <p><strong>words: </strong>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} <b>and</b>  <b>characters: </b>{text.length}</p>
                <p><b>Minutes to read: </b>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</p>
                <h2>Text Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
            </div>
        </>
    )
}

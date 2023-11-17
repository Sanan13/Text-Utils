import React from 'react'

function About(props) {
    return (
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#4a525b' }}>
            <h1>Welcome to TextUtils - Your Ultimate Text Transformation Tool!</h1>
            <ul>
                <li>TextUtils is a versatile web application designed to empower you with a wide range of text manipulation capabilities. Whether you're a professional, a student, or just someone who loves playing around with text, TextUtils has got you covered!</li>

                <li>With TextUtils, you can effortlessly convert your text to uppercase, making it perfect for creating eye-catching headlines and emphasizing important messages. On the other hand, you can easily switch to lowercase, giving your text a more subtle and approachable tone.</li>

                <li>Say goodbye to cluttered text! TextUtils intelligently removes extra spaces from your content, ensuring a clean and tidy appearance. Whether you're working on an essay, an email, or a coding project, clean and well-organized text can make all the difference.</li>

                <li>Need to extract important information from a text block? TextUtils can help you identify and extract email addresses from your content with just a click. No more manual scanning or copy-pasting – TextUtils does it all for you!</li>

                <li>TextUtils simplifies the process of copying text by providing a hassle-free, one-click copy functionality. Now you can swiftly copy your transformed text and use it wherever you need, be it in documents, emails, or social media posts.</li>

                <li>For a fresh start, the "Clear Text" feature allows you to wipe your text area clean instantly. No more deleting or selecting – just a single click and you're ready to begin anew.</li>

                <li>TextUtils is the perfect tool to count words and characters in your text. Whether you're keeping track of the length of your writing or simply analyzing data, TextUtils makes counting a breeze.</li>

                <li>Experience the convenience of TextUtils and unlock the potential of your text with its powerful and user-friendly features. Embrace the ease of text transformation and take control of your writing like never before. Try TextUtils today and elevate your text to a whole new level!</li>
            </ul>
        </div>
    )
}

export default About

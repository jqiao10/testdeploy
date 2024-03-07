import React, { useState } from 'react';

function DescriptionBox () {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
    setWordCount(inputText.length > 0 ? inputText.trim().split(/\s+/).length : 0);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        placeholder="This property ... "
        className='textboxlarge'
      />
      <p className='wordcounter'>Word Count: {wordCount}</p>
    </div>
  );
};

export default DescriptionBox;

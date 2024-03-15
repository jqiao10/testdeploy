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
        className='w-5/6 min-w-32 h-[40vh] border-1 border-cyan-500'
      />
      <p className='text-cyan-500'>Word Count: {wordCount}</p>
    </div>
  );
};

export default DescriptionBox;

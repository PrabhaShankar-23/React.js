import React from 'react'
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';


const Editor = () => {

    const { quill, quillRef } = useQuill();

    React.useEffect(() => {

     if (quill) {
        quill.on('text-change', (delta, oldDelta, source) => {
        // console.log('Text change!');

        console.log(quill.getText()); // Get text only
        console.log("quill trace",quill); // Get text only
        console.log("contents",quill.getContents()); // Get delta contents
        console.log("inner html",quill.root.innerHTML); // Get innerHTML using quill
        console.log('quill ref',quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        // quill.setText("hello Super!");
      });
    }
  }, [quill]);
  

  return ( <>
  
      <div>Editor</div>
      <div style={{ width: '150 rem', 
           height: '100 rem', 
    //   display: 'flex',
       }}>
      <div ref={quillRef} />
      </div>

  </>
  )
}

export default Editor
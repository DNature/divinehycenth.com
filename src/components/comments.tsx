import React from 'react';

const CommentBox = React.forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
  return <div ref={ref} className='comments' {...props} />;
});

const Comments = ({ ...props }) => {
  const commentBox = React.createRef<HTMLDivElement>();

  React.useEffect(() => {
    const commentScript = document.createElement('script');
    commentScript.async = true;
    commentScript.src = 'https://utteranc.es/client.js';
    commentScript.setAttribute('repo', 'dnature/divinehycenth.com');
    commentScript.setAttribute('issue-term', 'pathname');
    commentScript.setAttribute('label', 'discuss');
    commentScript.setAttribute('theme', 'preferred-color-scheme');
    commentScript.setAttribute('crossorigin', 'anonymous');

    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }
  }, []);

  return <CommentBox {...props} ref={commentBox} />;
};

export default Comments;

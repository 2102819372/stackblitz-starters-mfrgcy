import React, { useRef, useEffect, forwardRef } from 'react';
const ChildComponent = forwardRef((props, ref) => {
  const someFunction = () => {
    console.log('This is a function in the child component');
  };

  // 使用useImperativeHandle将函数暴露给父组件
  React.useImperativeHandle(ref, () => ({
    someFunction,
  }));

  return <div>Child Component</div>;
});

const ParentComponent = () => {
  const childRef = useRef();

  useEffect(() => {
    // 调用子组件的someFunction
    if (childRef.current) {
      childRef.current.someFunction();
    }
  }, []);

  return <ChildComponent ref={childRef} />;
};

export default ParentComponent;

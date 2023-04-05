const Box = (props) => {
  //  Write your code here.
  const {className,children}=props;
  const boxes={`box-container ${className}`};
  return{
      <div className={boxes}>
        <p className='message'>{message}</p>
      </div>
  }
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="title">Boxes</h1>
    <div className='box-container'>
        <Box className='box1' 
            message='small' />
        <Box className='box2'
            message='Medium' />
        <Box className='box3'
            message='Large' />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

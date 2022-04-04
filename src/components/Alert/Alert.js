function Alert({color, size, children}) {

  // const {size, color, children} = props;



  const style = {
    color: color,
    fontSize: size,
  };

  return (
    <div style={style}>
        {children}
    </div>
  );
}


export default Alert;
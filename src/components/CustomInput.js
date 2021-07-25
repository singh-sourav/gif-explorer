function CustomInput(props) {
  const { onChangeCallback, placeholder, id } = props;
  return (
    <input id={id} placeholder={placeholder} onChange={onChangeCallback} />
  );
}

export default CustomInput;

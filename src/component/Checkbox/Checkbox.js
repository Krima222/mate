const Checkbox = ({ id, name, value, checked, onChange, text }) => {
    return (
      <label 
        htmlFor={id} 
        style={{ 
          display: 'inline-block',
          flexGrow: 1,
          backgroundColor: checked ? 'blue' : 'gray',
          color: checked ? 'white' : 'black',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'center',
          cursor: 'pointer'
        }}
      >
        <input 
          type="checkbox" 
          id={id} 
          name={name} 
          value={value} 
          checked={checked} 
          onChange={onChange} 
          style={{ display: 'none' }} 
        />
        {text}
      </label>
    );
  };
  
  export default Checkbox;
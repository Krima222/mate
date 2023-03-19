const Checkbox = ({ id, name, value, checked, onChange, text }) => {
    return (
      <label 
        htmlFor={id} 
        style={{ 
          display: 'inline-block',
          flexGrow: 1,
          backgroundColor: checked ? '#FFFFFF' : '#232323',
          border: `2px solid ${checked ? '#FFFFFF' : '#78797B'}`,
          color: checked ? '#000000' : '#656565',
          padding: '10px',
          borderRadius: '8px',
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
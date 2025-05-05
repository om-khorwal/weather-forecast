'use client'

interface ButtonProps {
  onClick: any;
  label: string;
  className: string;
}

const Button=({ onClick, label, className}:ButtonProps) => {
  return (
    <div>
      <button 
        onClick={onClick} 
        className={className}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;

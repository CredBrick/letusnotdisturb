import Link from 'next/link';

const Button = ({ label }) => {
  return (
    <div className='flex items-center justify-center mt-10'>
      <button
        className='text-white hover:bg-white px-4 py-6 hover:text-black'
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
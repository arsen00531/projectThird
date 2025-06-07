const Error = ({message} : {message : string}) => {
    return (
        <h2 className='text-3xl text-center absolute font-bold centered'>{message}</h2>
    );
};

export default Error;
import { useLocation } from 'react-router';

const NotFounded = () => {
    const location = useLocation();
    return (
        <div className='container m-auto'>
            <h2 className='text-2xl text-center'>Не найдено! По пути {location.pathname}</h2>
        </div>
    );
};

export default NotFounded;
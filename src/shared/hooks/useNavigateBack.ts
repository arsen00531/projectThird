import { useNavigate } from 'react-router';

const useNavigateBack = () => {
    const navigate = useNavigate();
    return () => {
        navigate(-1);
    }
};

export default useNavigateBack;
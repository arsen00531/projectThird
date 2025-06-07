import { useNavigate } from "react-router";

const InformationBlock = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center my-3 gap-3 container">
      <div className="p-3 rounded-2xl">
        <p className="font-sans text-xl sm:text-2xl text-center">
          На этой странице данные кэшируеются. Если вы выйдите на страничку
          рецептов и нажмете на то блюдо, которое уже открывали, запрос на
          сервер сделан еще раз не будет. Данные подтянуться с кэша.
        </p>
      </div>
      <button
        onClick={() => {navigate('/')}}
        className="px-3 py-1 w-fit border-solid border-2 border-green-400 rounded-xl flex justify-center items-center"
      >
        <p  className="text-2xl  font-sans">Back</p>
      </button>
    </div>
  );
};

export default InformationBlock;

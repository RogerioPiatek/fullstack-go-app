interface CardComponentProps {
  card: {
    id: number;
    name: string;
    email: string;
  };
}

const CardComponent = ({ card: { email, id, name } }: CardComponentProps) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-2 mb-2 hover:bg-gray-100 min-w-52">
      <div className="text-sm text-gray-600">Id: {id}</div>
      <div className="text-lg font-semibold text-gray-800">{name}</div>
      <div className="text-md text-gray-700">{email}</div>
    </div>
  );
};

export default CardComponent;

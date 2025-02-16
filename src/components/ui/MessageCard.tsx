const MessageCard = ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="mt-4 text-gray-700">{message}</p>
    </div>
  );
};

export default MessageCard;

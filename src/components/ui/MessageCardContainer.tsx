// pages/index.js

import MessageCard from "./MessageCard";

export default async function MessageCardContainer() {
  const res = await fetch(`${process.env.PROJECT_URL}/api/dashboard/messages`);
  const messages = await res.json();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {messages.data.length &&
          messages?.data.map(
            (
              message: { name: string; email: string; message: string },
              index: number
            ) => (
              <MessageCard
                key={index}
                name={message?.name}
                email={message?.email}
                message={message?.message}
              />
            )
          )}
      </div>
    </div>
  );
}

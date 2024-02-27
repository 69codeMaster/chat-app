import React from "react";

const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="p-6 h-full w-full bg-gray-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 text-2xl">
        {children}
      </div>
    </div>
  );
};

export default Card;

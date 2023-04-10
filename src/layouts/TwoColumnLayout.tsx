import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TwoColumnLayout = ({ children }: Props) => {
  const leftColumnContent = React.Children.toArray(children).find(
    (child) => (child as any)?.type === TwoColumnLayout.LeftColumnContent
  );

  const rightColumnContent = React.Children.toArray(children).find(
    (child) => (child as any)?.type === TwoColumnLayout.RightColumnContent
  );
  return (
    <div className='container bg-gray-dark min-h-screen min-w-full text-gray-light font-serif p-7 flex flex-wrap justify-between'>
      <div className='w-full lg:w-4/5 px-0 mx-0'>{leftColumnContent}</div>
      <div className='w-full lg:w-1/5 px-0 mx-0'>{rightColumnContent}</div>
    </div>
  );
};

type ColumnContentProps = {
  children: React.ReactNode;
};

TwoColumnLayout.LeftColumnContent = ({ children }: Props) => <>{children}</>;
TwoColumnLayout.RightColumnContent = ({ children }: Props) => <>{children}</>;

export default TwoColumnLayout;

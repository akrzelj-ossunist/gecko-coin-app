const Navigation: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  return (
    <>
      <div className="flex w-full bg-blue-500 sticky top-0">
        <p className="text-white font-extrabold text-3xl m-2">CoinBunny</p>
      </div>
      {children}
    </>
  );
};

export default Navigation;

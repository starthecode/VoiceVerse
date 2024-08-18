export const Glow = ({ classes }: any) => {
  return (
    <span
      className={`${classes} fixed z-10 blur-[150px] w-[180px] h-[180px] rounded-full -translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2`}
    />
  );
};

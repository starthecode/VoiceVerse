import Link from 'next/link';

export const Button = ({ text, link }: any) => {
  return (
    <div className="flex h-fit w-fit mt-8">
      {link ? (
        <Link href={link} className="custom_button">
          {text}
        </Link>
      ) : (
        <button className="custom_button" type="submit">
          {text}
        </button>
      )}
    </div>
  );
};

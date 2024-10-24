interface TopicsButtonProps {
  buttonText: string;
}

export default function TopicsButton({ buttonText }: TopicsButtonProps) {
  return (
    <li>
      <button className="cursor-pointer flex items-center justify-center px-3 py-2 font-medium text-font-light-blue capitalize text-sm bg-font-lighter-blue rounded-lg w-fit h-fit transition-all duration-300 hover:bg-font-light-orange hover:text-font-black">
        {buttonText}
      </button>
    </li>
  );
}

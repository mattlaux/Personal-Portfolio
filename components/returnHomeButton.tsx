import Link from 'next/link';
import Button from './button';

const ReturnHomeButton = () => {
  return (
    <Link href="/">
      <a>
        <Button
          buttonColor="red"
          buttonText="&larr; Return to homepage"
        ></Button>
      </a>
    </Link>
  );
};

export default ReturnHomeButton;

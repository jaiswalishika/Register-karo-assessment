import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const CardWithLink = ({
  title,
  subTitle,
  link,
  icon,
  bgColor = "#FFFFFF",
  borderColor = "#FFFFFF",
}) => {
  return (
    <Card
      className="w-[330px] sm:w-96 shadow-none"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
        border: `1px solid ${borderColor}`,
      }}
    >
      <CardBody className="flex flex-col items-center justify-center">
        {/* <img src={icon} data-testid={"renewal-icon"} /> */}
        {icon}
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 mt-4 text-center text-xl font-bold"
        >
          {title}
        </Typography>
        <Typography className="text-center font-light text-lg">
          {subTitle}
        </Typography>
      </CardBody>
      {link && (
        <CardFooter className="pt-0 flex justify-center">
          <a href={link} className="inline-block">
            <Button
              size="sm"
              variant="text"
              className="flex items-center gap-2"
            >
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Button>
          </a>
        </CardFooter>
      )}
    </Card>
  );
};

export default CardWithLink;

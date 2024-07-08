import Heading from "@/components/Heading";
import { Button } from "@nextui-org/react";
import { size } from "lodash";
import { SlUserFollow } from "react-icons/sl";

export default function Home() {
  return (
    <>
      <Heading>
        Hello Home Page
        <Button
          color="primary"
          variant="bordered"
          radius="sm"
          endContent={<SlUserFollow size={15} />}>Hello Click me</Button>
      </Heading >
    </>
  );
}

import { Button, HStack } from "@chakra-ui/react";

interface Props {
  onPageSelect: (n: number) => void;
  currentPage: number;
}

const Pagination = ({ onPageSelect, currentPage }: Props) => {
  const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <HStack spacing="10px" paddingTop="10px" paddingBottom="20px">
      {currentPage > 1 && (
        <Button as={Button} onClick={() => onPageSelect(currentPage - 1)}>
          Previous
        </Button>
      )}
      {pages.map((p) => (
        <Button
          as={Button}
          onClick={() => onPageSelect(p)}
          key={p}
          fontWeight={currentPage === p ? "bolder" : "normal"}
          fontSize={currentPage === p ? "120%" : "100%"}
        >
          {p}
        </Button>
      ))}
      {currentPage < 10 && (
        <Button as={Button} onClick={() => onPageSelect(currentPage + 1)}>
          Next
        </Button>
      )}
    </HStack>
  );
};

export default Pagination;

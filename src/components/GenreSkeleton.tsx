import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <ListItem paddingY="5px">
      <HStack gap={1}>
        <Skeleton boxSize="35px" borderRadius="10px"></Skeleton>
        <SkeletonText width="150px" noOfLines={2}></SkeletonText>
      </HStack>
    </ListItem>
  );
};

export default GenreSkeleton;

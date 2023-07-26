import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="280px"></Skeleton>
      <CardBody>
        <SkeletonText height="50px" noOfLines={4}></SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;

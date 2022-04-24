interface getPaginationTypes {
  totalItems: number;
  limit: number;
}

export const getTotalPages = ({
  totalItems,
  limit,
}: getPaginationTypes): number => {
  return Math.ceil(totalItems / limit);
};

interface getOffsetTypes {
  currentPage: number;
  limit: number;
}

export const getOffset = ({ currentPage, limit }: getOffsetTypes): number => {
  return (currentPage - 1) * limit;
};

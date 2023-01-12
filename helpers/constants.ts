type CategoryType = 'Text' | 'Image' | 'Video';

export type ContantsType = {
  categories: CategoryType[];
};

const constants: ContantsType = {
  categories: ['Text', 'Image', 'Video'],
};

export default constants;

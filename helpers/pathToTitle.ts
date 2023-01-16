import upperCaseFirstLetter from './upperCaseFirstLetter';

const pathToTitle = (path: string) => {
  // admin/post/add => ['admin', 'post', 'add'] => ['add', 'post', 'admin']
  const pathArr = path.slice(1).split('/').reverse();

  // ['admin', 'post', 'admin']
  const pathArrUppercase = pathArr.map(
    (string) =>
      string.includes('-') // blog status
        ? string
            .split('-')
            .map((s) => upperCaseFirstLetter(s))
            .join(' ') // blog status
        : upperCaseFirstLetter(string), // admin
  );

  // ['Add', 'Post', 'Admin'] => Add | Post | Admin
  return pathArrUppercase.join(' | ');
};

export default pathToTitle;

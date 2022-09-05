export const transformErrors = (errors) => {
    return errors.reduce((acc, obj) => {
      acc[obj.path[0]] = obj.message;
      return acc;
    }, {});
  };
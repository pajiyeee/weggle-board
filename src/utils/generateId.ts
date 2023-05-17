export const generateId = (array: any) => {
  return (
    array.reduce((max: number, cur: any) => {
      return Math.max(max, +cur.id);
    }, 0) + 1
  ).toString();
};

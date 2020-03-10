export const categoryUrls = {
  all: 'http://localhost:3001/actors',
  maincast: 'http://localhost:3001/actors?majority=maincast',
  secondary: 'http://localhost:3001/actors?majority=secondary',
  male: 'http://localhost:3001/actors?gender=Male',
  female: 'http://localhost:3001/actors?gender=Female',
};

export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

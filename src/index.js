let caches = {};

const parseKeys = (key) => {
  if (!key) {
    throw new Error('key cannot be undefined');
  }
  return key;
};

const recursionRead = (keys) => {
  return keys ? caches[keys] : caches;
};

export function read(key) {
  return key ? recursionRead(parseKeys(key)) : caches;
}

const recursionWrite = (keys, value) => {
  caches[keys] = value;
  return { [keys]: value };
};

export function write(key, value) {
  return recursionWrite(parseKeys(key), value);
}

export const set = write;

const recursionClear = (key) => {
  if (!key) {
    caches = {};
    return caches;
  }

  const deleteData = caches[key];
  delete caches[key];

  return deleteData;
};

export function clear(key) {
  return recursionClear(key);
}

export default {
  read,
  write,
  set: write
};

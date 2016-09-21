let caches = {};

const parseKeys = (key) => {
  if (!key) {
    throw new Error('key cannot be undefined');
  }
  return typeof key === 'string' ? key.split('.') : key;
};

const recursionRead = (keys) => {
  let value;
  const result = keys.every((key) => {
    value = caches[key];
  return !!value;
});
  return result ? value : undefined;
};

export function read(key) {
  return key ? recursionRead(parseKeys(key)) : caches;
}

const recursionWrite = (keys, value) => {
  const obj = {} || caches[keys[0]];
  keys.forEach((key, i) => {
    if (i === keys.length - 1) {
    obj[key] = value
  } else {
    obj[key] = obj[key] || {};
  }
});

  caches = { ...caches, ...obj };
  return caches[keys[0]];
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

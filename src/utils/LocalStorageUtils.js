const keyPrefix = "ileto::";

const LocalStorageUtils = {
  set(key, value) {
    const val = typeof value === "object" ? JSON.stringify(value) : value;

    window.localStorage.setItem(keyPrefix + key, val);
  },
  get(key) {
    const value = window.localStorage.getItem(keyPrefix + key);

    try {
      return JSON.parse(value) || {};
    } catch (e) {
      return value || {};
    }
  },
};

export default LocalStorageUtils;
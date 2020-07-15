type Custom = object | string | Array<any>;

interface Storage {
  getItem?: any;
  setItem?: any;
}

export const customSesionStorage: Storage = {
  getItem: function (item: string): Custom {
    const data: any = sessionStorage.getItem(item);
    const result: Custom = JSON.parse(data);

    return result;
  },
  setItem: function (name: string, value: string): void {
    const stringify: string = JSON.stringify(value);

    sessionStorage.setItem(name, stringify);
  },
};

export const customLocalStorage: Storage = {
  getItem: function (item: string): Custom {
    const data: any = localStorage.getItem(item);
    const result: Custom = JSON.parse(data);

    return result;
  },
  setItem: function (name: string, value: string): void {
    const stringify: string = JSON.stringify(value);

    localStorage.setItem(name, stringify);
  },
};

export const customSesionStorage: any = {
  getItem: function (item: string): any {
    const data: any = sessionStorage.getItem(item);

    return JSON.parse(data);
  },
  setItem: function (name: string, value: string): void {
    const stringify: string = JSON.stringify(value);

    sessionStorage.setItem(name, stringify);
  },
};

export const customLocalStorage: any = {
  getItem: function (item: string): any {
    const data: any = localStorage.getItem(item);
    return JSON.parse(data);
  },
  setItem: function (name: string, value: string): void {
    const stringify: string = JSON.stringify(value);

    localStorage.setItem(name, stringify);
  },
};

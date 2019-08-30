import axios, { AxiosRequestConfig } from 'axios';

interface Action {
  method?: string;
  url: string;
  config?: AxiosRequestConfig;
}

export interface Actions {
  [key: string]: Action;
}

interface Params {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  config?: AxiosRequestConfig;
}

export interface Group {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (params?: Params) => void;
}

export default (actions: Actions) => {
  const group: Group = {};
  Object.entries(actions).forEach(entries => {
    const prop: string = entries[0];
    const action: Action = entries[1];
    const method = action.method || 'get';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    group[prop] = (params?: Params) => {
      const fn = axios[method];
      const config = (params || {}).config || {};
      const data = (params || {}).data || {};
      if (data) {
        return fn(`${process.env.API_BASE_URL}${action.url}`, data, {
          ...action.config,
          ...config,
        });
      }
      if (config) {
        return fn(`${process.env.API_BASE_URL}${action.url}`, {
          ...action.config,
          ...config,
        });
      }
      return fn(`${process.env.API_BASE_URL}${action.url}`);
    };
  });
  return group;
};

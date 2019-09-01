import axios, { AxiosRequestConfig } from 'axios';

interface Action {
  method?: string;
  url: string;
  config?: AxiosRequestConfig;
}

export interface Group {
  [key: string]: Action;
}

interface Params {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  config?: AxiosRequestConfig;
}

export interface Actions {
  requests: { [key: string]: (params?: Params) => void };
  urls: { [key: string]: string };
}

export default (prefix: string, group: Group) => {
  const actions: Actions = { requests: {}, urls: {} };
  Object.entries(group).forEach(entries => {
    const prop: string = entries[0];
    const action: Action = entries[1];
    const method = action.method || 'get';
    const url = `${process.env.API_BASE_URL}${prefix}${action.url}`;
    actions.urls[prop] = url;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    actions.requests[prop] = (params?: Params) => {
      const fn = axios[method];
      const config = (params || {}).config || {};
      const data = (params || {}).data || {};
      if (data) {
        return fn(url, data, {
          ...action.config,
          ...config,
        });
      }
      if (config) {
        return fn(url, {
          ...action.config,
          ...config,
        });
      }
      return fn(url);
    };
  });
  return actions;
};


export interface AppState {
  os: string,
  browser: string,
  installed: boolean;
  installPrompt: any | null;
}

export interface AppBarState {
  visible: boolean;
}

export interface ConnectionState {
  valid: boolean;
  url: string;
  port: string;
  error: boolean;
  loading: boolean;
}

export interface DialogState {
  install: boolean;
}
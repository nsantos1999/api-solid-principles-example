declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EMAIL_HOST: string;
      EMAIL_PORT: number;
      EMAIL_AUTH_USER: string;
      EMAIL_AUTH_PASS: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};

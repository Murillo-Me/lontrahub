declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_NODE_ENV: 'development' | 'production';
        }
    }
}

export {};

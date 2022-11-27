interface IConfig {
    development: {
        api: {
            url: string;
        };
    };
    production?: {
        api: {
            url: string;
        };
    };
}

const config: IConfig = {
    development: {
        api: {
            url: 'http://localhost:3000/',
        },
    },
    // production: {
    //     api: {
    //         url: 'https://api.lontrahub.com.br/',
    //     },
    // },
};

export default config[process.env.REACT_APP_NODE_ENV];

declare const _default: () => {
    port: number;
    database: {
        prismaUrl: string;
        typeorm: {
            host: string;
            port: number;
            username: string;
            password: string;
            database: string;
        };
    };
};
export default _default;

export const toRules1 = [
    {
        validator: async (rule, value, callback) => {
            if (!value) {
                return Promise.reject(new Error('代理编号不能为空！'));
            }
            if (!/^([0-9A-Za-z]{4,12})$/.test(value)) {
                return Promise.reject(new Error('请输入正确的代理编号'));
            }
        },
        required: true,
    },
];

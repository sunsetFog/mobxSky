/*
makeAutoObservable用于将对象自动转为mobx的观察者对象，使得mobx可以追踪和响应对象属性的变化
runInAction用于执行在action中定义的方法
*/
import { makeAutoObservable, runInAction } from 'mobx';
const themeStore = makeAutoObservable({
    data: {
        theme_value: sessionStorage.getItem('theme_skin') || '',
    },
    initTheme: () => {
        themeStore.setTheme('light');
    },
    setTheme: (type: string) => {
        sessionStorage.setItem('theme_skin', type);
        // 修改html标签的类名
        document.documentElement.className = type;
        // html设置属性
        document.documentElement.setAttribute('data-theme', type);
        // runInAction(() => {
        themeStore.data.theme_value = type;
        // });
    },
}) as any;
export default themeStore;

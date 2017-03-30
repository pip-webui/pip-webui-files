declare module pip.themes {














export interface IThemeService {
    theme: string;
    use(language: string): string;
}
export interface IThemeProvider extends IThemeService, ng.IServiceProvider {
    setRootVar: boolean;
    persist: boolean;
}

export let ThemeRootVar: string;
export let ThemeChangedEvent: string;
export let ThemeResetPage: string;


}

/// <reference path="../../typings/tsd.d.ts" /> 
class Config { 
    defaultErrorTimeout = 2000 
    error: (msg: string) => void
    openUrl: (url: string, title: string, icon?: string) => void
    openContent: (content: JSX.Element, title: string, icon?: string) => void
    openImage: (src: string, title?: string) => void
}

export let config = new Config();
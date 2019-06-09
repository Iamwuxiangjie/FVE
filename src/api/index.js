/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'

const BASE_URL = 'https://api.github.com/'

// https://api.github.com/search/repositories?q=vue&sort=starts
export const githubsearch = (q,sort) => ajax(BASE_URL+'search/repositories',{q,sort})



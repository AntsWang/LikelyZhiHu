import axios from 'axios'
const baseurl = "https://zhihu-agent.herokuapp.com/get?api=";
var apiZhihu = {
	startimage: '/4/start-image/1080*1776',
	news: '/4/news/latest',
	newsbyid: '/4/news/',//点击显示详情
	newsbydate: '/4/news/before/',
	newsinfo: '/4/story-extra',
	topics: '/4/themes',
	topicbyid: '/4/theme/',
	sections: '/3/sections',
	sectionbyid: '/3/section',
}
export default {
	Getnews() {
		return axios.get(baseurl.concat(apiZhihu.news));
	},
	Getnewsbyid(id) {
		return axios.get(baseurl.concat(apiZhihu.newsbyid).concat(id));
	},
	Getnewsbydate(date){
		return axios.get(baseurl.concat(apiZhihu.newsbydate).concat(date));
	},
	//影院热映
	Gettheater() {
		return axios.get('api/movie/in_theaters?start=0&count=10');
	},
	//即将上映
	Getcome() {
		return axios.get('api/movie/coming_soon?start=0&count=10');
	},
	//影片搜索
	Getsearch(params) {
		return axios.get('api/movie/search?q='+params);
	},
	//电影排行榜
	Gettop(flag) {
		return axios.get('api/movie/top250?start='+flag+'&count=10');
	}
	
}


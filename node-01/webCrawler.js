const fs = require('fs')
const http = require('https')
const cheerio = require('cheerio')
// 爬取简书上的图片
let url = 'https://www.jianshu.com'
let chunkData = ''
http.get(url,res=>{
	res.on('data',(chunk)=>{
		chunkData += chunk.toString('utf8')
		console.log('传输中....');
	})
	res.on('end',()=>{
		// console.log(chunkData)
		let $ = cheerio.load(chunkData)
		$('img').each((index,el)=>{
			console.log($(el).attr('src'))
		})
		console.log('传输完毕!')
		
	})
}).on('error',err=>{
	console.log('请求失败!');
})
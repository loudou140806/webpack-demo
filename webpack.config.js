var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var path = require('path');

module.exports = {
    //插件项
    plugins: [commonsPlugin,  new ExtractTextPlugin("[name].css")],
    //页面入口文件配置
    entry: {
        index : './src/pages/index/index.js',
		home  : './src/pages/home/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'asset/dev',
        filename: '[name].js'//[name].js会根据entry的名字输出相应js
    },
    module: {
        //加载器配置
        loaders: [
			//.css 文件使用 style-loader 和 css-loader 来处理
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            //.js 文件使用 jsx-loader 来编译处理
            { test: /\.js$/, loader: 'jsx-loader?harmony' },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    //其它解决方案配置
    resolve: {
		//查找module的话从这里开始查找
        root: path.join(__dirname), //绝对路径
		//自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.scss'],
		//注意一点，如果路径是相对路径则相对的是引用的文件，而不是当前文件
        alias: {
            plugins: 'src/plugins', // 别名可以是目录 
        	myDialog: 'src/plugins/dialog/dialog.js'// 也可以是文件
        }
    },
	//想要CDN插件的话用externals配置项
	externals: {
	        // require("jquery") 是引用自外部模块的
	        // 对应全局变量 jQuery
	        "jquery": "//cdn.bootcss.com/jquery/3.1.0/core.js"
    }

};
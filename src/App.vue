<template>
	<div id="app">
		<div style="position: absolute;top:80px;width: 100%;overflow: hidden;"><pointwave></pointwave></div>
		<header>
			<div class="header">
					<div class="dropdown">
						<div class="boxhead2"></div>
							<a @click="showList()" class="dropdown-open">								
								<span>{{title}}</span>										
							</a>
						<div class="boxfoot2"></div>	
					</div>
					<div class="dropdown-list" v-if="isShowList" @mouseleave="isShowList=false">
						<ul>								
							<li v-for="(item,index) in droptitle" :key="index" @click="title=item.title">		
								<router-link :to="item.url">{{item.title}}</router-link>	
							</li>						
						</ul>
					</div>
					<div class="title">崆峒智慧旅游大数据中心</div>
				<div class="calender">
					<div>{{clock|timeDate}}</div>
					<div>						
						<span>{{week|weekDate}}</span>
						<span>{{calendar|calendarDate}}</span>
					</div>
					</div>
			</div>
		</header>
		<router-view></router-view>		
	</div>
</template>

<style>
	@import url("../layui/css/layui.css");
	body {
		background-image: url('./assets/bg1.png');
		background-size: cover;
/* 		overflow: hidden;
		height: 850px; */
	}
	/* common */
	* {
		margin: 0;
		padding: 0;
	}
	
	a {
		text-decoration: none;
		color: white;
	}
	a:hover{
			text-decoration: none;
			color: white;
		}
	li {
		list-style-type: none;
	}
	
	.container-fluid {
		width: 100%;
	}
	
	.container {
		margin: 5px;
	}	
	/* common */
	/* 盒子 */
	.overview {
		height: 310px;
		box-sizing: border-box;
		padding: 8px;	
	}
	.overview2 {
		position: relative;
		height: 460px;
		box-sizing: border-box;
		padding: 8px;
	}
	.overview3 {
		position: relative;
		height: 620px;
		box-sizing: border-box;
		padding: 8px;
	}
	/* 四角框 */
	/* 上 */
	.boxhead:before,
	.boxhead:after {
		position: absolute;
		width: 1rem;
		height: 1rem;
		content: "";
		border-top: 3px solid #02a6b5;
		border-radius: 3px;
		top: -3px;
	}
	/* 下 */
	.boxfoot:before,
	.boxfoot:after {
		position: absolute;
		width: 1rem;
		height: 1rem;
		content: "";
		border-bottom: 3px solid #02a6b5;
		border-radius: 3px;
		bottom: -3px;
	}
	/* 右上,右下 */
	.boxhead:before,
	.boxfoot:before {
		border-left: 3px solid #02a6b5;
		left: -3px;
	}
	/* 左上,左下 */
	.boxhead:after,
	.boxfoot:after {
		border-right: 3px solid #02a6b5;
		right: -3px;
	}
	/* 四角框2*/
	/* 上 */
	.boxhead2:before,
	.boxhead2:after {
		position: absolute;
		width: 0.5rem;
		height: 0.5rem;
		content: "";
		border-top: 1px solid #02a6b5;
		top: -3px;
	}
	/* 下 */
	.boxfoot2:before,
	.boxfoot2:after {
		position: absolute;
		width: 0.5rem;
		height: 0.5rem;
		content: "";
		border-bottom: 1px solid #02a6b5;
		bottom: -2px;
	}
	/* 右上,右下 */
	.boxhead2:before,
	.boxfoot2:before {
		border-left: 1px solid #02a6b5;
		left: 0px;
	}
	/* 左上,左下 */
	.boxhead2:after,
	.boxfoot2:after {
		border-right: 1px solid #02a6b5;
		right: 0px;
	}

	
	.overgrid {
		box-sizing: border-box;
		padding: 15px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.overbox {
		border: 3px solid rgba(25,186,139,.17);
		box-sizing: border-box;
		background: rgba(255,255,255,.04) url('./assets/line.png');
		height: 100%;
		position: relative;
	}
	.overbox2 {
		border: 3px solid rgba(25,186,139,.17);
		box-sizing: border-box;
		background: rgba(255,255,255,.04) url('./assets/line.png');
		height: 100%;
		position: relative;
		margin-top: 15px;
	}
	.overtitle {
		font-size: 16px;
		color: #fff;
		text-align: left;
		padding: 15px;
	}
	
	.overtitle2:nth-of-type(2) {
		font-size: 16px;
		color: #fff;
		text-align: left;
		padding: 15px;
	}
	.overtitle2:nth-of-type(4) {
		margin-top: 30px;
		font-size: 16px;
		color: #fff;
		text-align: left;
		padding: 15px;
	}
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		position: relative;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	#date-time {
		font-size: 16px;
		color: #fff;
	}


	/* 倒三角 */
	.caret {
		display: inline-block;
		width: 0;
		height: 0;
		margin-left: 2px;
		vertical-align: middle;
		border-top: 4px dashed;
		border-top: 4px solid\9;
		border-right: 4px solid transparent;
		border-left: 4px solid transparent;
	}

	/* 头部 */
	.header {
		/* background-color: #0071c6; */
		position: relative;
		background-image: url('./assets/head.png');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center 20px;
		padding-bottom: 50px;
	}

	.header .title {
		text-align: center;
		letter-spacing: 5px;
		margin: 0 auto;
		width: 50%;
		height: 75px;
		line-height: 75px;
		position: relative;
		background-repeat: no-repeat;
		font-size: 22px;
		color: rgb(0, 255, 255);
		font-weight: bold;
	}

	/* 下拉菜单 */
	.header .dropdown {
		font-weight: bold;
		position: absolute;
		left: 20px;
		top: 20px;

	}
	
	.dropdown-open {
		background-color: rgb(16,54,87);
		/* border: 2px solid #02a6b5; */
		height: 50px;
		background-repeat: no-repeat;
		padding: 5px 10px;
		font-size: 16px;
		font-weight: bold;
		line-height: 1.5;
		border-radius: 3px;

	}
	.dropdown-open:hover{
		cursor: pointer;
	}
	.dropdown-list {		
		position: absolute;
		left: 20px;
		top: 50px;
		z-index: 999;
		transition: 1s ease;
		

	}

	.dropdown-list li>a {
		margin-top: 5px;
		background-color: rgb(16,54,87);
		/* border: 2px solid #02a6b5; */
		display: block;
		padding: 3px 20px;
		clear: both;
		font-weight: 400;
		white-space: nowrap;
		padding: 5px 10px;
		font-size: 16px;
		font-weight: bold;
		line-height: 1.5;
		border-radius: 3px;
		z-index: 999;

	}

	.dropdown-list li>a:hover {
		background-color: #00518e;
	}
	/* 时间部分 */
	.calender{
		color: #fff;
		position: absolute;
		right: 40px;
		top: 15px;
	}
	.calender div{
		font-size: 16px;
		font-weight: bold;
	}
	.calender span{
		margin: 0 5px;
		color: #898989;
		font-size: 12px;
	}
	.layui-icon{
		margin-right: 5px;
	}
	.caption {
		color: #47baef;
		text-align: center;
	}
	.value {
		margin-top: 10px;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
	}
	
	.value1 {
		font-family: Impact;
		font-size: 27px;
		color: #ffffff;
	}
	
	.value2 {
		font-style: normal;
		font-size: 12px;
		color: #fff;
		margin-left: 10px;
		margin-top: 10px;
	}
</style>
<script>	
	import pointwave from './components/wave.vue';
	var echarts = require('echarts');	
	export default {
		components:{pointwave},
		data() {
			return {
				clock: new Date(),
				calendar: new Date(),
				week:new Date(),
				title: '',
				time:'',
				droptitle: [{
						title: '崆峒山智慧旅游公众号粉丝分析',
						url: '/user',
						name: 'user'
					},
					{
						title: '天气环境动态分析',
						url: '/weather',
						name: 'weather'
					},
					{
						title: '门票销售及客流统计分析',
						url: '/ticket',
						name: 'ticket'
					},
					{
						title: '崆峒山年卡数据分析',
						url: '/nianka',
						name: 'nianka'
					}
				],
				isShowList: false,
			}
		},
		filters: {
			timeDate: function(value) {
				var date = new Date(value);
				var hours = (date.getHours()).toString().padStart(2, '0');
				var minutes = (date.getMinutes()).toString().padStart(2, '0');
				var seconds = (date.getSeconds()).toString().padStart(2, '0');
				return hours + ':' + minutes + ':' + seconds;
			},
			calendarDate: function(value) {
				var date = new Date(value);
				var year = date.getFullYear();
				var month = (date.getMonth() + 1).toString().padStart(2, '0');
				var day = (date.getDate()).toString().padStart(2, '0');
				
				return year + '/' + month + '/' + day;
			},
			weekDate:function(value){
				var date = new Date(value);
				var week = (date.getDay());
				var str='';
				switch (week){
					case 0:str='星期日';break;
					case 1:str='星期一';break;
					case 2:str='星期二';break;
					case 3:str='星期三';break;
					case 4:str='星期四';break;
					case 5:str='星期五';break;
					case 6:str='星期六';break;
				}
				return str;
			}
		},
		mounted: function() {			
			var that = this;
			this.time = setInterval(function() {
				that.clock = new Date();
			}, 1000);

			// 获取下拉菜单标题
			for (var i = 0; i < this.droptitle.length; i++) {
				if (this.droptitle[i].url.indexOf(this.$route.path) !== -1) {
					this.title = this.droptitle[i].title
				}
			}
		},
		methods: {
			showList: function() {
				this.isShowList = !this.isShowList
			},
	},
	beforeDestroy:function(){
		if(this.time){
			clearInterval(this.time);
		}
	},
	}
</script>

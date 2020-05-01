<template>
	<div class="bg">
		<div class="container-fluid">
			<div class="container">
				<main>
					<article>
						<section>
							<div class="layui-row" style="height: 635px">
								<!-- 左盒子 -->
								<div class="overview layui-col-md3">
									<!-- 昨日粉丝关键值 -->
									<div class="overbox2">
										<div class="boxhead"></div>
										<div class="overtitle">昨日粉丝关键值</div>
										<div class="overgrid">
											<div class="overdata layui-col-md6">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>新关注人数</div>
												<div class="value"><span class="value1">
														<countTo :startVal="0" :endVal="yesterdaydata1.text1" :duration="2000"></countTo>
													</span><span class="value2">人次</span></div>
											</div>

											<div class="overdata layui-col-md6">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>取消关注人数</div>
												<div class="value"><span class="value1">
														<countTo :startVal="0" :endVal="yesterdaydata1.text2" :duration="2000"></countTo>
													</span><span class="value2">人次</span></div>
											</div>
										</div>
										<div class="overgrid" style="margin-top: 15px;">
											<div class="overdata layui-col-md6">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>净增关注人数</div>
												<div class="value"><span class="value1">
														<countTo :startVal="0" :endVal="yesterdaydata1.text3" :duration="2000"></countTo>
													</span><span class="value2">人次</span></div>
											</div>
											<div class="overdata layui-col-md6">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>累计关注人数</div>
												<div class="value"><span class="value1">
														<countTo :startVal="0" :endVal="yesterdaydata1.text4" :duration="2000"></countTo>
													</span><span class="value2">人次</span></div>
											</div>
										</div>
										<div class="boxfoot"></div>
									</div>
									<!-- 粉丝分析 -->
									<div class="overbox2">
										<div class="boxhead"></div>
										<div class="overtitle2">粉丝性别分析</div>
										<div id="table-sex"></div>
										<div class="overtitle2">粉丝语言分析</div>
										<div id="table-lang"></div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<!-- 全国粉丝分布 -->
								<div class="overview2 layui-col-md6">
									<div style="height: 100%;position: relative;">
										<div class="overtitle">全国粉丝分布</div>
										<div id="table-range"></div>
										<table class="table-01">
											<thead>
												<tr>
													<th>#</th>
													<th>省份名称</th>
													<th>关注人数</th>
												</tr>
											</thead>
											<tbody id="table">
												<tr v-for="(item,index) in data.slice(0,10)" :key="index">
													<td>{{index+1}}</td>
													<td>{{item.name}}</td>
													<td>{{item.value}}</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<!-- 右盒子 -->
								<div class="overview layui-col-md3">
									<!-- 昨日图文信息关键值 -->
									<div class="overbox2">
										<div class="boxhead"></div>
										<div class="overtitle">昨日图文消息关键值</div>
										<div class="overgrid">
											<div class="overdata layui-col-md6">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>图文阅读次数</div>
												<div class="value"><span class="value1">
														<countTo :startVal="0" :endVal="yesterdaydata2.text1" :duration="2000"></countTo>
													</span><span class="value2">人次</span></div>
											</div>

											<div class="overdata layui-col-md6">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>微信发文篇数</div>
												<div class="value"><span class="value1">
														<countTo :startVal="0" :endVal="yesterdaydata2.text2" :duration="2000"></countTo>
													</span><span class="value2">人次</span></div>
											</div>
										</div>
										<div class="overgrid" style="margin-top: 15px;">
											<div class="overdata layui-col-md6">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>分享转发次数</div>
												<div class="value"><span class="value1">
														<countTo :startVal="0" :endVal="yesterdaydata2.text3" :duration="2000"></countTo>
													</span><span class="value2">人次</span></div>
											</div>
											<div class="overdata layui-col-md6">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>微信收藏人数</div>
												<div class="value"><span class="value1">
														<countTo :startVal="0" :endVal="yesterdaydata2.text4" :duration="2000"></countTo>
													</span><span class="value2">人次</span></div>
											</div>
										</div>
										<div class="boxfoot"></div>
									</div>
									<!-- 粉丝来源超市TOP5 -->
									<div class="overbox2">
										<div class="boxhead"></div>
										<div class="overtitle">粉丝来源城市TOP5</div>
										<div id="table-city"></div>
										<div class="boxfoot"></div>
									</div>
								</div>
							</div>
						</section>
						<section>
							<div class="layui-row">
								<div class="overview layui-col-md6">
									<!-- 近30天粉丝变化趋势 -->
									<div class="overbox">
										<div class="boxhead"></div>
										<div style="height: 280px; overflow: hidden;">
											<div class="overtitle">近30天粉丝变化趋势</div>
											<div id="table-trend"></div>
										</div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md6">
									<!-- 近30天图文消息分析 -->
									<div class="overbox">
										<div class="boxhead"></div>
										<div style="height: 280px; overflow: hidden;">
											<div class="overtitle">近30天图文消息分析</div>
											<div id="table-msg"></div>
										</div>
										<div class="boxfoot"></div>
									</div>
								</div>
							</div>
						</section>
					</article>
				</main>
			</div>
		</div>
	</div>
</template>
<script>
	var echarts = require('echarts');
	import axios from 'axios';
	import countTo from 'vue-count-to'
	require('../../map/json/china.js');
	export default {
		components:{countTo},
		data() {
			return {
				yesterdaydata1: {
					text1: 0,
					text2: 0,
					text3: 0,
					text4: 0
				},
				yesterdaydata2: {
					text1: 0,
					text2: 0,
					text3: 0,
					text4: 0
				},
				data: [],
				// 发散指向
				// moveLines: [{
				// 		"fromName": "甘肃",
				// 		"toName": "陕西",
				// 		"coords": [
				// 			[103, 36],
				// 			[108, 34]
				// 		]
				// 	},
				// 	{
				// 		"fromName": "甘肃",
				// 		"toName": "宁夏",
				// 		"coords": [
				// 			[103, 36],
				// 			[106, 38]
				// 		]
				// 	},
				// 	{
				// 		"fromName": "甘肃",
				// 		"toName": "北京",
				// 		"coords": [
				// 			[103, 36],
				// 			[116, 39]
				// 		]
				// 	},
				// 	{
				// 		"fromName": "甘肃",
				// 		"toName": "广东",
				// 		"coords": [
				// 			[103, 36],
				// 			[113, 23]
				// 		]
				// 	},
				// 	{
				// 		"fromName": "甘肃",
				// 		"toName": "江苏",
				// 		"coords": [
				// 			[103, 36],
				// 			[118, 32]
				// 		]
				// 	},
				// 	{
				// 		"fromName": "甘肃",
				// 		"toName": "河北",
				// 		"coords": [
				// 			[103, 36],
				// 			[114, 38]
				// 		]
				// 	},
				// 	{
				// 		"fromName": "甘肃",
				// 		"toName": "山东",
				// 		"coords": [
				// 			[103, 36],
				// 			[116, 36]
				// 		]
				// 	},
				// 	{
				// 		"fromName": "甘肃",
				// 		"toName": "浙江",
				// 		"coords": [
				// 			[103, 36],
				// 			[120, 30]
				// 		]
				// 	},
				// 	{
				// 		"fromName": "甘肃",
				// 		"toName": "上海",
				// 		"coords": [
				// 			[103, 36],
				// 			[121, 31]
				// 		]
				// 	}
				// ],
			}
		},
		mounted() {
			this.showKeyMessage(); // 调用关键值
			this.showRangeTab(); //调用粉丝分布统计表	
			this.showSexTab(); //调用粉丝性别统计表
			this.showLangTab(); //调用粉丝语言统计表
			this.showCityTab(); //调用粉丝来源城市统计表
			this.showTrendTab(); //调用变化趋势统计表
			this.showMsgTab(); //调用图文消息统计表
			
		},
		methods: {
			//axios请求
			getData: function() {
				return new Promise(function(resolve, reject) {
					axios.get('http://bigdataapi.zykongtong.com/v1/wechat/wechat_count').then(res => {
						resolve(res.data)
					}).catch(function(error) {
						reject(error);
					});
				});
			},
			// 获取关键值
			showKeyMessage: async function() {
				let data = await this.getData();
				this.yesterdaydata1.text1 = data['data']['yesterday_user']['new_user']
				this.yesterdaydata1.text2 = data['data']['yesterday_user']['cancel_user']
				this.yesterdaydata1.text3 = data['data']['yesterday_user']['clean_user']
				this.yesterdaydata1.text4 = data['data']['yesterday_user']['total_user']
				this.yesterdaydata2.text1 = data['data']['yesterday_article']['int_page_read_count']
				this.yesterdaydata2.text2 = data['data']['yesterday_article']['wechat_article_count']
				this.yesterdaydata2.text3 = data['data']['yesterday_article']['share_count']
				this.yesterdaydata2.text4 = data['data']['yesterday_article']['add_to_fav_user']
			},
			//粉丝性别统计表
			showSexTab: async function() {
				let data = await this.getData();
				var male = data['data']['sex']['male']
				var female = data['data']['sex']['female']
				var no = data['data']['sex']['no']
				var p1 = (male / (male + female + no) * 100).toFixed(2)
				var p2 = (female / (male + female + no) * 100).toFixed(2)
				var p3 = (no / (male + female + no) * 100).toFixed(2)
				var myChart = echarts.init(document.getElementById('table-sex'));
				var option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
						},
						formatter: '{b}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%'
					},
					legend: {
						data: ['男', '女', '未知'],
						textStyle: {
							color: 'white'
						},
						bottom: '-5px'
					},
					grid: {
						left: '3%',
						right: '3%',
						containLabel: true,
					},
					xAxis: {
						type: 'value',
						show: false
					},
					yAxis: {
						type: 'category',
						data: ['性别'],
						show: false
					},
					series: [{
							name: '男',
							type: 'bar',
							stack: '总量',
							label: {
								show: true,
								position: 'inside',
								formatter: '{c}%',
							},
							color: '#0566e8',
							data: [p1]
						},
						{
							name: '女',
							type: 'bar',
							stack: '总量',
							label: {
								show: true,
								position: 'inside',
								formatter: '{c}%',
							},
							color: '#00ffea',
							data: [p2]
						},
						{
							name: '未知',
							type: 'bar',
							stack: '总量',
							label: {
								show: true,
								position: 'inside',
								formatter: '{c}%',
							},
							color: '#ff557f',
							data: [p3]
						}

					]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			//粉丝语言统计表
			showLangTab: async function() {
				let data = await this.getData();
				var chinese = data['data']['language'][2]['count']
				var english = data['data']['language'][1]['count']
				var other = data['data']['language'][0]['count']
				var p1 = (chinese / (chinese + english + other) * 100).toFixed(2)
				var p2 = (english / (chinese + english + other) * 100).toFixed(2)
				var p3 = (other / (chinese + english + other) * 100).toFixed(2)
				var myChart = echarts.init(document.getElementById('table-lang'));
				var option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						},
						formatter: '{b}<br/>{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%'
					},
					legend: {
						data: ['简体中文', '英文', '其它'],
						textStyle: {
							color: 'white'
						},
						bottom: '-5px'
					},
					grid: {
						left: '3%',
						right: '3%',
						containLabel: true,
					},
					xAxis: {
						type: 'value',
						show: false
					},
					yAxis: {
						type: 'category',
						data: ['语言'],
						show: false
					},
					series: [{
							name: '简体中文',
							type: 'bar',
							stack: '总量',
							label: {
								show: true,
								position: 'inside',
								formatter: '{c}%',
							},
							data: [p1],
							color: '#0566e8',
						},
						{
							name: '英文',
							type: 'bar',
							stack: '总量',
							label: {
								show: true,
								position: 'inside',
								formatter: '{c}%',
							},
							data: [p2],
							color: '#00ffea',
						},
						{
							name: '其它',
							type: 'bar',
							stack: '总量',
							label: {
								show: true,
								position: 'inside',
								formatter: '{c}%',
							},
							data: [p3],
							color: '#ff0067',
						}

					]
				};
				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			//粉丝来源城市统计表
			showCityTab: async function() {
				let data = await this.getData();
				var p1 = data['data']['city'][0]
				var p2 = data['data']['city'][1]
				var p3 = data['data']['city'][2]
				var p4 = data['data']['city'][3]
				var p5 = data['data']['city'][4]
				var myChart = echarts.init(document.getElementById('table-city'));
				var option = {
					dataset: {
						source: [
							['amount', 'product'],
							[p5.value, p5.name],
							[p4.value, p4.name],
							[p3.value, p3.name],
							[p2.value, p2.name],
							[p1.value, p1.name],
						],
					},
					grid: {
						containLabel: true,
						top: '-5px'
					},
					xAxis: {
						name: 'amount',
						show: false,
					},
					yAxis: {
						type: 'category',
						axisLine: {
							show: false
						}
					},
					series: [{
							type: 'bar',
							encode: {
								// Map the "amount" column to X axis.
								x: 'amount',
								// Map the "product" column to Y axis
								y: 'product'
							},
							label: {
								show: true,
								position: 'inside'
							},
							barWidth: '30px',
							color: '#4b7efe'
						}

					],
					textStyle: {
						color: 'white'
					}
				};

				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			//变化趋势统计表
			showTrendTab: async function() {
				let data = await this.getData();
				var p1 = data['data']['user_30']['date']
				var p2 = data['data']['user_30']['total_user']
				var p3 = data['data']['user_30']['new_user']
				var p4 = data['data']['user_30']['cancel_user']
				var p5 = data['data']['user_30']['clean_user']
				var myChart = echarts.init(document.getElementById('table-trend'));
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['新增人数', '取消人数', '净增人数', '累计人数'],
						textStyle: {
							color: 'white'
						}
					},
					grid: {
						top: '15%',
						left: '5%',
						right: '5%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						axisLine: {
							lineStyle: {
								color: 'white'
							}
						},
						boundaryGap: false,
						data: p1
					},
					yAxis: {
						type: 'value',
						splitNumber: 2,
						axisLine: {
							show: false
						}
					},
					series: [{
							name: '新增人数',
							type: 'line',
							stack: '总量',
							data: p3
						},
						{
							name: '取消人数',
							type: 'line',
							stack: '总量',
							data: p4
						},
						{
							name: '净增人数',
							type: 'line',
							stack: '总量',
							data: p5
						},
						{
							name: '累计人数',
							type: 'line',
							stack: '总量',
							data: p2
						},
					],
					textStyle: {
						color: 'white'
					}
				};
				myChart.setOption(option);
			},
			//图文消息统计表
			showMsgTab: async function() {
				let data = await this.getData();
				var p1 = data['data']['article_30']['date']
				var p2 = data['data']['article_30']['int_page_read_count']
				var p3 = data['data']['article_30']['wechat_article_count']
				var p4 = data['data']['article_30']['share_count']
				var p5 = data['data']['article_30']['add_to_fav_user']
				var myChart = echarts.init(document.getElementById('table-msg'));
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['图文阅读', '微信发文', '分享转发', '微信收藏'],
						textStyle: {
							color: 'white'
						},
					},
					grid: {
						top: '15%',
						left: '5%',
						right: '5%',
						containLabel: true
					},
					xAxis: {
						type: 'category',
						axisLine: {
							lineStyle: {
								color: 'white'
							}
						},
						boundaryGap: false,
						data: p1
					},
					yAxis: {
						type: 'value',
						splitNumber: 2,
						axisLine: {
							show: false
						}
					},
					series: [{
							name: '图文阅读',
							type: 'line',
							stack: '总量',
							data: p2
						},
						{
							name: '微信发文',
							type: 'line',
							stack: '总量',
							data: p3
						},
						{
							name: '分享转发',
							type: 'line',
							stack: '总量',
							data: p4
						},
						{
							name: '微信收藏',
							type: 'line',
							stack: '总量',
							data: p5
						},
					],
					textStyle: {
						color: 'white'
					}
				};
				myChart.setOption(option);
			},
			//粉丝分布统计表
			showRangeTab: async function() {
				let data = await this.getData();
				var province = data['data']['province'];
				this.data = data['data']['province'];
				var myChart = echarts.init(document.getElementById('table-range'));
				var option = {
					tooltip: { //提示框组件
						trigger: 'item',
						formatter: '{b}', //{c@[2]}
						show: true
					},
					legend: { //图例
						show: true,
						orient: 'vertical',
						bottom: '12%',
						left: '10px',
						data: [{
								name: '2500以上',
								icon: 'rect',

							},
							{
								name: '800-2500',
								icon: 'rect',
							},
							{
								name: '500-800',
								icon: 'rect',
							},
							{
								name: '200-500',
								icon: 'rect',
							},
							{
								name: '0-200',
								icon: 'rect',
							},
						],
						textStyle: {
							color: '#fff'
						}
					},
					// 	geo: {
					// 		map: "china",
					// 		label: {
					// 			normal: {
					// 				show: true,
					// 				color: '#666666',

					// 			},
					// 			emphasis: {
					// 				show: true,
					// 				color: '#fff',
					// 			},

					// 		},

					// 		layoutCenter: ['50%', '45%'],
					// 		// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
					// 		layoutSize: 520,
					// 		itemStyle: {
					// 			normal: {
					// 				// areaColor: "#071537",
					// 				// borderColor: "#01599d",
					// 				areaColor: "#1d5ed6",
					// 				borderColor: "#2f93ef",
					// 				borderWidth: 1
					// 			},
					// 			emphasis: {
					// 				areaColor: "#01599d"
					// 			}
					// 		}
					// 	},
					visualMap: {
						bottom: '5%',
						// min: 300,
						// max: parseInt(province[0].value),
						text: ['High', 'Low'],
						realtime: false,
						calculable: true,
						inRange: {
							color: ['#42a7fd', '#0086f8','#2f7fff','#2e7af3', '#1a6aea',]
						},
						textStyle: {
							color: '#fff'
						}
					},
					tooltip: {
						trigger: 'item',
						formatter: '{b}<br/>{c}'
					},
					series: [{
							// 发散线
							name: '线路',
							type: 'lines',
							// coordinateSystem: 'geo',
							// zlevel: 2,
							// large: true,									
							// effect: {
							// 	show: true,
							// 	period: 6,
							// 	trailLength: 0.7,
							// 	color: '#55ffff',
							// 	symbolSize: 3
							// },
							// lineStyle: {
							// 	normal: {
							// 		color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							// 			offset: 0,
							// 			color: '#146fb5'
							// 		}, {
							// 			offset: 1,
							// 			color: '#ffffff'
							// 		}], false),
							// 		width: 0.5,
							// 		opacity: 0.2,
							// 		curveness: 0.2
							// 	}
							// },
							// data: this.moveLines
						},
						{
							name: '粉丝分布',
							type: 'map',
							top: '5%',
							mapType: 'china',
							data: province,
							label: {
								normal: {
									formatter: '{b}',
									position: 'right',
									show: true
								},
								emphasis: {

									show: true
								}
							},
							itemStyle: {
								normal: {
									color: '#e8cc2e',
									shadowBlur: 2,
									shadowColor: '#333',
									borderColor :'transparent'
								}
							},
							zlevel: 1
						},
					]
				};
				myChart.setOption(option);
			},

		},
	}
</script>

<style>
	/* 表 */
	#table-sex,
	#table-lang {
		height: 60px;
	}

	#table-city {
		height: 300px;
	}

	#table-trend,
	#table-msg {
		height: 280px;
	}

	#table-range {
		height: 600px;
	}

	.table-01 {
		position: absolute;
		right: 10px;
		bottom: -170px;
		background-color: rgba(34, 39, 41, .5);
		color: #fff;
		border-left: 1px solid #020c28;
		border-right: 1px solid #020c28;
		border-color: black;
	}

	.table-01 th {
		padding: 4px 8px;
		border-top: 1px solid #020c28;
		border-bottom: 1px solid #020c28;
		font-weight: 400;
		background-color: rgba(0, 113, 198, .5);
	}

	.table-01 td {
		padding: 2px 8px;
		border-top: 1px solid #020c28;
		border-bottom: 1px solid #020c28;
	}
</style>

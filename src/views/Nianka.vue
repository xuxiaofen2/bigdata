<template>
	<div class="bg">
		<div class="container-fluid">
			<div class="container">
				<main>
					<article>
						<section>
							<div class="layui-row">
								<div class="overview layui-col-md3">
									<!--微信用户性别占比-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">微信用户性别占比</div>
										<div id="table-sexpercent1"></div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md3">
									<!--办卡用户性别统计-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">办卡用户性别统计</div>
										<div id="table-sexpercent2"></div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md6">
									<!--办理地区统计-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">办理地区统计</div>
										<div id="table-aera"></div>
										<div class="boxfoot"></div>
									</div>
								</div>
							</div>
						</section>
						<section>
							<div class="layui-row">
								<div class="overview3 layui-col-md6">
									<!--微信用户名族占比-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">微信用户名族占比</div>
										<div id="table-nation"></div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview3 layui-col-md6">
									<!--办理统计-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">办理统计</div>
										<div id="table-count"></div>
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
	import axios from 'axios';
	var echarts = require('echarts');
	export default {
		mounted: function() {
			this.showSexPercent1Tab();
			this.showSexPercent2Tab();
			this.showAeraTab();
			this.showNationTab();
			this.showCountTab();
		},
		methods: {
			//axios请求
			getData: function() {
				return new Promise(function(resolve, reject) {
					axios.get('http://bigdataapi.zykongtong.com/v1/card_count').then(res => {
						resolve(res.data)
					}).catch(function(error) {
						reject(error);
					});
				});
			},
			showSexPercent1Tab: async function() {
				let data = await this.getData();
				var p1=data['data']['wechat_sex']['male']
				var p2=data['data']['wechat_sex']['female']
				var p3=data['data']['wechat_sex']['no']			
				var myChart = echarts.init(document.getElementById('table-sexpercent1'));
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						top: '5%',
						left: '5%',
						data: ['男', '女', '未知'],
						textStyle: {
							color: 'white',
							fontSize: 12
						}
					},
					series: [{
						left: '100px',
						type: 'pie',
						radius: ['30%', '60%'],
						avoidLabelOverlap: false,
						top: '-15px',
						left: '23%',
						label: {
							show: true,
							position: 'outside',
							formatter: '{b}',
						},
						emphasis: {
							label: {
								show: true,
							}
						},
						labelLine: {
							show: true,
							length: '10px',
							length2: '6px'
						},
						data: [{
							name:'未知',value:p3
						},
						{
							name:'女',value:p2
						},
						{
							name:'男',value:p1
						}
						],
						color: ['#00ffea', '#ff557f', '#0566e8']

					}]
				};
				myChart.setOption(option);
			},
			showSexPercent2Tab: async function() {
				let data = await this.getData();
				var p1=data['data']['user_sex']['count']
				var myChart = echarts.init(document.getElementById('table-sexpercent2'));
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						top: '5%',
						left: '5%',
						data: ['男', '女'],
						textStyle: {
							color: 'white',
							fontSize: 12
						}
					},
					series: [{
						left: '100px',
						type: 'pie',
						radius: ['0%', '60%'],
						avoidLabelOverlap: false,
						top: '-15px',
						left: '23%',
						label: {
							show: true,
							position: 'outside',
							formatter: '{b}',
						},
						emphasis: {
							label: {
								show: true,
							}
						},
						labelLine: {
							show: true,
							length: '10px',
							length2: '6px'
						},
						data: p1,
						color: ['#ff557f', '#0566e8']

					}]
				};
				myChart.setOption(option);
			},
			showAeraTab: async function() {
				let data = await this.getData();
				var p1=data['data']['user_city']['count']
				var name=data['data']['user_city']['name']
				var myChart = echarts.init(document.getElementById('table-aera'));
				var option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data: ['办卡人数'],
						textStyle: {
							color: 'white'
						},
						top: '-5px'
					},
					grid: {
						top: '15%',
						left: '5%',
						right: '5%',
						bottom: '5%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: name,
						axisLine: {
							lineStyle: {
								color: 'white'
							}
						},
					}],
					yAxis: [{
						type: 'value',
						splitNumber: 1,
						axisLine: {
							show: false
						}
					}],
					series: [{
						name: '办卡人数',
						type: 'bar',
						stack: '办卡人数',
						barWidth: '25px',
						data: p1,
						color: '#00aaff'
					}, ],
					textStyle: {
						color: 'white'
					}
				};
				myChart.setOption(option);
			},
			showNationTab: async function() {
				let data = await this.getData();
				var name=data['data']['user_race']['name'];
				var p1=data['data']['user_race']['count']
				var myChart = echarts.init(document.getElementById('table-nation'));
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{a} <br/>{b} : {c} ({d}%)'
					},
					legend: {
						bottom:'25px',
						textStyle: {
							color: 'white'
						},
						data: name
					},
					series: [
						{
							name: '面积模式',
							type: 'pie',
							radius: [50, 200],
							center: ['75%', '50%'],
							roseType: 'area',
							left:'50%',
							right:'50%',
							top:'-20%',
							itemStyle : {
							    normal: {
							        label : {
							            show: true,
							            formatter: "{b} : {c} ({d}%)"
							        }
							    }
							},
							data: p1
						}
					],
				}
				myChart.setOption(option);
			},
			showCountTab: async function() {
				let data = await this.getData();
				var name=data['data']['user_number']['name'];
				var p1=data['data']['user_number']['count']
				var myChart = echarts.init(document.getElementById('table-count'));
				var option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data: ['办卡人数', '趋势'],
						textStyle: {
							color: 'white'
						},
						top: '-5px'
					},
					grid: {
						top: '15%',
						left: '5%',
						right: '5%',
						bottom: '5%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: name,
						axisLine: {
							lineStyle: {
								color: 'white'
							}
						},
					}],
					yAxis: [{
						type: 'value',
						splitNumber: 1,
						axisLine: {
							show: false
						}
					}],
					series: [{
							name: '办卡人数',
							type: 'bar',
							stack: '办卡人数',
							barWidth: '25px',
							data: p1,
							color: '#00aaff'
						},
						{
							name: '趋势',
							type: 'line',
							data: p1,
							color: '#00aaff'
						}
					],
					textStyle: {
						color: 'white'
					}
				};
				myChart.setOption(option);
			},

		}
	}
</script>

<style>
	#table-sexpercent1 {
		height: 260px;
	}

	#table-sexpercent2 {
		height: 260px;
	}

	#table-aera {
		height: 240px;
	}
	#table-nation{
		height: 560px;
	}
	#table-count {
		height: 550px;
	}
	
</style>

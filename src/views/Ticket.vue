<template>
	<div class="bg">
		<div class="container-fluid">
			<div class="container">
				<main>
					<article>
						<section>
							<div class="layui-row">
								<div class="overview layui-col-md3">
									<!--今日和昨日入园客流-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">今日和昨日入园客流</div>
										<div class="overgrid">
											<div class="overdata layui-col-md12">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>今日入园</div>
												<div class="value"><span class="value1"><countTo :startVal="0" :endVal="today" :duration="2000"></countTo></span><span class="value2">人次</span></div>
											</div>
										</div>
										<div class="overgrid" style="margin-top: 15px;">
											<div class="overdata layui-col-md12">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>昨日入园</div>
												<div class="value"><span class="value1"><countTo :startVal="0" :endVal="yesterday" :duration="2000"></countTo></span><span class="value2">人次</span></div>
											</div>
										</div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md6">
									<!--近30天与前30天客流对比-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">近30天与前30天客流对比</div>
										<div id="table-monthflow"></div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md3">
									<!--景区榜单-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">景区榜单</div>
										<div class="overgrid" style="margin-top: 25px;">
											<div class="overdata layui-col-md6 firstgrid">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>日入园</div>
												<div class="infor">2020年04月05日</div>
												<div class="value"><span class="value1"><countTo :startVal="0" :endVal="daypeople" :duration="2000"></countTo></span><span class="value2">人次</span></div>
											</div>
											<div class="overdata layui-col-md6">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>日售票</div>
												<div class="infor">2020年04月05日</div>
												<div class="value"><span class="value1"><countTo :startVal="0" :endVal="daysale" :duration="2000"></countTo></span><span class="value2">张</span></div>
											</div>
										</div>
										<div class="boxfoot"></div>
									</div>
								</div>
							</div>
						</section>
						<section>
							<div class="layui-row">
								<div class="overview layui-col-md3">
									<!--月售票实时统计-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">月售票实时统计</div>
										<div class="overgrid">
											<div class="overdata layui-col-md12">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>本月售票量</div>
												<div class="value"><span class="value1"><countTo :startVal="0" :endVal="monthticket1" :duration="2000"></countTo></span><span class="value2">人次</span></div>
											</div>
										</div>
										<div class="overgrid" style="margin-top: 15px;">
											<div class="overdata layui-col-md12">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>上月售票量</div>
												<div class="value"><span class="value1"><countTo :startVal="0" :endVal="monthticket2" :duration="2000"></countTo></span><span class="value2">张</span></div>
											</div>
										</div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md6">
									<!--节假日客流统计-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">节假日客流统计</div>
										<div id="table-festivalflow"></div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md3">
									<!--每人次购票量统计-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">每人次购票量统计</div>
										<div id="table-buy"></div>
										<div class="boxfoot"></div>
									</div>
								</div>
							</div>
						</section>
						<section>
							<div class="layui-row">
								<div class="overview layui-col-md3">
									<!--年售票实时统计-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">年售票实时统计</div>
										<div class="overgrid">
											<div class="overdata layui-col-md12">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>今年累计售票量</div>
												<div class="value"><span class="value1"><countTo :startVal="0" :endVal="yearticket1" :duration="2000"></countTo></span><span class="value2">张</span></div>
											</div>
										</div>
										<div class="overgrid" style="margin-top: 15px;">
											<div class="overdata layui-col-md12">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>去年累计售票量</div>
												<div class="value"><span class="value1"><countTo :startVal="0" :endVal="yearticket2" :duration="2000"></countTo></span><span class="value2">张</span></div>
											</div>
										</div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md3">
									<!--每天各时间段售票平均值-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div style="height: 280px; overflow: hidden;">
										<div class="overtitle">每天各时间段售票平均值</div>
										<div id="table-sell"></div>
										</div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md3">
									<!--每天各时间段客流平均值-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div style="height: 280px; overflow: hidden;">
										<div class="overtitle">每天各时间段客流平均值</div>
										<div id="table-peopleflow"></div>
										</div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md3">
									<!--节假日客流占比-->
									<div class="overbox">
										<div class="boxhead"></div>
										<div style="height: 280px; overflow: hidden;">
										<div class="overtitle">节假日客流占比</div>
										<div id="table-percentflow"></div>
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
	import countTo from 'vue-count-to'
	export default {
		components:{countTo},
		data: function() {
			return {
				today: 43,
				yesterday: 781,
				daypeople: 1342,
				daysale: 37,
				monthticket1: 271,
				monthticket2: 164,
				yearticket1: 497,
				yearticket2: 33139,
			}
		},
		mounted: function() {
			this.showMonthflowTab();// 调用近30天与前30天客流对比表
			this.showFestivalflowTab();//调用节假日客流统计表
			this.showBuyTab();//调用每人次购票量统计表
			this.showSellTab();//调用每天各时间段售票平均值表
			this.showPeopleflowTab();//调用每天各时间段客流平均值表
			this.showPercentflowTab();//调用节假日客流占比表
		},
		methods: {
			// 近30天与前30天客流对比
			showMonthflowTab: function() {
				var myChart = echarts.init(document.getElementById('table-monthflow'));
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['近30天', '前30天'],
						textStyle: {
							color: 'white'
						},
					},
					grid: {
						left: '3%',
						right: '3%',
						containLabel: true,
					},
					xAxis: {
						type: 'category',
						axisLine: {
							lineStyle: {
								color: 'white'
							}
						},
						boundaryGap: false,
						data: ['03/18', '03/19', '03/20', '03/21', '03/22', '03/23', '03/24', '03/15', '03/16', '03/27', '03/28',
							'03/29', '03/30', '03/31', '04/01', '04/02', '04/03', '04/04', '04/05', '04/06', '04/07', '04-08', '04/09',
							'04/10', '04-11', '04/12', '04/13', '04-14', '04/15', '04/16'
						],
					},
					yAxis: {
						splitNumber: 3,
						type: 'value',
						axisLine: {
							show: false
						}
					},
					series: [{
							name: '近30天',
							type: 'line',
							stack: '总量',
							areaStyle: {},
							data: [600, 830, 880, 408, 309, 708, 800, 500, 800, 900, 600, 803, 808, 408, 309, 708, 800, 500, 800, 900,
								600, 830, 808, 408, 390, 780,
								800, 500, 800, 900
							]
						},
						{
							name: '前30天',
							type: 'line',
							stack: '总量',
							areaStyle: {},
							data: [1600, 803, 808, 480, 2390, 780, 800, 500, 800, 900, 600, 803, 808, 408, 309, 708, 800, 500, 800, 900,
								600, 803, 880, 480, 390,
								780, 800, 500, 800, 900
							],
						}
					],
					textStyle: {
						color: 'white'
					}
				};
				myChart.setOption(option);
			},
			//节假日客流统计
			showFestivalflowTab: function() {
				var myChart = echarts.init(document.getElementById('table-festivalflow'));
				var option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data: ['游客人次'],
						textStyle: {
							color: 'white'
						}
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
						data: ['元旦', '春节', '清明', '五一', '端午', '十一'],
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
						name: '游客人次',
						type: 'bar',
						stack: '游客人次',
						barWidth: '25px',
						data: [75, 63, 84, 0, 0, 0],
						color: '#00aaff'
					}, ],
					textStyle: {
						color: 'white'
					}
				};
				myChart.setOption(option);
			},
			//每人次购票量统计
			showBuyTab: function() {
				var myChart = echarts.init(document.getElementById('table-buy'));
				var option = {
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					legend: {
						data: ['购票人次'],
						textStyle: {
							color: 'white'
						}
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
						data: ['1张', '2张', '3张', '4张', '5张', '多于5张'],
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
						name: '购票人次',
						type: 'bar',
						stack: '购票人次',
						barWidth: '25px',
						data: [101, 63, 30, 19, 6, 21],
						color: '#00aaff'
					}, ],
					textStyle: {
						color: 'white'
					}
				};
				myChart.setOption(option);
			},
			//每天各时间段售票平均值
			showSellTab: function() {
				var myChart = echarts.init(document.getElementById('table-sell'));
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['售票量'],
						textStyle: {
							color: 'white'
						},
					},
					grid: {
						left: '7%',
						right: '7%',
						containLabel: true,
					},
					xAxis: {
						type: 'category',
						axisLine: {
							lineStyle: {
								color: 'white'
							}
						},
						boundaryGap: false,
						data: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
					},
					yAxis: {
						splitNumber: 3,
						type: 'value',
						axisLine: {
							show: false
						}
					},
					series: [{
						name: '售票量',
						type: 'line',
						stack: '总量',
						areaStyle: {},
						data: ['1', '1', '1', '1', '1', '2']
					}, ],
					textStyle: {
						color: 'white'
					}
				};
				myChart.setOption(option);
			},
			//每天各时间段客流平均值
			showPeopleflowTab: function() {
				var myChart = echarts.init(document.getElementById('table-peopleflow'));
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['客流量'],
						textStyle: {
							color: 'white'
						},
					},
					grid: {
						left: '7%',
						right: '7%',
						containLabel: true,
					},
					xAxis: {
						type: 'category',
						axisLine: {
							lineStyle: {
								color: 'white'
							}
						},
						boundaryGap: false,
						data: ['8:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
					},
					yAxis: {
						splitNumber: 3,
						type: 'value',
						axisLine: {
							show: false
						}
					},
					series: [{
						name: '客流量',
						type: 'line',
						stack: '总量',
						areaStyle: {},
						data: ['14', '46', '39', '24', '8', '0']
					}, ],
					textStyle: {
						color: 'white'
					}
				};
				myChart.setOption(option);
			},
			//节假日客流占比
			showPercentflowTab: function() {
				var myChart = echarts.init(document.getElementById('table-percentflow'));
				var option = {
					tooltip: {
						trigger: 'item',
						formatter: '{b}: {c} ({d}%)'
					},
					legend: {
						orient: 'vertical',
						top: '5%',
						left: '5%',
						data: ['节假日', '周内', '周末'],
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
								value: 2932,
								name: '周内'
							},
							{
								value: 6906,
								name: '节假日'
							},
							{
								value: 9950,
								name: '周末'
							},
						],
						color: ['#00ffea', '#4b4efe', '#0566e8']

					}]
				};
				myChart.setOption(option);
			},

		}
	}
</script>

<style>
	.infor {
		color: rgba(255, 255, 255, .8);
		margin-top: 20px;
		margin-bottom: 20px;
	}

	.infor::after {
		content: "";
		position: absolute;
		top: 3.8rem;
		right: .8rem;
		left: .8rem;
		height: 1px;
		background-color: rgba(255, 255, 255, .1);
	}

	.firstgrid::after {
		content: "";
		position: absolute;
		top: 0;
		right: -1px;
		width: 1px;
		height: 5.6rem;
		background-color: rgba(255, 255, 255, .1);
	}

	#table-monthflow {
		height: 280px;
	}

	#table-festivalflow {
		height: 240px;
	}

	#table-buy {
		height: 240px;
	}

	#table-sell {
		height: 280px;
	}

	#table-peopleflow {
		height: 280px;
	}

	#table-percentflow {
		height: 280px;
	}
</style>

<template>
	<div class="bg">
		<div class="container-fluid">
			<div class="container">
				<main>
					<article>
						<section>
							<div class="layui-row">
								<div class="overview layui-col-md6">
									<!-- 景区天气情况 -->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">景区天气情况</div>
										<div class="weather-box">
											<div class="weather-item" v-for="(item,index) in weather.slice(0,3)">											
												<span class="weather-text"><i></i>{{item.text1}}</span>
												<span class="weather-text" style="text-align: left;margin-left: 10%;"><img class="weather-img" :src="item.img" alt="" />{{item.text2}}</span>
												<span class="weather-text">{{item.text3}}</span>
											</div>
										</div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md3">
									<!-- 未来7日气温变化 -->
									<div class="overbox">	
										<div class="boxhead"></div>
										<div class="overtitle">未来7日气温变化</div>
										<div id="table-weather"></div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md3">
									<!-- 出现建议 -->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">出行建议</div>
										<div class="weather-box">
											<div class="weather-item" v-for="(item,index) in weathersuggest.slice(0,2)">											
												<p style="text-align: left;">{{item.text}}</p>
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
									<!-- 空气质量统计 -->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">空气质量统计</div>
										<div class="overgrid">
											<div class="overdata layui-col-md6">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>一级（优）</div>
												<div class="value"><span class="value1"><countTo :startVal="0" :endVal="air.text1" :duration="2000"></countTo></span><span class="value2">天</span></div>
											</div>
										
											<div class="overdata layui-col-md6">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>二级（良）</div>
												<div class="value"><span class="value1"><countTo :startVal="0" :endVal="air.text2" :duration="2000"></countTo></animate-number></span><span class="value2">天</span></div>
											</div>
										</div>
										<div class="overgrid" style="margin-top: 15px;">
											<div class="overdata layui-col-md4">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>轻度污染</div>
												<div class="value"><span class="value1"><countTo :startVal="0" :endVal="air.text3" :duration="2000"></countTo></span><span class="value2">天</span></div>
											</div>
											<div class="overdata layui-col-md4">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>中度污染</div>
												<div class="value"><span class="value1"><countTo :startVal="0" :endVal="air.text4" :duration="2000"></countTo></span><span class="value2">天</span></div>
											</div>
											<div class="overdata layui-col-md4">
												<div class="caption"><i class="layui-icon layui-icon-template-1"></i>严重污染</div>
												<div class="value"><span class="value1"><countTo :startVal="0" :endVal="air.text5" :duration="2000"></countTo></span><span class="value2">天</span></div>
											</div>
										</div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md6">
									<!-- 空气质量情况 -->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">空气质量状况</div>
										<div class="aqi-img">
											<div class="text-sub_txt"><span>{{weatherstate.time}}</span><span>{{weatherstate.quality}}</span></div>
											<ul class="aqi-ul">
												<li v-for="(item,index) in aqilist" :key="index">
													<div style="color: #fff;font-size: 30px;">{{item.text1}}</div>
													<div style="font-size: 14px; color: #fff;">{{item.text2}}</div>
												</li>												
											</ul>
											<div class="bottom_txt">数值单位：μg/m3(CO为mg/m3)</div>
										</div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md3">
									<!-- 空气质量占比 -->
									<div class="overbox">
										<div class="boxhead"></div>
										<div class="overtitle">空气质量占比</div>
										<div id="table-air"></div>
										<div class="boxfoot"></div>
									</div>
								</div>
							</div>
						</section>
						<section>
							<div class="layui-row">
								<div class="overview layui-col-md6">
									<!-- 24小时主要污染物指标 -->
									<div class="overbox">
										<div class="boxhead"></div>
										<div style="height: 280px; overflow: hidden;">
										<div class="overtitle">24小时主要污染物指标</div>
										<div id="table-contamin"></div>
										</div>
										<div class="boxfoot"></div>
									</div>
								</div>
								<div class="overview layui-col-md6">
									<!-- 近12个月空气质量等级统计 -->
									<div class="overbox">
										<div class="boxhead"></div>
										<div style="height: 280px; overflow: hidden;">
										<div class="overtitle">近12个月空气质量等级统计</div>
										<div id="table-quality"></div>
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
	export default{
		components:{countTo},
		data:function(){
			return{
				air:{
					text1:5,
					text2:6,
					text3:7,
					text4:14,
					text5:22
				},
				weather:[{
					text1:'今天 04月21日 (实时：6°C)',
					text2:'13~3°C 阴',
					text3:'东北风3-4级',
					img:'http://api.map.baidu.com/images/weather/day/yin.png'
				},
				{
					text1:'周三',
					text2:'13~3°C 东北风微风',
					text3:'东北风3-4级',
					img:'http://api.map.baidu.com/images/weather/day/duoyun.png'
				},
				{
					text1:'周四',
					text2:'14~1°C 东风3-4级',
					text3:'东北风3-4级',
					img:'http://api.map.baidu.com/images/weather/day/duoyun.png'
				}],
				weathersuggest:[
					{
						text:'健康影响：各项气象条件适宜，无明显降温过程，发生感冒机率较低。'
					},
					{
						text:'建议措施：天气较好，但考虑风力较强且气温较低，推荐您进行室内运动，若在户外运动注意防风并适当增减衣物。'
					}
				],
				weatherstate:{
					time:'更新时间：14：00',
					quality:'空气质量等级：良'
				},
				aqilist:[
					{
						text1:'56',
						text2:'AQI'
					},
					{
						text1:'12',
						text2:'PM2.5/1h'
					},
					{
						text1:'61',
						text2:'PM10/1h'
					},
					{
						text1:'0.7',
						text2:'CO/1h'
					},
					{
						text1:'60',
						text2:'NO2/1h'
					},
					{
						text1:'25',
						text2:'O3/1h'
					},
					{
						text1:'9',
						text2:'SO2/1h'
					}
				]
			}			
		},
		mounted:function(){
			this.showWeatherTab();//调用景区天气情况表
			this.showAirTab();//调用空气质量统计表
			this.showContaminTab();//调用污染物指标表
			this.showQualityTab();//调用空气质量等级表
		},
		methods:{
			// 空气质量统计
			showWeatherTab: function() {
				var myChart = echarts.init(document.getElementById('table-weather'));
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['最低气温', '最高气温'],
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
						axisLine:{
							lineStyle:{
								color:'white'
								}
							},
						boundaryGap: false,
						data: ['04/21', '04/22', '04/23', '04/24', '04/25', '04/26', '04/27'],
					},
					yAxis: {
						splitNumber :3,
						type: 'value',
						axisLine:{
							show:false
						}
					},
					series: [{
							name: '最低气温',
							type: 'line',
							stack: '总量',
							data: [2,4,4,1,5,10,7]
						},
						{
							name: '最高气温',
							type: 'line',
							stack: '总量',
							data: [13, 14, 14, 17, 20, 19,23],
						}
					],
					textStyle: {
						color: 'white'
					}
				};
				myChart.setOption(option);
			},
			// 空气质量占比
			showAirTab:function(){
				var myChart = echarts.init(document.getElementById('table-air'));
				var option = {
				    tooltip: {
				        trigger: 'item',
				        formatter: '{b}: {c} ({d}%)'
				    },
				    legend: {
				        orient: 'vertical',
						top:'5%',
				        left: '5%',
				        data: ['一级（优）', '二级（优）', '轻度污染', '中度污染', '严重污染'],
						textStyle:{
							color:'white',
							fontSize:12
						}
				    },
				    series: [
				        {	
							left:'100px',
				            type: 'pie',
				            radius: ['30%', '60%'],
				            avoidLabelOverlap: false,
							top:'-15px',
							left:'23%',
				            label: {
				                show: true,
				                position: 'outside',
								formatter:'{b}',
				            },
				            emphasis: {
				                label: {
				                    show: true,
				                }
				            },
				            labelLine: {
				                show: true,
								length:'10px',
								length2:'6px'
				            },
				            data: [
								{value: 5, name: '严重污染'},
								{value: 10, name: '中度污染'},
							    {value: 17, name: '轻度污染'},
								{value: 52.5, name: '二级（优）'},
				                {value: 12.5, name: '一级（优）'}      
				            ],
							color:['#ff0067','#ebb77f','#00ffea','#4b4efe','#0566e8']
							
				        }
				    ]
				};
				myChart.setOption(option);
			},
			// 主要污染物指标
			showContaminTab: function() {
				var myChart = echarts.init(document.getElementById('table-contamin'));
				var option = {
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: ['AQI', 'PM2.5','PM10','SQ2'],
						textStyle: {
							color: 'white'
						},
					},
					grid: {
						top:'15%',
						left: '5%',
						right: '5%',
						containLabel: true,
					},
					xAxis: {
						type: 'category',
						axisLine:{
							lineStyle:{
								color:'white'
								}
							},
						boundaryGap: false,
						data: ['16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00','23:00','01:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00'],
					},
					yAxis: {
						splitNumber :2,
						type: 'value',
						axisLine:{
							show:false
						}
					},
					series: [{
							name: 'AQI',
							type: 'line',
							stack: '总量',
							data: [38,36,35,32,34,31,31,35,31,32,31,34,38,32,34,31,39,35,36,37,35,31,40,39]
						},
						{
							name: 'PM2.5',
							type: 'line',
							stack: '总量',
							data: [11, 8, 14, 17, 20, 19,13,14,19,28,20,14,15,17,11,12,12,12,15,12,14,12,12,10]
						},
						{
							name: 'PM10',
							type: 'line',
							stack: '总量',
							data: [38, 36, 31,31,35,31,31,31,35,31,31,31,35,31,31,31,35,31,32,31,34,38,40,36]
						},
						{
							name: 'SQ2',
							type: 'line',
							stack: '总量',
							data: [5, 5, 8, 9, 8, 9,10,7,4,5,9,10,3,5,2,7,6,2,1,5,6,9,4,2]
						},
					],
					textStyle: {
						color: 'white'
					}
				};
				myChart.setOption(option);
			},
			// 空气质量等级统计
			showQualityTab:function(){
				var myChart = echarts.init(document.getElementById('table-quality'));
				var option = {
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
				            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
				        }
				    },
				    legend: {
				        data: ['优', '良', '轻度污染', '中度污染', '严重污染'],
						textStyle:{
							color:'white'
						}
				    },
				    grid: {
						top:'15%',
				        left: '5%',
				        right: '5%',
				        bottom: '5%',
				        containLabel: true
				    },
				    xAxis: [
				        {
				            type: 'category',
				            data: ['2019/05', '2019/06', '2019/07', '2019/08', '2019/09', '2019/10', '2019/11','2019/12','2020/01','2020/02','2019/03','2019/04'],
							axisLine:{
								lineStyle:{
									color:'white'
									}
								},
						}
				    ],
				    yAxis: [
				        {
				            type: 'value',
							splitNumber :1,
							axisLine:{
								show:false
							}
				        }
				    ],
				    series: [
				        {
				            name: '优',
				            type: 'bar',
							stack: '空气质量',
							barWidth:'25px',
				            data: [0,1, 3, 3, 2, 0,1,2,1,3,4,2],
							color:'#0566e8'
				        },
				        {
				            name: '良',
				            type: 'bar',
				            stack: '空气质量',
							barWidth:'25px',
				            data: [0,1, 2, 1, 2, 3,1,0,0,0,4,2],
							color:'#4b7efe'
				        },
						{
						    name: '轻度污染',
						    type: 'bar',
						    stack: '空气质量',
							barWidth:'25px',
						    data: [0,0, 1, 1, 2, 0,1,0,0,3,4,0],
							color:'#00ffea'
						},
						{
						    name: '中度污染',
						    type: 'bar',
						    stack: '空气质量',
							barWidth:'25px',
						    data: [2, 0, 4, 3, 2, 0,0,0,1,0,4,4],
							color:'#ebb77f'
						},
						{
						    name: '严重污染',
						    type: 'bar',
						    stack: '空气质量',
							barWidth:'25px',
						    data: [1, 0, 0, 0, 2, 0,1,0,0,0,0,0],
							color:'#ff0067'
						},
				    ],
					textStyle: {
						color: 'white'
					}
				};
				myChart.setOption(option);
			}
		}
	}
</script>

<style>
	.weather-box{
		    /* height: 100px; */
		    padding: 0px 15px;
	}
	.weather-item{
			display: flex;
			justify-content: space-between;
			align-items: center;
			position: relative;
		    background-color: rgba(1,53,100,.3);
		    border-radius: 10px;
		    box-shadow: 0 0 10px rgba(0,0,0,.5) inset;
		    height: 27.3%;
		    margin: 0 0 5px 0;
		    padding: 20px 30px;
	}
	.weather-box i{
			float: left;
		    width: 2px;
		    height: 15px;
		    margin-right: 5px;
		    background-color: #ff7500;
	}
	.weather-text{
		color: #fff;
		font-size: 14px;
		line-height: 1.2;
		width: 30%;		
	}
	.weather-item p{
		color: #fff;
		font-size: 14px;
	}
	.weather-box  .weather-text:first-of-type{
		text-align: left;
	}
	.weather-box  .weather-text:last-of-type{
		text-align: right
	}
	.weather-box .weather-item:first-of-type .weather-text:first-of-type{
		color:#ff7500
	}
	/* 统计表 */
	#table-weather{
		height: 260px;
	}
	#table-air{
		height: 250px;
	}
	#table-contamin{
		height: 280px;
	}
	#table-quality{
		height: 230px;
	}
	.text-sub_txt{
		color: #fff;
		font-size: 14px;
	}
	.bottom_txt{
		color: #979797;
		font-size: 14px;
		position: relative;
		top:-5px;
	}
	.text-sub_txt span{
		margin: 0 100px;
	}
	/* 空气质量球 */
	.aqi-ul{
		display: flex;
		justify-content: center;
		flex: 1;
		padding: 40px 60px;
		box-sizing: border-box;
	}
	.aqi-ul li{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 86%;
		height: 86px;
		margin: 0px 10px;
		padding: 5px;
		border-radius: 100%;
		background: rgba(255,113,94,.9);
	}
</style>

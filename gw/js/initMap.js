let scale = new AMap.Scale({
    visible: true
}),
    toolBar = new AMap.ToolBar({
        visible: true
    }),
    overView = new AMap.OverView({
        visible: true
    });

let map = new AMap.Map('container', {
    resizeEnable: true, //是否监控地图容器尺寸变化
    zoom: 11, //初始化地图层级
    center: [114.135847, 22.67943] //初始化地图中心点
});

let marker = new AMap.Marker({
    position: map.getCenter(),
    icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
    offset: new AMap.Pixel(-25, -30),
    // 设置是否可拖拽
    draggable: false,
    cursor: 'pointer'
});
marker.on("click", openInfo);
marker.setMap(map);
// 设置点标记的动画效果，此处为弹跳效果
marker.setAnimation('AMAP_ANIMATION_BOUNCE');
map.addControl(scale);
map.addControl(toolBar);
map.addControl(overView);
map.setFitView();

function openInfo() {
    //构建信息窗体中显示的内容
    var info = [];
    info.push("<div><h4 style=\"font-weight:bold;color:#333;\">深圳市爱华勘测工程有限公司</h4>");
    info.push("<p class='input-item'>电话 : 0755-8351 2114</p>");
    info.push("<p class='input-item'>传真：0755-8351 2114</p>");
    info.push("<p class='input-item'>地址 :深圳市龙岗区平湖街道平湖社区平安大道1号华南城铁东物流区13栋16层</p></div></div>");

    infoWindow = new AMap.InfoWindow({
        content: info.join("")  //使用默认信息窗体框样式，显示信息内容
    });
    infoWindow.open(map, map.getCenter());
}
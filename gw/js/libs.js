/**
 * 渲染route显示当前位置
 * @param {routeList}  
 */
export const initRoute = routeList => {
    let str = "";
    routeList.forEach(item => {
        if (item.query) {
            str += `<li><a href=${item.path}?${item.query} target=${item.target}>${item.name}</a></li>`
        } else {
            str += `<li><a href=${item.path} target=${item.target}>${item.name}</a></li>`
        }
    })
    $(".route_ul").append(str);
    let lastStr = $(".route_ul li:last a").html().substring(0, $(".route_ul li:last a").html().length - 8)
    $(".route_ul li:last a").html(lastStr);
}

/**
 * 切换二级tab
 * @param {index}  
 */
export const handleChangeTab = index => {
    $(".tab_ul li").each(function (index, item) {
        $(item).removeClass("active")
    })
    $(".item_box").each(function (index, item) {
        $(item).hide();
    })
    if (index != 0) {
        $(".tab_ul li").eq(index - 1).addClass("active");
        $(`#item_box_${index}`).show();
    } else {
        $(".tab_ul li").eq(0).addClass("active");
        $(`#item_box_1`).show();
    }
}


/**
 * 生成图片列表
 * @param {imgList} 
 * @param {tabIndex}  
 */
export const createImgList = (imgList, tabIndex) => {
    let str = "";
    imgList.forEach(item => {
        str += `<li><div><img src=${item.src} alt="" title=${item.title}></div>
        <p>${item.title}</p></li>`
    })
    if (tabIndex != 0) {
        $(`#item_box_${tabIndex} ul`).html(str)
    } else {
        $(`#item_box_1 ul`).html(str)
    }
}

/**
 * 生成分页
 * @param {url}
 * @param {pageIndex}
 * @param {pageTotal}
 * @param {tabIndex}
 */
export const createPagination = (url, tabIndex, pageTotal, pageIndex) => {
    let str = "";
    str += `<li class="page-item disabled">
               <a class="page-link" href="${url}?tabIndex=${tabIndex}" tabindex="-1" aria-disabled="true">上一页</a>
            </li>`
    for (var i = 0; i < pageTotal; i++) {
        str += `<li class="page-item active" aria-current="page">
               <a class="page-link" href="${url}?tabIndex=${tabIndex}">${i + 1}<span class="sr-only">(current)</span></a>
            </li>`
    }
    str += `<li class="page-item">
                <a class="page-link" href="${url}?tabIndex=${tabIndex}">下一页</a>
            </li>`
    return str;
}
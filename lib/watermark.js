const canvasWM = require('./canvasWM');
const svgWM = require('./svgWM');

function WaterMark ({
    type = 'canvas',
    container = document.body,
    content = 'WaterMark',
    width = '300px',
    height = '200px',
    rotate = '30',
    fontSize = '20px',
    color = 'rgba(184, 184, 184, 0.8)',
    zIndex = 1000
} = {}) {
    const args = arguments[0];
    let base64Url;
    if (type === 'canvas') {
        base64Url = canvasWM({
            content,
            width,
            height,
            rotate,
            fontSize,
            fillStyle: color
        });
    } else {
        base64Url = svgWM({
            content,
            width,
            height,
            rotate,
            fontSize,
            fill: color
        });
    }

    const __wm = document.querySelector('.__wm');

    const watermarkDiv = __wm || document.createElement("div");
    const styleStr = `
      position:absolute;
      top:0;
      left:0;
      width:100%;
      height:100%;
      z-index:${zIndex};
      pointer-events:none;
      background-repeat:repeat;
      background-image:url('${base64Url}')`;

    watermarkDiv.setAttribute('style', styleStr);
    watermarkDiv.classList.add('__wm');

    if (!__wm) {
        container.style.position = 'relative';
        container.insertBefore(watermarkDiv, container.firstChild);
    }

    // 监听节点的变动
    // https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) {
        let mo = new MutationObserver(function () {
            const __wm = document.querySelector('.__wm');
            // 只在__wm元素变动才重新调用 WaterMark
            if ((__wm && __wm.getAttribute('style') !== styleStr) || !__wm) {
                // 避免一直触发
                mo.disconnect();
                mo = null;
                WaterMark(args);
            }
        });
        mo.observe(container, {
            attributes: true,
            subtree: true,
            childList: true
        })
    }
}

module.exports = WaterMark;

# 前言

本仓库 fork 来自[fisher-zh / watermark](https://github.com/fisher-zh/watermark),但由于年代久远，且 issue 没人回复，因此在原先基础上修复了存在缺陷，并实现支持 IE9。

# watermark

水印生成工具

## 安装

- npm

```javascript
npm install @solfkwolf/watermark
```

- script

```javascript
<script src="./dist/watermark.min.js"></script>
```

## 使用

```javascript
WaterMark({
  type: "canvas",
  container: document.getElementById("canvas"),
  content: "WaterMark",
  width: "300px",
  height: "200px",
  rotate: "30",
  fontSize: "20px",
  color: "rgba(184, 184, 184, 0.8)",
});
```

| 参数      | 说明               | 类型                     | 可选值     | 默认值        |
| --------- | ------------------ | ------------------------ | ---------- | ------------- |
| type      | 渲染方式           | string                   | canvas/svg | canvas        |
| container | 挂载的 DOM         | object                   | -          | document.body |
| content   | 水印内容           | string / array\<string\> | -          | WaterMark     |
| width     | 单个水印块的宽度   | string                   | -          | 300px         |
| height    | 单个水印块的高度   | string                   | -          | 200px         |
| rotate    | 水印文字的旋转角度 | string/number            | -          | 30            |
| fontSize  | 水印文字的大小     | string                   | -          | 20px          |
| color     | 水印文字的颜色，   | string                   | -          | 20px          |

# 浏览器的兼容性

- svg 模式完美支持 IE9+

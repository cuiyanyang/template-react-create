## tpl
创建react模板，类组件和函数组件

```
├── xxxx                     
    ├── components               // 子组件
    ├── index.ts                 // 组件入口
    ├── xxxx.tsx                 // 组件
    ├── xxxx.less                // 组件样式
    ├── services                 // services目录
    └── models                   // models目录
```

## 安装
```
npm install template-react-util -g
```

## 使用
```
tpl <name> [options]
```
### options
#### -t
```
tpl -t 类型
```
默认创建函数ts模板

类型可选择[class, func, classTs, funcTs]其中一个

#### -s
```
tpl -s 路径名
```
模板默认创建在src/pages

#### 帮助
```
tpl -h
```
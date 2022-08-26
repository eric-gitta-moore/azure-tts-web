# 在web页面中使用azure文字转语音功能

网页地址：https://james-curtis.github.io/azure-tts-web/

**仅**支持 [SSML](https://docs.microsoft.com/zh-cn/azure/cognitive-services/speech-service/speech-synthesis-markup?tabs=csharp)

![img](./docs/images/img.png)

参考示例：

```xml
<speak xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="http://www.w3.org/2001/mstts"
       xmlns:emo="http://www.w3.org/2009/10/emotionml" version="1.0" xml:lang="zh-CN">
  <voice name="zh-CN-YunxiNeural">
    <mstts:express-as role="Narrator">

      <!-- 牛搭 移动端低代码平台 -->

      <!-- 我们团队给牛搭的定义是一个移动端的低代码平台，实现可视化拖放编辑，也是一个页面生成工具，通过Jason配置就能快速生成界面。从而减少开发成本 -->

      通过对内置物料组件的拖拽、摆放并进行需要的设置，即可完成一个完整可用的移动端页面

      牛搭拥有完善且齐全的设置器功能

      每个组件可配置的详细参数都会展示在设置器中

      例如：常规选项卡中用于配置各个组件特有的设置，而在外观选项卡中可以配置部分组件通用的样式

      不仅如此，我们还内置了丰富的动作，同时也提供了可自行配置的事件触发器和动作执行器

      一般来说自定义动作执行器是一个比较常用的功能，在较多场合都有它的身影

      例如点击按钮使轮播图停止、点击购买按钮 发送相应的请求并将服务器返回的结果进行提示，等等。有非常多的场景都会需要用到自定义动作执行器

      当页面完成之后您可以直接发在线链接给您的合作伙伴或者团队，进行讨论、评估

      同时我们也提供了私有化部署，在本地托管您的应用实例，在你自己的基础设施或公共云环境中运行，从而保障对数据的安全性和服务质量的最有效控制。

      下面让我们一起来看看牛搭的Demo演示

      这里我们将从零开始

      以实现屏幕中所呈现的简易页面原型为例

      您也可以打开我们的预览地址一起体验

      我们先完成页面布局，这里需要摆放两个并排的按钮，先放上一个分栏容器组件，然后再放入两个按钮

      接下来是轮播图，需要拖拽轮播图组件，并放在按钮的下方

      接着轮播图的下方是一块用于放置通知或者广告的跑马灯，因此我们拖拽通知栏组件进入画布

      下面是连续三个消息的展示面板，这里使用折叠面板就能达到效果了

      然后是一块表单信息收集，需要收集用户的手机号，以及通知方式

      这里采用了复选框记录通知方式、文本框搜集手机号，并在最后使用一个通栏按钮作为表单提交按钮

      组件放置完成之后，我们再把每一块的内容分别填充上去

      这里的按钮太窄了，我们给他设置成最大号的按钮

      现在的复选框比较丑，让我们稍加调整，让他变得更好看一些

      至此，页面的布局、内容和样式都已经调整好了。接下来我们要来设置一些事件触发器和动作执行器。

      先是点击上一页按钮使得轮播图翻到上一页

      在大纲面板中可以直接选中需要调整的组件，而不用每次都去点击画布中的组件

      因为我们后面需要操作的就是轮播图，需要拿到该组件的对象，所以这里我们先复制一下轮播图组件的id

      上下翻页功能已经完成了。这里我们如果想更加个性化的添加其他事件怎么办呢？下面我们来添加一下三击和四击事件

      可以看到，我们的自定义事件也是正常执行了。接下来我们最后处理一下立即预约按钮的事件

      至此，页面基本完成了。此时我们点击右上角的预览看下在生产环境下表现如何

      效果很好，和刚才在画布中的表现一致，此刻您可以点击发布，将页面分享给您的同伴进行评估测试。

      在此我们提供了私有化部署的功能。具体的步骤您可以参阅我们的文档。

      感谢您的观看，我们下次再见

    </mstts:express-as>
  </voice>
</speak>
```
# Q/A

### 代码都是存您的本机，请知晓
```tsx
class Storage {
  static getItem(key: string) {
    if (IN_UTOOLS) return utools.dbStorage.getItem(key)
    return localStorage.getItem(key);
  }

  static setItem(key: string, data: any) {
    if (IN_UTOOLS) return utools.dbStorage.setItem(key, data)
    return localStorage.setItem(key, data);
  }
}
```

### 免费额度

参考官网：https://azure.microsoft.com/zh-cn/pricing/details/cognitive-services/speech-services/
![img](./docs/images/img_1.png)

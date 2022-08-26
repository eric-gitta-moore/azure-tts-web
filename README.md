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
      在此我们提供了私有化部署的功能。具体的步骤您可以参阅我们的文档。

      感谢您的观看，我们下次再见

    </mstts:express-as>
  </voice>
</speak>
```

# 墙裂推荐 Azure [有声内容创作门户](https://aka.ms/audiocontentcreation)
![11](./docs/images/img_2.png)

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

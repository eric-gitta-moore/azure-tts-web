import {Button, Input, message, Space} from 'antd';
import React, {useState} from 'react';
import style from './index.less'
import * as sdk from 'microsoft-cognitiveservices-speech-sdk'
import MonacoEditor from 'react-monaco-editor';
// import * as fs from 'fs'

const LOCATION_KEY_NAME = 'key'
const LOCATION_REGION_NAME = 'ssml'
const App = () => {
  const [ssml, setSSML] = useState('')
  const [key, setKey] = useState(utools.dbStorage.getItem(LOCATION_KEY_NAME))
  const [region, setRegion] = useState(utools.dbStorage.getItem(LOCATION_REGION_NAME))

  function dispatchKey(str: string) {
    utools.dbStorage.setItem(LOCATION_KEY_NAME, str);
    setKey(str)
  }
  function dispatchRegion(str: string) {
    utools.dbStorage.setItem(LOCATION_REGION_NAME, str);
    setRegion(str)
  }

  function testSpeech() {
    synthesizer(sdk.AudioConfig.fromDefaultSpeakerOutput())
  }

  function download() {
    function success(e: sdk.SpeechSynthesisResult) {
      console.log(`e.audioData`, e.audioData)
      const objUrl = URL.createObjectURL(new Blob([e.audioData], {type: 'application/octet-stream'}))
      const link = document.createElement('a');
      link.style.display = 'none';
      link.href = objUrl;
      link.download = `${Date.now().toString()}.mp3`
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objUrl)

      // const path = utools.showSaveDialog({
      //   title: '保存位置',
      //   defaultPath: utools.getPath('downloads'),
      // })
      // if (path) {
      //   fs.writeFileSync(path, new DataView(e.audioData))
      // }
    }

    class test extends sdk.PushAudioOutputStreamCallback {
      write(dataBuffer: ArrayBuffer) {
      }

      close() {
      }
    }

    const conf = new test()
    synthesizer(sdk.AudioConfig.fromStreamOutput(conf), success)
  }

  function synthesizer(audioConfig?: sdk.AudioConfig | undefined, success?: (e: sdk.SpeechSynthesisResult) => any) {
    const speechConfig = sdk.SpeechConfig.fromSubscription(key, region);
    speechConfig.speechSynthesisOutputFormat = sdk.SpeechSynthesisOutputFormat.Audio24Khz48KBitRateMonoMp3
    const synthesizer = new sdk.SpeechSynthesizer(speechConfig, audioConfig)
    synthesizer.speakSsmlAsync(ssml, e => {
      if (e.reason === sdk.ResultReason.SynthesizingAudioCompleted) {
        message.success('合成成功');
        success?.(e)
      } else {
        message.error('合成失败');
        console.error("Speech synthesis canceled, " + e.errorDetails +
          "\nDid you set the speech resource key and region values?");
      }
      synthesizer.close();
    })
  }

  // "development": {
  //   "main": "http://127.0.0.1:8000/"
  // },
  return (
    <div className={style.wrapper}>
      <MonacoEditor
        height="70vh"
        language="xml"
        value={ssml}
        options={{automaticLayout: true}}
        onChange={(e) => setSSML(e)}
      />
      <Input.Password placeholder='请填写azure中语音服务的密钥。密钥1或2选择一个即可' value={key} onChange={(e) => dispatchKey(e.target.value)}/>
      <Input.Password placeholder='位置/区域，例如japaneast' value={region} onChange={(e) => dispatchRegion(e.target.value)}/>
      <div className='button-group'>
        <Button className='button-item' type="default" onClick={testSpeech}>试听</Button>
        <Button className='button-item' type="primary" onClick={download}>下载</Button>
      </div>
    </div>
  )
};

export default App;

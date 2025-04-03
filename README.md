<a href="https://xkcd.com/949/"><img src="http://imgs.xkcd.com/comics/file_transfer.png" alt="XKCD 949" width="30%" align="right" /></a> <img src="public/images/wordmark.png" alt="FilePizza wordmark" width="50%" /> <h3>Peer-to-peer file transfers in your browser</h3>

# Filepizza-Workers
*Cooked up by [Alex Kern](https://kern.io) & [Neeraj Baid](https://github.com/neerajbaid) while eating Sliver @ UC Berkeley.*

Using [WebRTC](http://www.webrtc.org), FilePizza eliminates the initial upload step required by other web-based file sharing services. Because data is never stored in an intermediary server, the transfer is fast, private, and secure.

A hosted instance of FilePizza is available at [file.pizza](https://file.pizza).

## What's new with FilePizza v2

* A new UI with dark mode support, now built on modern browser technologies.
* Works on most mobile browsers, including Mobile Safari.
* Transfers are now directly from the uploader to the downloader's browser (WebRTC without WebTorrent) with faster handshakes.
* Uploaders can monitor the progress of the transfer and stop it if they want.
* Better security and safety measures with password protection and reporting.
* Support for uploading multiple files at once, which downloaders receive as a zip file.
* Streaming downloads with a Service Worker.
* Out-of-process storage of server state using Redis.

## Development

```
$ git clone https://github.com/kern/filepizza.git
$ pnpm install
$ pnpm dev
$ pnpm build
$ pnpm start
```

## Running with Docker

```
$ pnpm docker:build
$ pnpm docker:up
$ pnpm docker:down
```

## Deployment on Cloudflare Workers

```
$ pnpm build
$ pnpm run deploy
```

Root Directory: /

## Stack

* Next.js
* Tailwind
* TypeScript
* React
* PeerJS for WebRTC
* View Transitions
* Redis (optional)

## FAQ

**How are my files sent?** Your files are sent directly from your browser to the downloader's browser. They never pass through our servers. FilePizza uses WebRTC to send files. This requires that the uploader leave their browser window open until the transfer is complete.

**Can multiple people download my file at once?** Yes! Just send them your short or long URL.

**How big can my files be?** As big as your browser can handle.

**What happens when I close my browser?** The URLs for your files will no longer work. If a downloader has completed the transfer, that downloader will continue to seed to incomplete downloaders, but no new downloads may be initiated.

**Are my files encrypted?** Yes, all WebRTC communications are automatically encrypted using public-key cryptography because of DTLS. You can add an optional password to your upload for an extra layer of security.

## License & Acknowledgements

FilePizza is released under the [BSD 3-Clause license](https://github.com/kern/filepizza/blob/main/LICENSE). A huge thanks to [iblowyourdesign](https://dribbble.com/iblowyourdesign) for the pizza illustration.

---

# Chinese

<h3>在浏览器中进行点对点文件传输</h3>
此项目是根据原项目的汉化版，并增加了Cloudflare Workers部署等相关配置项。
*由 [Alex Kern](https://kern.io) 和 [Neeraj Baid](https://github.com/neerajbaid) 在加州大学伯克利分校享用 Sliver 时开发。*

FilePizza 使用 [WebRTC](http://www.webrtc.org) 技术，消除了其他基于网络的文件共享服务所需的初始上传步骤。由于数据从不存储在中间服务器中，传输过程快速、私密且安全。

FilePizza 的在线实例可在 [file.pizza](https://file.pizza) 访问。

## FilePizza v2 新特性

* 支持深色模式的全新UI界面，基于现代浏览器技术构建。
* 支持大多数移动浏览器，包括移动版Safari。
* 传输直接从上传者浏览器到下载者浏览器（使用WebRTC，不使用WebTorrent），握手更快。
* 上传者可以监控传输进度并可以随时停止。
* 更好的安全性和安全措施，支持密码保护和举报功能。
* 支持同时上传多个文件，下载者将收到zip压缩包。
* 使用Service Worker进行流式下载。
* 使用Redis进行服务器状态的进程外存储。

## 开发

```
$ git clone https://github.com/kern/filepizza.git
$ pnpm install
$ pnpm dev
$ pnpm build
$ pnpm start
```

## Docker部署

```
$ pnpm docker:build
$ pnpm docker:up
$ pnpm docker:down
```

## Cloudflare Workers部署

```
$ pnpm build
$ pnpm run deploy
```

根目录：/

## 技术栈

* Next.js
* Tailwind
* TypeScript
* React
* PeerJS (WebRTC)
* View Transitions
* Redis (可选)

## 常见问题

**文件是如何发送的？** 您的文件直接从您的浏览器发送到下载者的浏览器。文件永远不会经过我们的服务器。FilePizza使用WebRTC发送文件。这要求上传者在传输完成之前保持浏览器窗口打开。

**多人可以同时下载我的文件吗？** 是的！只需将您的短链接或长链接发送给他们即可。

**我可以传输多大的文件？** 取决于您的浏览器能够处理的大小。

**当我关闭浏览器时会发生什么？** 您的文件的URL将不再有效。如果下载者已完成传输，该下载者将继续为未完成的下载者做种，但不能发起新的下载。

**我的文件是加密的吗？** 是的，所有WebRTC通信都会因为DTLS而自动使用公钥加密。您可以为上传添加可选的密码以获得额外的安全层。

## 许可证和致谢

FilePizza 基于 [BSD 3-Clause license](https://github.com/kern/filepizza/blob/main/LICENSE) 发布。特别感谢 [iblowyourdesign](https://dribbble.com/iblowyourdesign) 提供的披萨插图。

if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,f,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const d={uri:location.origin+s.slice(1)};return Promise.all(f.map((s=>{switch(s){case"exports":return a;case"module":return d;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./service-worker.js",["./workbox-3774b91f"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.ee9d801a.css",revision:"0bc3dcf3cca03b5311665986a146b0a9"},{url:"assets/img/danger-dark.5fb01a54.svg",revision:"5fb01a54b1893112ce78f6bf6fe7b9b6"},{url:"assets/img/danger.6e8b05e0.svg",revision:"6e8b05e040e31db4b52092926ac89628"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/info-dark.9cb8f08f.svg",revision:"9cb8f08f92e9e47faf596484d9af636a"},{url:"assets/img/info.b3407763.svg",revision:"b3407763d94949efc3654309e9a2202f"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/img/tip-dark.36f60759.svg",revision:"36f607593c4f5274775cb24f1edf4389"},{url:"assets/img/tip.fa255ccc.svg",revision:"fa255cccbbef66519a1bb90a5bed6f24"},{url:"assets/img/warning-dark.34208d06.svg",revision:"34208d0652668027b5e1797bdafd2da9"},{url:"assets/img/warning.950d1128.svg",revision:"950d1128cc862f2b631f5d54c3458174"},{url:"assets/js/29.7bae8498.js",revision:"35f2985168fb03c67f9ad71399764899"},{url:"assets/js/30.e1071f46.js",revision:"bdf67be7922d9b4dd191ef5e4c087950"},{url:"assets/js/31.2aea0aa1.js",revision:"a825c226dd92ccf438b8b5a146089d92"},{url:"assets/js/32.91abd33f.js",revision:"2e48a852a04f0a3621eaa870c51a8fa8"},{url:"assets/js/33.5e4b8247.js",revision:"f01eef2b74a9a7558ed22f279553c302"},{url:"assets/js/app.bed3feb8.js",revision:"1b756d2d342f549dd04c3340a9f825b5"},{url:"assets/js/layout-Blog.a66cf156.js",revision:"5b96070a64f2e7b67a95e01c599bbe64"},{url:"assets/js/layout-Layout.d570ae96.js",revision:"ac588be35f923de6d752f9c170981cf6"},{url:"assets/js/layout-NotFound.64828035.js",revision:"0f6d9ef9ec6d8e22af047b743803e1df"},{url:"assets/js/layout-Slide.e7009330.js",revision:"cf795a4fd689ca64e4a269c6aa48bdbb"},{url:"assets/js/page-Componentdisabled.b45b71c6.js",revision:"a5a2df9c3dbd5e806ff8d31567f9ced5"},{url:"assets/js/page-Encryptionarticle.2461bc36.js",revision:"f52d4d0e4c010b25e09be2200a7eb7cb"},{url:"assets/js/page-Guides.c9b66d2e.js",revision:"f0194882cb66de4a423e91b222af5e44"},{url:"assets/js/page-IntroPage.63237bef.js",revision:"52b7fc885b97ec909d7d4eb062a47cf1"},{url:"assets/js/page-MarkdownEnhance.77092698.js",revision:"88f66002a8ec2ad13a9d72e38400e0c9"},{url:"assets/js/page-Markdown增强.88c6ab59.js",revision:"ff90ccc2d1e76fd09791198e6e655524"},{url:"assets/js/page-MrHope.21d6aab2.js",revision:"3eec63f568c1b0ed307665c990f7e42e"},{url:"assets/js/page-pageconfig.259fd001.js",revision:"fe16c2be1a0bb31debc383efb7e082db"},{url:"assets/js/page-Projecthomepagedemo.325b60bb.js",revision:"ec5a6a16824ba50696ced9405a51ae97"},{url:"assets/js/page-Slidepage.374bc9a2.js",revision:"221bb71f9b1e9da17e4f638095ab413a"},{url:"assets/js/page-主要功能与配置演示.47d2e914.js",revision:"0d8ee36f26bfcfcfcc0d35b7db88ddb0"},{url:"assets/js/page-密码加密的文章.04a5f532.js",revision:"3534f13d9c064d8985d2a0501a914230"},{url:"assets/js/page-幻灯片页.13e0c4fe.js",revision:"c65d603fd9418fb2f9f5fe9996014a21"},{url:"assets/js/page-组件禁用.26ced2f3.js",revision:"f0225d708b6aa6c660e1aac538c3cdbd"},{url:"assets/js/page-页面配置.7e6f51e0.js",revision:"5e7a59abccbf53817e3d5413ae4b5734"},{url:"assets/js/page-项目主页展示.e2ae1b60.js",revision:"8b03546d9ba596a6c3ec60c770d7914b"},{url:"assets/js/vendors~flowchart.7a06d56b.js",revision:"7b68b6876de3e0c4a875fca14e4a7e7a"},{url:"assets/js/vendors~layout-Blog~layout-Layout.34623d57.js",revision:"051c6cef3589161ecf502f651a069f8f"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.bac9507d.js",revision:"82061206973e54c9a3282aa2b160b3ea"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.d5de8150.js",revision:"c6034e45b63de432ed3a4077d10a60ae"},{url:"assets/js/vendors~photo-swipe.bfcd5d93.js",revision:"7293320c54d667c7825de555e3331929"},{url:"assets/js/vendors~reveal.0f764125.js",revision:"1f59a851c57665b88432baf977e172e2"},{url:"assets/js/vendors~valine.0252a32d.js",revision:"292e56e0b86fa540032b233db2ea4552"},{url:"logo.svg",revision:"e5d2cc16443a59035e0fa55c746f7d51"},{url:"assets/fonts/KaTeX_AMS-Regular.2dbe16b4.ttf",revision:"2dbe16b4f4662798159f8d62c8d2509d"},{url:"assets/fonts/KaTeX_AMS-Regular.38a68f7d.woff2",revision:"38a68f7d18d292349a6e802a66136eae"},{url:"assets/fonts/KaTeX_AMS-Regular.7d307e83.woff",revision:"7d307e8337b9559e4040c5fb76819789"},{url:"assets/fonts/KaTeX_Caligraphic-Bold.33d26881.ttf",revision:"33d26881e4dd89321525c43b993f136c"},{url:"assets/fonts/KaTeX_Caligraphic-Regular.5e7940b4.ttf",revision:"5e7940b4ed250e98a512f520e39c867d"},{url:"assets/fonts/KaTeX_Fraktur-Bold.4de87d40.woff",revision:"4de87d40f0389255d975c69d45a0a7e7"},{url:"assets/fonts/KaTeX_Fraktur-Bold.7a3757c0.woff2",revision:"7a3757c0bfc580d91012d092ec8f06cb"},{url:"assets/fonts/KaTeX_Fraktur-Bold.ed330126.ttf",revision:"ed330126290a846bf0bb78f61aa6a080"},{url:"assets/fonts/KaTeX_Fraktur-Regular.450cc4d9.woff2",revision:"450cc4d9319c4a438dd00514efac941b"},{url:"assets/fonts/KaTeX_Fraktur-Regular.82d05fe2.ttf",revision:"82d05fe2abb0da9d1077110efada0f6e"},{url:"assets/fonts/KaTeX_Fraktur-Regular.dc4e330b.woff",revision:"dc4e330b6334767a16619c60d9ebce8c"},{url:"assets/fonts/KaTeX_Main-Bold.2e1915b1.ttf",revision:"2e1915b1a2f33c8ca9d1534193e934d7"},{url:"assets/fonts/KaTeX_Main-Bold.62c69756.woff",revision:"62c69756b3f1ca7b52fea2bea1030cd2"},{url:"assets/fonts/KaTeX_Main-Bold.78b0124f.woff2",revision:"78b0124fc13059862cfbe4c95ff68583"},{url:"assets/fonts/KaTeX_Main-BoldItalic.0d817b48.ttf",revision:"0d817b487b7fc993bda7dddba745d497"},{url:"assets/fonts/KaTeX_Main-BoldItalic.a2e3dcd2.woff",revision:"a2e3dcd2316f5002ee2b5f35614849a8"},{url:"assets/fonts/KaTeX_Main-BoldItalic.c7213ceb.woff2",revision:"c7213ceb79250c2ca46cc34ff3b1aa49"},{url:"assets/fonts/KaTeX_Main-Italic.081073fd.woff",revision:"081073fd6a7c66073ad231db887de944"},{url:"assets/fonts/KaTeX_Main-Italic.767e06e1.ttf",revision:"767e06e1df6abd16e092684bffa71c38"},{url:"assets/fonts/KaTeX_Main-Italic.eea32672.woff2",revision:"eea32672f64250e9d1dfb68177c20a26"},{url:"assets/fonts/KaTeX_Main-Regular.689bbe6b.ttf",revision:"689bbe6b67f22ffb51b15cc6cfa8facf"},{url:"assets/fonts/KaTeX_Main-Regular.756fad0d.woff",revision:"756fad0d6f3dff1062cfa951751d744c"},{url:"assets/fonts/KaTeX_Main-Regular.f30e3b21.woff2",revision:"f30e3b213e9a74cf7563b0c3ee878436"},{url:"assets/fonts/KaTeX_Math-BoldItalic.753ca3df.woff2",revision:"753ca3dfa44302604bec8e08412ad1c1"},{url:"assets/fonts/KaTeX_Math-BoldItalic.b3e80ff3.woff",revision:"b3e80ff3816595ffb07082257d30b24f"},{url:"assets/fonts/KaTeX_Math-BoldItalic.d9377b53.ttf",revision:"d9377b53f267ef7669fbcce45a74d4c7"},{url:"assets/fonts/KaTeX_Math-Italic.0343f93e.ttf",revision:"0343f93ed09558b81aaca43fc4386462"},{url:"assets/fonts/KaTeX_Math-Italic.2a39f382.woff2",revision:"2a39f3827133ad0aeb2087d10411cbf2"},{url:"assets/fonts/KaTeX_Math-Italic.67710bb2.woff",revision:"67710bb2357b8ee5c04d169dc440c69d"},{url:"assets/fonts/KaTeX_SansSerif-Bold.59b37733.woff2",revision:"59b3773389adfb2b21238892c08322ca"},{url:"assets/fonts/KaTeX_SansSerif-Bold.dfcc59ad.ttf",revision:"dfcc59ad994a0513b07ef3309b8b5159"},{url:"assets/fonts/KaTeX_SansSerif-Bold.f28c4fa2.woff",revision:"f28c4fa28f596796702fea3716d82052"},{url:"assets/fonts/KaTeX_SansSerif-Italic.3ab5188c.ttf",revision:"3ab5188c9aadedf425ea63c6b6568df7"},{url:"assets/fonts/KaTeX_SansSerif-Italic.99ad93a4.woff2",revision:"99ad93a4600c7b00b961d70943259032"},{url:"assets/fonts/KaTeX_SansSerif-Italic.9d0fdf5d.woff",revision:"9d0fdf5d7d27b0e3bdc740d90b40ec57"},{url:"assets/fonts/KaTeX_SansSerif-Regular.6c3bd5b5.woff",revision:"6c3bd5b57f7eba215a2d37e2e28077f1"},{url:"assets/fonts/KaTeX_SansSerif-Regular.badf3598.woff2",revision:"badf3598c22478fd9155a49391ecd396"},{url:"assets/fonts/KaTeX_SansSerif-Regular.d511ebce.ttf",revision:"d511ebcef253ab53775576f28315f350"},{url:"assets/fonts/KaTeX_Script-Regular.082640ca.ttf",revision:"082640ca4242bb2aade86855e4d7d5f6"},{url:"assets/fonts/KaTeX_Script-Regular.4edf4e0f.woff",revision:"4edf4e0fd49c8a5680dd541c05f16a4c"},{url:"assets/fonts/KaTeX_Script-Regular.af7bc98b.woff2",revision:"af7bc98b2200573686405dc784f53cf2"},{url:"assets/fonts/KaTeX_Size1-Regular.2c2dc3b0.ttf",revision:"2c2dc3b057bb48b80bc785ac3d87ecf8"},{url:"assets/fonts/KaTeX_Size2-Regular.114ad198.ttf",revision:"114ad19833311359052ad1a174159262"},{url:"assets/fonts/KaTeX_Size4-Regular.70174da7.ttf",revision:"70174da79d1707501c10e07872e84667"},{url:"assets/fonts/KaTeX_Typewriter-Regular.35fe2cce.ttf",revision:"35fe2cce0791c276b8e919decd873f5b"},{url:"assets/fonts/KaTeX_Typewriter-Regular.53dcf861.woff",revision:"53dcf861876aae6f3a6a6004dc3bc758"},{url:"assets/fonts/KaTeX_Typewriter-Regular.641339e2.woff2",revision:"641339e2cd86c7816bfb8028ee7f86e0"},{url:"404.html",revision:"66e3317348b7d2cdca505d77de1c716a"},{url:"article/index.html",revision:"b74f607c0e17a753b5ea7427ee7a531e"},{url:"category/Guide/index.html",revision:"9422ead507b626bba1f4594040837b67"},{url:"category/index.html",revision:"b0a7baf73e49a017b4432f951139d217"},{url:"category/使用指南/index.html",revision:"368df0ea3382c6da831823dab8e724af"},{url:"encrypt/index.html",revision:"a829d102e278605668deffa5c4d688f1"},{url:"guide/disable/index.html",revision:"11a277b3fa0c23ed872a36f1fe77958d"},{url:"guide/encrypt/index.html",revision:"759c8727730438b43f60a6d404934c3b"},{url:"guide/index.html",revision:"606e43038f5270f5cde78c80b77196b1"},{url:"guide/markdown/index.html",revision:"e694cf36a9cb45f3eae4aee302784bb0"},{url:"guide/page/index.html",revision:"eb12aab54b0ff70dd208b3ba4830c956"},{url:"home/index.html",revision:"4557c38b02edaef62a5c74b0c57961c4"},{url:"index.html",revision:"096ce8a24711060b23b38ae595e73058"},{url:"intro/index.html",revision:"12a859c0bf6e9ae651df2eb5dd55d6c2"},{url:"slide/index.html",revision:"3ffced2466a0bd140bc87546cdfb3df5"},{url:"slides/index.html",revision:"774412bec1041a70c32e71a3e648e84b"},{url:"tag/encryption/index.html",revision:"d1e453f84730ff586e1881e1029cda03"},{url:"tag/Guide/index.html",revision:"49eed991986e253677ff968a75096047"},{url:"tag/index.html",revision:"8cb1ef0bcc8cd671b16e89e334a192fe"},{url:"tag/markdown/index.html",revision:"c6c8f2032b13f1ac62ad7b8bc3fe6f5f"},{url:"tag/Page config/index.html",revision:"772406d032dc0794cd6cf2e07f41d966"},{url:"tag/使用指南/index.html",revision:"1ed56213b997c2e54b52c1a899a5a17a"},{url:"tag/文章加密/index.html",revision:"98dde7546bcd8da21f19159355c5f8d0"},{url:"tag/页面配置/index.html",revision:"60c83cb336084f2a00b7b0ae224c1d4c"},{url:"timeline/index.html",revision:"8880a6facf4793dee930d6872880ed29"},{url:"zh/guide/disable/index.html",revision:"93dc994289d90d28e2ba5a649e4f20fe"},{url:"zh/guide/encrypt/index.html",revision:"376ff7e974add428763ad06cafd9e924"},{url:"zh/guide/index.html",revision:"e78d046e77c43e9ef3ba330b7c60886e"},{url:"zh/guide/markdown/index.html",revision:"2307483f3d7907b869d98af3df286910"},{url:"zh/guide/page/index.html",revision:"2322ddb2be3e4cbf5cc5564cd1164428"},{url:"zh/home/index.html",revision:"4e2909ea4acce7aa527e76f4e6f68698"},{url:"zh/index.html",revision:"0532e30b40e3ad3298aa790c7b94225d"},{url:"zh/slides/index.html",revision:"edfc76308398723419c9c11ba5172f96"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/guide-monochrome.png",revision:"699fa9b069f7f09ce3d52be1290ede20"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/img/homeImage.56f13b5d.jpg",revision:"56f13b5d598a4feab49dd969ac9fd2ff"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});

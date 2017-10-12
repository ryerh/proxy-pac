const PROXY = 'SOCKS5 localhost:1080; DIRECT';
const NO_PROXY = 'DIRECT';
const WHITE_LIST = [
  /\.cn$/,
  /126.net/,
  /163.com/,
  /360buying.com/,
  /alicdn.com/,
  /aliyun.com/,
  /baidu.com/,
  /bdimg.com/,
  /bdstatic.com/,
  /bootcdn.com/,
  /bootcss.com/,
  /coding.net/,
  /daocloud.io/,
  /douban.com/,
  /doubanio.com/,
  /fastapi.net/,
  /henghost.com/,
  /images-cn.ssl-images-amazon.com/,
  /jd.com/,
  /lagou.com/,
  /processon.com/,
  /qbox.me/,                 // coding.net cdn
  /qingcloud.com/,
  /qq.com/,
  /quqi.com/,
  /ryerh.com/,
  /taobao.com/,
  /weibo.com/,
  /xsky.com/,
  /ydstatic.com/,
  /yinxiang.com/,
  /youdao.com/,
  /zhihu.com/,
  /zhimg.com/,
  // local
  /^(10|127|192)\./,
  /^localhost/,
];

function FindProxyForURL(url, host) {
  return WHITE_LIST.some(i => i.test(host)) ? NO_PROXY : PROXY;
}

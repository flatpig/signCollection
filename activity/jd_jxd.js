/*
京小兑
更新时间:20201-3-13
只要保证一天运行一次，即可参与到每天3场抽奖，切勿多次运行冲垮服务器⚠️⚠️⚠️
号内循环互助，每天2500+兑币=20+京豆，推荐打开将抽奖码换为兑币的开关
docker用户推荐修改默认cron，避免冲垮服务器
活动入口：微信搜索小程序-京小兑
更新地址：jd_jxd.js

已支持IOS双京东账号, Node.js支持N个京东账号
脚本兼容: QuantumultX, Surge, Loon, 小火箭，JSBox, Node.js
============Quantumultx===============
[task_local]
#京小兑
30 8,16,20 * * * jd_jxd.js, tag=京小兑, img-url=https://raw.githubusercontent.com/58xinian/icon/master/jd_jxd.png, enabled=true

================Loon==============
[Script]
cron "35 8,16,20 * * *" script-path=jd_jxd.js, tag=京小兑

===============Surge=================
京小兑 = type=cron,cronexp="40 8,16,20 * * *",wake-system=1,timeout=3600,script-path=jd_jxd.js

============小火箭=========
京小兑 = type=cron,script-path=jd_jxd.js, cronexpr="45 8,16,20 * * *", timeout=3600, enable=true
 */

const $ = new Env('京小兑');

const notify = $.isNode() ? require('./sendNotify') : '';
//Node.js用户请在jdCookie.js处填写京东ck;
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
let jdNotify = true; //是否关闭通知，false打开通知推送，true关闭通知推送
//IOS等用户直接用NobyDa的jd cookie
let cookiesArr = [],
  cookie = '',
  message = '',
  allMessage = '';
!(function (n) {
  'use strict';
  function t(n, t) {
    var r = (65535 & n) + (65535 & t);
    return (((n >> 16) + (t >> 16) + (r >> 16)) << 16) | (65535 & r);
  }
  function r(n, t) {
    return (n << t) | (n >>> (32 - t));
  }
  function e(n, e, o, u, c, f) {
    return t(r(t(t(e, n), t(u, f)), c), o);
  }
  function o(n, t, r, o, u, c, f) {
    return e((t & r) | (~t & o), n, t, u, c, f);
  }
  function u(n, t, r, o, u, c, f) {
    return e((t & o) | (r & ~o), n, t, u, c, f);
  }
  function c(n, t, r, o, u, c, f) {
    return e(t ^ r ^ o, n, t, u, c, f);
  }
  function f(n, t, r, o, u, c, f) {
    return e(r ^ (t | ~o), n, t, u, c, f);
  }
  function i(n, r) {
    (n[r >> 5] |= 128 << r % 32), (n[14 + (((r + 64) >>> 9) << 4)] = r);
    var e,
      i,
      a,
      d,
      h,
      l = 1732584193,
      g = -271733879,
      v = -1732584194,
      m = 271733878;
    for (e = 0; e < n.length; e += 16)
      (i = l),
        (a = g),
        (d = v),
        (h = m),
        (g = f(
          (g = f(
            (g = f(
              (g = f(
                (g = c(
                  (g = c(
                    (g = c(
                      (g = c(
                        (g = u(
                          (g = u(
                            (g = u(
                              (g = u(
                                (g = o(
                                  (g = o(
                                    (g = o(
                                      (g = o(
                                        g,
                                        (v = o(
                                          v,
                                          (m = o(
                                            m,
                                            (l = o(
                                              l,
                                              g,
                                              v,
                                              m,
                                              n[e],
                                              7,
                                              -680876936
                                            )),
                                            g,
                                            v,
                                            n[e + 1],
                                            12,
                                            -389564586
                                          )),
                                          l,
                                          g,
                                          n[e + 2],
                                          17,
                                          606105819
                                        )),
                                        m,
                                        l,
                                        n[e + 3],
                                        22,
                                        -1044525330
                                      )),
                                      (v = o(
                                        v,
                                        (m = o(
                                          m,
                                          (l = o(
                                            l,
                                            g,
                                            v,
                                            m,
                                            n[e + 4],
                                            7,
                                            -176418897
                                          )),
                                          g,
                                          v,
                                          n[e + 5],
                                          12,
                                          1200080426
                                        )),
                                        l,
                                        g,
                                        n[e + 6],
                                        17,
                                        -1473231341
                                      )),
                                      m,
                                      l,
                                      n[e + 7],
                                      22,
                                      -45705983
                                    )),
                                    (v = o(
                                      v,
                                      (m = o(
                                        m,
                                        (l = o(
                                          l,
                                          g,
                                          v,
                                          m,
                                          n[e + 8],
                                          7,
                                          1770035416
                                        )),
                                        g,
                                        v,
                                        n[e + 9],
                                        12,
                                        -1958414417
                                      )),
                                      l,
                                      g,
                                      n[e + 10],
                                      17,
                                      -42063
                                    )),
                                    m,
                                    l,
                                    n[e + 11],
                                    22,
                                    -1990404162
                                  )),
                                  (v = o(
                                    v,
                                    (m = o(
                                      m,
                                      (l = o(
                                        l,
                                        g,
                                        v,
                                        m,
                                        n[e + 12],
                                        7,
                                        1804603682
                                      )),
                                      g,
                                      v,
                                      n[e + 13],
                                      12,
                                      -40341101
                                    )),
                                    l,
                                    g,
                                    n[e + 14],
                                    17,
                                    -1502002290
                                  )),
                                  m,
                                  l,
                                  n[e + 15],
                                  22,
                                  1236535329
                                )),
                                (v = u(
                                  v,
                                  (m = u(
                                    m,
                                    (l = u(
                                      l,
                                      g,
                                      v,
                                      m,
                                      n[e + 1],
                                      5,
                                      -165796510
                                    )),
                                    g,
                                    v,
                                    n[e + 6],
                                    9,
                                    -1069501632
                                  )),
                                  l,
                                  g,
                                  n[e + 11],
                                  14,
                                  643717713
                                )),
                                m,
                                l,
                                n[e],
                                20,
                                -373897302
                              )),
                              (v = u(
                                v,
                                (m = u(
                                  m,
                                  (l = u(l, g, v, m, n[e + 5], 5, -701558691)),
                                  g,
                                  v,
                                  n[e + 10],
                                  9,
                                  38016083
                                )),
                                l,
                                g,
                                n[e + 15],
                                14,
                                -660478335
                              )),
                              m,
                              l,
                              n[e + 4],
                              20,
                              -405537848
                            )),
                            (v = u(
                              v,
                              (m = u(
                                m,
                                (l = u(l, g, v, m, n[e + 9], 5, 568446438)),
                                g,
                                v,
                                n[e + 14],
                                9,
                                -1019803690
                              )),
                              l,
                              g,
                              n[e + 3],
                              14,
                              -187363961
                            )),
                            m,
                            l,
                            n[e + 8],
                            20,
                            1163531501
                          )),
                          (v = u(
                            v,
                            (m = u(
                              m,
                              (l = u(l, g, v, m, n[e + 13], 5, -1444681467)),
                              g,
                              v,
                              n[e + 2],
                              9,
                              -51403784
                            )),
                            l,
                            g,
                            n[e + 7],
                            14,
                            1735328473
                          )),
                          m,
                          l,
                          n[e + 12],
                          20,
                          -1926607734
                        )),
                        (v = c(
                          v,
                          (m = c(
                            m,
                            (l = c(l, g, v, m, n[e + 5], 4, -378558)),
                            g,
                            v,
                            n[e + 8],
                            11,
                            -2022574463
                          )),
                          l,
                          g,
                          n[e + 11],
                          16,
                          1839030562
                        )),
                        m,
                        l,
                        n[e + 14],
                        23,
                        -35309556
                      )),
                      (v = c(
                        v,
                        (m = c(
                          m,
                          (l = c(l, g, v, m, n[e + 1], 4, -1530992060)),
                          g,
                          v,
                          n[e + 4],
                          11,
                          1272893353
                        )),
                        l,
                        g,
                        n[e + 7],
                        16,
                        -155497632
                      )),
                      m,
                      l,
                      n[e + 10],
                      23,
                      -1094730640
                    )),
                    (v = c(
                      v,
                      (m = c(
                        m,
                        (l = c(l, g, v, m, n[e + 13], 4, 681279174)),
                        g,
                        v,
                        n[e],
                        11,
                        -358537222
                      )),
                      l,
                      g,
                      n[e + 3],
                      16,
                      -722521979
                    )),
                    m,
                    l,
                    n[e + 6],
                    23,
                    76029189
                  )),
                  (v = c(
                    v,
                    (m = c(
                      m,
                      (l = c(l, g, v, m, n[e + 9], 4, -640364487)),
                      g,
                      v,
                      n[e + 12],
                      11,
                      -421815835
                    )),
                    l,
                    g,
                    n[e + 15],
                    16,
                    530742520
                  )),
                  m,
                  l,
                  n[e + 2],
                  23,
                  -995338651
                )),
                (v = f(
                  v,
                  (m = f(
                    m,
                    (l = f(l, g, v, m, n[e], 6, -198630844)),
                    g,
                    v,
                    n[e + 7],
                    10,
                    1126891415
                  )),
                  l,
                  g,
                  n[e + 14],
                  15,
                  -1416354905
                )),
                m,
                l,
                n[e + 5],
                21,
                -57434055
              )),
              (v = f(
                v,
                (m = f(
                  m,
                  (l = f(l, g, v, m, n[e + 12], 6, 1700485571)),
                  g,
                  v,
                  n[e + 3],
                  10,
                  -1894986606
                )),
                l,
                g,
                n[e + 10],
                15,
                -1051523
              )),
              m,
              l,
              n[e + 1],
              21,
              -2054922799
            )),
            (v = f(
              v,
              (m = f(
                m,
                (l = f(l, g, v, m, n[e + 8], 6, 1873313359)),
                g,
                v,
                n[e + 15],
                10,
                -30611744
              )),
              l,
              g,
              n[e + 6],
              15,
              -1560198380
            )),
            m,
            l,
            n[e + 13],
            21,
            1309151649
          )),
          (v = f(
            v,
            (m = f(
              m,
              (l = f(l, g, v, m, n[e + 4], 6, -145523070)),
              g,
              v,
              n[e + 11],
              10,
              -1120210379
            )),
            l,
            g,
            n[e + 2],
            15,
            718787259
          )),
          m,
          l,
          n[e + 9],
          21,
          -343485551
        )),
        (l = t(l, i)),
        (g = t(g, a)),
        (v = t(v, d)),
        (m = t(m, h));
    return [l, g, v, m];
  }
  function a(n) {
    var t,
      r = '',
      e = 32 * n.length;
    for (t = 0; t < e; t += 8)
      r += String.fromCharCode((n[t >> 5] >>> t % 32) & 255);
    return r;
  }
  function d(n) {
    var t,
      r = [];
    for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
    var e = 8 * n.length;
    for (t = 0; t < e; t += 8)
      r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
    return r;
  }
  function h(n) {
    return a(i(d(n), 8 * n.length));
  }
  function l(n, t) {
    var r,
      e,
      o = d(n),
      u = [],
      c = [];
    for (
      u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0;
      r < 16;
      r += 1
    )
      (u[r] = 909522486 ^ o[r]), (c[r] = 1549556828 ^ o[r]);
    return (e = i(u.concat(d(t)), 512 + 8 * t.length)), a(i(c.concat(e), 640));
  }
  function g(n) {
    var t,
      r,
      e = '';
    for (r = 0; r < n.length; r += 1)
      (t = n.charCodeAt(r)),
        (e +=
          '0123456789abcdef'.charAt((t >>> 4) & 15) +
          '0123456789abcdef'.charAt(15 & t));
    return e;
  }
  function v(n) {
    return unescape(encodeURIComponent(n));
  }
  function m(n) {
    return h(v(n));
  }
  function p(n) {
    return g(m(n));
  }
  function s(n, t) {
    return l(v(n), v(t));
  }
  function C(n, t) {
    return g(s(n, t));
  }
  function A(n, t, r) {
    return t ? (r ? s(t, n) : C(t, n)) : r ? m(n) : p(n);
  }
  $.md5 = A;
})(this);
let shareCodes = [];
let exchangeFlag = $.getdata('jdJxdExchange') || !!1;
if ($.isNode()) {
  Object.keys(jdCookieNode).forEach((item) => {
    cookiesArr.push(jdCookieNode[item]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false')
    console.log = () => {};
} else {
  cookiesArr = [
    $.getdata('CookieJD'),
    $.getdata('CookieJD2'),
    ...jsonParse($.getdata('CookiesJD') || '[]').map((item) => item.cookie)
  ].filter((item) => !!item);
}
const JD_API_HOST = 'https://jxd.m.jd.com/';
!(async () => {
  if (!cookiesArr[0]) {
    $.msg(
      $.name,
      '【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取',
      'https://bean.m.jd.com/bean/signIndex.action',
      { 'open-url': 'https://bean.m.jd.com/bean/signIndex.action' }
    );
    return;
  }
  $.actList = [];
  await requireConfig();

  if (exchangeFlag) {
    console.log(`脚本自动把抽奖卷兑换为兑币`);
  } else {
    console.log(`脚本不会将抽奖卷兑换为兑币`);
  }
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(
        cookie.match(/pt_pin=([^; ]+)(?=;?)/) &&
          cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]
      );
      $.index = i + 1;
      $.isLogin = true;
      $.nickName = '';
      message = '';
      await TotalBean();
      console.log(
        `\n******开始【京东账号${$.index}】${
          $.nickName || $.UserName
        }*********\n`
      );
      if (!$.isLogin) {
        $.msg(
          $.name,
          `【提示】cookie已失效`,
          `京东账号${$.index} ${
            $.nickName || $.UserName
          }\n请重新登录获取\nhttps://bean.m.jd.com/bean/signIndex.action`,
          { 'open-url': 'https://bean.m.jd.com/bean/signIndex.action' }
        );

        if ($.isNode()) {
          await notify.sendNotify(
            `${$.name}cookie已失效 - ${$.UserName}`,
            `京东账号${$.index} ${$.UserName}\n请重新登录获取cookie`
          );
        }
        continue;
      }
      await jxd();
      await showMsg();
      await $.wait(1000);
    }
  }
  if (allMessage) {
    if ($.isNode()) await notify.sendNotify($.name, allMessage);
    $.msg($.name, '', allMessage);
  }
  let pinList = [];
  cookiesArr.map((vo) => {
    pinList.push(
      vo.match(/pt_pin=([^; ]+)(?=;?)/) && vo.match(/pt_pin=([^; ]+)(?=;?)/)[1]
    );
  });
  pinList = [...new Set([...pinList, ...shareCodes])];
  for (let i = 0; i < cookiesArr.length; i++) {
    if (cookiesArr[i]) {
      cookie = cookiesArr[i];
      $.UserName = decodeURIComponent(
        cookie.match(/pt_pin=([^; ]+)(?=;?)/) &&
          cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]
      );
      $.index = i + 1;
      console.log(`\n******开始【京东账号${$.index}】的循环互助*********\n`);
      for (let vo of $.actList) {
        console.log(`\n开始助力活动id：【${vo}】`);
        for (let pin of pinList) {
          if (!cookie.match(/pt_key=([^; ]+)(?=;?)/))
            console.log(
              `\n提示:你的cookie填写不规范,正确格式为: pt_key=xxx;pt_pin=xxx; 后面分号;不可少\n`
            );
          let ptPin = cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1];
          if (pin !== ptPin) {
            // 跳过本人
            await helpFriend(vo, pin);
            await $.wait(1000);
          }
        }
        await $.wait(5000);
      }
    }
  }
})()
  .catch((e) => {
    $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '');
  })
  .finally(() => {
    $.done();
  });

async function jxd() {
  $.db = 0;
  await sign();
  if ($.index === 1) {
    $.actList = [];
  }
  await getUserInfo();
  await getMyLotteryInformation();
  await $.wait(1000);
  await getWelfareInfo();
  await $.wait(1000);
  await getMainTask();
  await $.wait(1000);
  await getMyWinningInformation();
}

function showMsg() {
  return new Promise((resolve) => {
    message += `本次运行获得 ${$.db} 兑币`;
    if (!jdNotify) {
      $.msg($.name, '', `${message}`);
    } else {
      $.log(`京东账号${$.index}${$.nickName}\n${message}`);
    }
    resolve();
  });
}

function getMainTask() {
  return new Promise((resolve) => {
    $.get(taskUrl('jxdTaskRule'), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.returnCode === 200 && data.data) {
              const { signIn, taskList } = data.data;
              if (!signIn) await sign();
              for (let vo of taskList) {
                if (vo['status'] === 1) {
                  if (vo['taskType'] !== 8) {
                    console.log(`去领奖`);
                    await awardTask(vo['taskId']);
                  } else {
                    let hour = new Date().getHours();
                    let timeArr = vo.getDbTitle
                      .split('~')
                      .map((vo) => Number(vo));
                    if (timeArr && timeArr.length > 1) {
                      if (timeArr[0] <= hour && hour <= timeArr[1]) {
                        console.log(`去完成${vo.getDbTitle}签到任务`);
                        await awardTask(vo['taskId']);
                      } else {
                        console.log(
                          `当前运行时间：${hour}点，不满足${vo.getDbTitle}点签到任务条件`
                        );
                      }
                    } else {
                      console.log(`获取签到任务条件失败`);
                    }
                  }
                  await $.wait(2000);
                } else if (vo['taskId'] === 3 && vo['status'] === 0) {
                  await awardRun();
                  await $.wait(2000);
                } else if (vo['taskId'] === 501 && vo['status'] === 0) {
                  await accomplishTask();
                  await $.wait(1000);
                  await awardTask();
                  await $.wait(2000);
                } else if (vo.taskId === 4) {
                  console.log(`剩余抽奖券：${vo.codeCount}`);
                  if (exchangeFlag && vo.codeCount) {
                    console.log(`去兑换兑币`);
                    await exchange(vo.codeCount);
                    await $.wait(2000);
                  }
                } else if ([9].includes(vo['taskType']) && vo['status'] === 0) {
                  // 逛15秒
                  await accomplishTask(vo['taskId']);
                  await awardTask(vo['taskId']);
                  await $.wait(2000);
                } else if (
                  [10, 11, 12].includes(vo['taskType']) &&
                  vo['status'] === 0
                ) {
                  // 加购物车，收藏商品，关注店铺
                  for (
                    let i = vo.quantityCompleted;
                    i < vo.quantityToBeCompleted;
                    ++i
                  ) {
                    console.log(
                      `去完成第【${i + 1}/${
                        vo.quantityToBeCompleted
                      }】关注/收藏任务`
                    );
                    await accomplishTask(vo['taskId']);
                    await $.wait(5 * 1000);
                  }
                  await awardTask(vo['taskId']);
                  await $.wait(2000);
                }
              }
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    });
  });
}
function getMyLotteryInformation() {
  return new Promise((resolve) => {
    $.post(
      taskPostUrl('getMyLotteryInformation', 'page=1&size=20'),
      async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} API请求失败，请检查网路重试`);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              if (data.returnCode === 200 && data.data) {
                let list = data.data.filter((vo) => vo.activityStatus === 2);
                for (let vo of list) {
                  console.log(`去查看【${vo.prizeName}】的中奖情况`);
                  await getLotteryDetailsByActivityId(vo.activityId);
                  await $.wait(1000);
                }
              }
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      }
    );
  });
}
function getLotteryDetailsByActivityId(activityId) {
  return new Promise((resolve) => {
    $.post(
      taskPostUrl('getLotteryDetailsByActivityId', `activityId=${activityId}`),
      async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} API请求失败，请检查网路重试`);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              if (data.returnCode === 200 && data.data) {
                if (data.data.rewardsDuiBi) {
                  if (!data.data.obtainDuiBi) {
                    console.log(`未中奖，去领取安慰兑币`);
                    await receiveOtherAwards(activityId);
                  } else {
                    console.log(`安慰兑币已领过`);
                  }
                } else {
                  console.log(`中奖了！！京豆已自动发放`);
                }
              }
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      }
    );
  });
}

function receiveOtherAwards(activityId) {
  return new Promise((resolve) => {
    $.post(
      taskPostUrl('receiveOtherAwards', `activityId=${activityId}&type=2`),
      async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} API请求失败，请检查网路重试`);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              console.log(data.returnMsg);
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      }
    );
  });
}
function exchange(codeCount = 0) {
  return new Promise((resolve) => {
    $.post(
      taskPostUrl('lotteryCodeConversion', `taskId=4&codeCount=${codeCount}`),
      async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} API请求失败，请检查网路重试`);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              if (data.returnCode === 200) {
                $.db += data.data.taskDB;
                console.log(`兑换成功，获得 ${data.data.taskDB} 兑币`);
              } else {
                console.log(`兑换失败，${data.returnMsg}`);
              }
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      }
    );
  });
}

function helpFriend(activityId, inviteUserPin = 'wddpzLSxORvLGo') {
  return new Promise((resolve) => {
    $.post(
      taskPostUrl(
        'helpFriend',
        `activityId=${activityId}&inviteUserPin=${inviteUserPin}`
      ),
      async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} API请求失败，请检查网路重试`);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              console.log(data.returnMsg);
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      }
    );
  });
}

function getWelfareInfo() {
  return new Promise((resolve) => {
    $.get(taskUrl('getWelfareInfo'), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.returnCode === 200 && data.data && data.data.tjWelfare) {
              for (let vo of [...data.data.tjWelfare, ...data.data.fxWelfare]) {
                if (vo.activityStatus) {
                  if ($.index === 1) $.actList.push(vo.activityId);
                  if (vo.participationStatus) {
                    console.log(`【${vo.prizeName}】已参与，去检查任务列表`);
                    await $.wait(1000);
                    await getTaskList(vo.activityId);
                  } else {
                    console.log(`【${vo.prizeName}】未参与，去参与`);
                    await sendLottery(vo.activityId, 1);
                  }
                  await $.wait(1000);
                }
              }
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    });
  });
}

function sendLottery(activityId, type) {
  return new Promise((resolve) => {
    $.post(
      taskPostUrl('sendLottery', `activityId=${activityId}&type=${type}`),
      async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} API请求失败，请检查网路重试`);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              console.log(data.returnMsg);
              if (data.returnCode === 200) {
                await $.wait(1000);
                await getTaskList(activityId);
              }
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      }
    );
  });
}

function getTaskList(activityId) {
  return new Promise((resolve) => {
    $.post(
      taskPostUrl('getTaskList', `activityId=${activityId}`),
      async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} API请求失败，请检查网路重试`);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              if (data.returnCode === 200) {
                for (let vo of data.data) {
                  if (vo.taskType === 5 && !vo.buttonAccomplishStatus) {
                    console.log(`观看视频广告任务未完成，去完成`);
                    await $.wait(1000);
                    await fulfilTask(activityId, vo.taskType);
                  }
                }
              }
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      }
    );
  });
}

function fulfilTask(activityId, taskType) {
  return new Promise((resolve) => {
    $.post(
      taskPostUrl(
        'fulfilTask',
        `activityId=${activityId}&taskType=${taskType}`
      ),
      async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} API请求失败，请检查网路重试`);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              console.log(data.returnMsg);
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      }
    );
  });
}

function getUserInfo() {
  return new Promise((resolve) => {
    $.get(taskUrl('getIntegralRanking'), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data.returnCode === 200) {
              console.log(`当前兑币：${data.data.dbAmount.replace(/,/g, '')}`);
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve(data);
      }
    });
  });
}

function sign(id = 'wddpzLSxORvLGo') {
  id = shareCodes[Math.floor(Math.random() * shareCodes.length)];
  return new Promise((resolve) => {
    $.post(
      taskPostUrl('jxdSignIn', `inviterUserPin=${id}`),
      async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} API请求失败，请检查网路重试`);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              if (data.returnCode === 200) {
                $.db += data.data.acquireDB;
                console.log(`签到成功，获得 ${data.data.acquireDB} 兑币`);
              } else {
                console.log(`签到失败，${data.returnMsg}`);
              }
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      }
    );
  });
}

// 步数任务
function awardRun() {
  return new Promise((resolve) => {
    $.post(
      taskPostUrl(
        'jxdGetTaskAward',
        `taskId=3&walk=${Math.floor(Math.random() * 5000) + 19000}`
      ),
      async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} API请求失败，请检查网路重试`);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              if (data.returnCode === 200) {
                $.db += data.data.taskDB;
                console.log(`任务领奖成功，获得 ${data.data.taskDB} 兑币`);
              } else {
                console.log(`任务领奖失败，${data.returnMsg}`);
              }
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      }
    );
  });
}

function accomplishTask(taskId = 501) {
  return new Promise((resolve) => {
    $.post(
      taskPostUrl('jxdTaskAccomplish', `taskId=${taskId}`),
      async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} API请求失败，请检查网路重试`);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              if (data.returnCode === 200) {
                console.log(`任务完成成功`);
              } else {
                console.log(`任务完成失败，${data.returnMsg}`);
              }
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      }
    );
  });
}

function awardTask(taskId = 501) {
  return new Promise((resolve) => {
    $.post(
      taskPostUrl('jxdGetTaskAward', `taskId=${taskId}`),
      async (err, resp, data) => {
        try {
          if (err) {
            console.log(`${JSON.stringify(err)}`);
            console.log(`${$.name} API请求失败，请检查网路重试`);
          } else {
            if (safeGet(data)) {
              data = JSON.parse(data);
              if (data.returnCode === 200) {
                $.db += data.data.taskDB;
                console.log(`任务领奖成功，获得 ${data.data.taskDB} 兑币`);
              } else {
                console.log(`任务领奖失败，${data.returnMsg}`);
              }
            }
          }
        } catch (e) {
          $.logErr(e, resp);
        } finally {
          resolve(data);
        }
      }
    );
  });
}

function getMyWinningInformation() {
  $.MyWinningInformation = [];
  return new Promise((resolve) => {
    $.get(taskUrl('getMyWinningInformation'), async (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          if (safeGet(data)) {
            data = JSON.parse(data);
            if (data['returnCode'] === 200) {
              //全部中奖记录
              $.MyWinningInformation = data['data'];
              for (let vo of $.MyWinningInformation) {
                $.log(`${vo['lotteryTime']}已中奖 【${vo['prizeName']}】`);
              }
              //昨天和今天已中奖记录
              $.MyWinningInformation = $.MyWinningInformation.filter(
                (item) =>
                  !!item &&
                  (item['lotteryTime'].substr(0, 6) === timeFormat() ||
                    item['lotteryTime'].substr(0, 6) ===
                      timeFormat(Date.now() - 24 * 60 * 60 * 1000))
              );
              //昨天和今天已中非京豆的奖励(京东E卡等等非京豆奖品)
              $.MyWinningInformation = $.MyWinningInformation.filter(
                (item) => !!item && !item['prizeName'].includes('京豆')
              );
              // console.log($.MyWinningInformation)
              if ($.MyWinningInformation && $.MyWinningInformation.length) {
                for (let item of $.MyWinningInformation) {
                  message += `${item['lotteryTime']}已中奖 【${item['prizeName']}】\n`;
                }
                allMessage += `京东账号${$.index}${$.nickName}\n${message}${
                  $.index !== cookiesArr.length ? '\n\n' : ''
                }`;
              }
            }
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}
function timeFormat(time) {
  let date;
  if (time) {
    date = new Date(time);
  } else {
    date = new Date();
  }
  return (
    (date.getMonth() + 1 >= 10
      ? date.getMonth() + 1
      : '0' + (date.getMonth() + 1)) +
    '月' +
    (date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()) +
    '日'
  );
}
function taskPostUrl(function_id, body) {
  if (!cookie.match(/pt_key=([^; ]+)(?=;?)/))
    console.log(
      `\n提示:你的cookie填写不规范,正确格式为: pt_key=xxx;pt_pin=xxx; 后面分号;不可少\n`
    );
  let ptKey = cookie.match(/pt_key=([^; ]+)(?=;?)/)[1];
  let _t = (+new Date()).toString();
  let sig = $.md5(
    ptKey +
      'fnjah@#$$@khfh123231O0O0O%%324093240329443lkjbkjaf' +
      function_id +
      _t
  );
  return {
    url: `${JD_API_HOST}${function_id}`,
    body: body,
    headers: {
      Host: 'jxd.m.jd.com',
      'pt-key': ptKey,
      Accept: '*/*',
      time: _t.toString(),
      source: '1',
      Referer:
        'https://servicewechat.com/wx00b03a0e8ad4e15e/31/page-frame.html',
      'Content-Type': 'application/x-www-form-urlencoded',
      sig: sig,
      'User-Agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.1(0x1800012a) NetType/WIFI Language/zh_CN'
    }
  };
}

function taskUrl(function_id) {
  if (!cookie.match(/pt_key=([^; ]+)(?=;?)/))
    console.log(
      `\n提示:你的cookie填写不规范,正确格式为: pt_key=xxx;pt_pin=xxx; 后面分号;不可少\n`
    );
  let ptKey = cookie.match(/pt_key=([^; ]+)(?=;?)/)[1];
  let _t = (+new Date()).toString();
  let sig = $.md5(
    ptKey +
      'fnjah@#$$@khfh123231O0O0O%%324093240329443lkjbkjaf' +
      function_id +
      _t
  );
  return {
    url: `${JD_API_HOST}${function_id}`,
    headers: {
      Host: 'jxd.m.jd.com',
      'pt-key': ptKey,
      Accept: '*/*',
      time: _t.toString(),
      source: '1',
      Referer:
        'https://servicewechat.com/wx00b03a0e8ad4e15e/31/page-frame.html',
      'Content-Type': 'application/json; charset=utf-8',
      sig: sig,
      'User-Agent':
        'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.1(0x1800012a) NetType/WIFI Language/zh_CN'
    }
  };
}

function TotalBean() {
  return new Promise(async (resolve) => {
    const options = {
      url: `https://wq.jd.com/user/info/QueryJDUserInfo?sceneval=2`,
      headers: {
        Accept: 'application/json,text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-cn',
        Connection: 'keep-alive',
        Cookie: cookie,
        Referer: 'https://wqs.jd.com/my/jingdou/my.shtml?sceneval=2',
        'User-Agent': $.isNode()
          ? process.env.JD_USER_AGENT
            ? process.env.JD_USER_AGENT
            : require('./USER_AGENTS').USER_AGENT
          : $.getdata('JDUA')
          ? $.getdata('JDUA')
          : 'jdapp;iPhone;9.4.4;14.3;network/4g;Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1'
      }
    };
    $.post(options, (err, resp, data) => {
      try {
        if (err) {
          console.log(`${JSON.stringify(err)}`);
          console.log(`${$.name} API请求失败，请检查网路重试`);
        } else {
          if (data) {
            data = JSON.parse(data);
            if (data['retcode'] === 13) {
              $.isLogin = false; //cookie过期
              return;
            }
            if (data['retcode'] === 0) {
              $.nickName = data['base'].nickname;
            } else {
              $.nickName = $.UserName;
            }
          } else {
            console.log(`京东服务器返回空数据`);
          }
        }
      } catch (e) {
        $.logErr(e, resp);
      } finally {
        resolve();
      }
    });
  });
}

function safeGet(data) {
  try {
    if (typeof JSON.parse(data) == 'object') {
      return true;
    }
  } catch (e) {
    console.log(e);
    console.log(`京东服务器访问数据为空，请检查自身设备网络情况`);
    return false;
  }
}

function jsonParse(str) {
  if (typeof str == 'string') {
    try {
      return JSON.parse(str);
    } catch (e) {
      console.log(e);
      $.msg(
        $.name,
        '',
        '请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie'
      );
      return [];
    }
  }
}

function requireConfig() {
  return new Promise((resolve) => {
    if ($.isNode() && process.env.JD_JXD_EXCHANGE) {
      exchangeFlag = process.env.JD_JXD_EXCHANGE || exchangeFlag;
    }
    resolve();
  });
}

// prettier-ignore
!function(n){"use strict";function t(n,t){var r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function r(n,t){return n<<t|n>>>32-t}function e(n,e,o,u,c,f){return t(r(t(t(e,n),t(u,f)),c),o)}function o(n,t,r,o,u,c,f){return e(t&r|~t&o,n,t,u,c,f)}function u(n,t,r,o,u,c,f){return e(t&o|r&~o,n,t,u,c,f)}function c(n,t,r,o,u,c,f){return e(t^r^o,n,t,u,c,f)}function f(n,t,r,o,u,c,f){return e(r^(t|~o),n,t,u,c,f)}function i(n,r){n[r>>5]|=128<<r%32,n[14+(r+64>>>9<<4)]=r;var e,i,a,d,h,l=1732584193,g=-271733879,v=-1732584194,m=271733878;for(e=0;e<n.length;e+=16)i=l,a=g,d=v,h=m,g=f(g=f(g=f(g=f(g=c(g=c(g=c(g=c(g=u(g=u(g=u(g=u(g=o(g=o(g=o(g=o(g,v=o(v,m=o(m,l=o(l,g,v,m,n[e],7,-680876936),g,v,n[e+1],12,-389564586),l,g,n[e+2],17,606105819),m,l,n[e+3],22,-1044525330),v=o(v,m=o(m,l=o(l,g,v,m,n[e+4],7,-176418897),g,v,n[e+5],12,1200080426),l,g,n[e+6],17,-1473231341),m,l,n[e+7],22,-45705983),v=o(v,m=o(m,l=o(l,g,v,m,n[e+8],7,1770035416),g,v,n[e+9],12,-1958414417),l,g,n[e+10],17,-42063),m,l,n[e+11],22,-1990404162),v=o(v,m=o(m,l=o(l,g,v,m,n[e+12],7,1804603682),g,v,n[e+13],12,-40341101),l,g,n[e+14],17,-1502002290),m,l,n[e+15],22,1236535329),v=u(v,m=u(m,l=u(l,g,v,m,n[e+1],5,-165796510),g,v,n[e+6],9,-1069501632),l,g,n[e+11],14,643717713),m,l,n[e],20,-373897302),v=u(v,m=u(m,l=u(l,g,v,m,n[e+5],5,-701558691),g,v,n[e+10],9,38016083),l,g,n[e+15],14,-660478335),m,l,n[e+4],20,-405537848),v=u(v,m=u(m,l=u(l,g,v,m,n[e+9],5,568446438),g,v,n[e+14],9,-1019803690),l,g,n[e+3],14,-187363961),m,l,n[e+8],20,1163531501),v=u(v,m=u(m,l=u(l,g,v,m,n[e+13],5,-1444681467),g,v,n[e+2],9,-51403784),l,g,n[e+7],14,1735328473),m,l,n[e+12],20,-1926607734),v=c(v,m=c(m,l=c(l,g,v,m,n[e+5],4,-378558),g,v,n[e+8],11,-2022574463),l,g,n[e+11],16,1839030562),m,l,n[e+14],23,-35309556),v=c(v,m=c(m,l=c(l,g,v,m,n[e+1],4,-1530992060),g,v,n[e+4],11,1272893353),l,g,n[e+7],16,-155497632),m,l,n[e+10],23,-1094730640),v=c(v,m=c(m,l=c(l,g,v,m,n[e+13],4,681279174),g,v,n[e],11,-358537222),l,g,n[e+3],16,-722521979),m,l,n[e+6],23,76029189),v=c(v,m=c(m,l=c(l,g,v,m,n[e+9],4,-640364487),g,v,n[e+12],11,-421815835),l,g,n[e+15],16,530742520),m,l,n[e+2],23,-995338651),v=f(v,m=f(m,l=f(l,g,v,m,n[e],6,-198630844),g,v,n[e+7],10,1126891415),l,g,n[e+14],15,-1416354905),m,l,n[e+5],21,-57434055),v=f(v,m=f(m,l=f(l,g,v,m,n[e+12],6,1700485571),g,v,n[e+3],10,-1894986606),l,g,n[e+10],15,-1051523),m,l,n[e+1],21,-2054922799),v=f(v,m=f(m,l=f(l,g,v,m,n[e+8],6,1873313359),g,v,n[e+15],10,-30611744),l,g,n[e+6],15,-1560198380),m,l,n[e+13],21,1309151649),v=f(v,m=f(m,l=f(l,g,v,m,n[e+4],6,-145523070),g,v,n[e+11],10,-1120210379),l,g,n[e+2],15,718787259),m,l,n[e+9],21,-343485551),l=t(l,i),g=t(g,a),v=t(v,d),m=t(m,h);return[l,g,v,m]}function a(n){var t,r="",e=32*n.length;for(t=0;t<e;t+=8)r+=String.fromCharCode(n[t>>5]>>>t%32&255);return r}function d(n){var t,r=[];for(r[(n.length>>2)-1]=void 0,t=0;t<r.length;t+=1)r[t]=0;var e=8*n.length;for(t=0;t<e;t+=8)r[t>>5]|=(255&n.charCodeAt(t/8))<<t%32;return r}function h(n){return a(i(d(n),8*n.length))}function l(n,t){var r,e,o=d(n),u=[],c=[];for(u[15]=c[15]=void 0,o.length>16&&(o=i(o,8*n.length)),r=0;r<16;r+=1)u[r]=909522486^o[r],c[r]=1549556828^o[r];return e=i(u.concat(d(t)),512+8*t.length),a(i(c.concat(e),640))}function g(n){var t,r,e="";for(r=0;r<n.length;r+=1)t=n.charCodeAt(r),e+="0123456789abcdef".charAt(t>>>4&15)+"0123456789abcdef".charAt(15&t);return e}function v(n){return unescape(encodeURIComponent(n))}function m(n){return h(v(n))}function p(n){return g(m(n))}function s(n,t){return l(v(n),v(t))}function C(n,t){return g(s(n,t))}function A(n,t,r){return t?r?s(t,n):C(t,n):r?m(n):p(n)}$.md5=A}(this);
function Env(t, e) {
  'undefined' != typeof process &&
    JSON.stringify(process.env).indexOf('GITHUB') > -1 &&
    process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = 'GET') {
      t = 'string' == typeof t ? { url: t } : t;
      let s = this.get;
      return (
        'POST' === e && (s = this.post),
        new Promise((e, i) => {
          s.call(this, t, (t, s, r) => {
            t ? i(t) : e(s);
          });
        })
      );
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, 'POST');
    }
  }
  return new (class {
    constructor(t, e) {
      (this.name = t),
        (this.http = new s(this)),
        (this.data = null),
        (this.dataFile = 'box.dat'),
        (this.logs = []),
        (this.isMute = !1),
        (this.isNeedRewrite = !1),
        (this.logSeparator = '\n'),
        (this.startTime = new Date().getTime()),
        Object.assign(this, e),
        this.log('', `🔔${this.name}, 开始!`);
    }
    isNode() {
      return 'undefined' != typeof module && !!module.exports;
    }
    isQuanX() {
      return 'undefined' != typeof $task;
    }
    isSurge() {
      return 'undefined' != typeof $httpClient && 'undefined' == typeof $loon;
    }
    isLoon() {
      return 'undefined' != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i)
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise((e) => {
        this.get({ url: t }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise((s) => {
        let i = this.getdata('@chavy_boxjs_userCfgs.httpapi');
        i = i ? i.replace(/\n/g, '').trim() : i;
        let r = this.getdata('@chavy_boxjs_userCfgs.httpapi_timeout');
        (r = r ? 1 * r : 20), (r = e && e.timeout ? e.timeout : r);
        const [o, h] = i.split('@'),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: { script_text: t, mock_type: 'cron', timeout: r },
            headers: { 'X-Key': o, Accept: '*/*' }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch((t) => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) return {};
      {
        (this.fs = this.fs ? this.fs : require('fs')),
          (this.path = this.path ? this.path : require('path'));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) return {};
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        (this.fs = this.fs ? this.fs : require('fs')),
          (this.path = this.path ? this.path : require('path'));
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s
          ? this.fs.writeFileSync(t, r)
          : i
          ? this.fs.writeFileSync(e, r)
          : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, '.$1').split('.');
      let r = t;
      for (const t of i) if (((r = Object(r)[t]), void 0 === r)) return s;
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t
        ? t
        : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []),
          (e
            .slice(0, -1)
            .reduce(
              (t, s, i) =>
                Object(t[s]) === t[s]
                  ? t[s]
                  : (t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}),
              t
            )[e[e.length - 1]] = s),
          t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : '';
        if (r)
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, '') : e;
          } catch (t) {
            e = '';
          }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? ('null' === o ? null : o || '{}') : '{}';
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), (s = this.setval(JSON.stringify(e), i));
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), (s = this.setval(JSON.stringify(o), i));
        }
      } else s = this.setval(t, e);
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.read(t)
        : this.isQuanX()
        ? $prefs.valueForKey(t)
        : this.isNode()
        ? ((this.data = this.loaddata()), this.data[t])
        : (this.data && this.data[t]) || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon()
        ? $persistentStore.write(t, e)
        : this.isQuanX()
        ? $prefs.setValueForKey(t, e)
        : this.isNode()
        ? ((this.data = this.loaddata()),
          (this.data[e] = t),
          this.writedata(),
          !0)
        : (this.data && this.data[e]) || null;
    }
    initGotEnv(t) {
      (this.got = this.got ? this.got : require('got')),
        (this.cktough = this.cktough ? this.cktough : require('tough-cookie')),
        (this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar()),
        t &&
          ((t.headers = t.headers ? t.headers : {}),
          void 0 === t.headers.Cookie &&
            void 0 === t.cookieJar &&
            (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers &&
        (delete t.headers['Content-Type'], delete t.headers['Content-Length']),
        this.isSurge() || this.isLoon()
          ? (this.isSurge() &&
              this.isNeedRewrite &&
              ((t.headers = t.headers || {}),
              Object.assign(t.headers, { 'X-Surge-Skip-Scripting': !1 })),
            $httpClient.get(t, (t, s, i) => {
              !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
            }))
          : this.isQuanX()
          ? (this.isNeedRewrite &&
              ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
            $task.fetch(t).then(
              (t) => {
                const { statusCode: s, statusCode: i, headers: r, body: o } = t;
                e(null, { status: s, statusCode: i, headers: r, body: o }, o);
              },
              (t) => e(t)
            ))
          : this.isNode() &&
            (this.initGotEnv(t),
            this.got(t)
              .on('redirect', (t, e) => {
                try {
                  if (t.headers['set-cookie']) {
                    const s = t.headers['set-cookie']
                      .map(this.cktough.Cookie.parse)
                      .toString();
                    s && this.ckjar.setCookieSync(s, null),
                      (e.cookieJar = this.ckjar);
                  }
                } catch (t) {
                  this.logErr(t);
                }
              })
              .then(
                (t) => {
                  const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                  } = t;
                  e(null, { status: s, statusCode: i, headers: r, body: o }, o);
                },
                (t) => {
                  const { message: s, response: i } = t;
                  e(s, i, i && i.body);
                }
              ));
    }
    post(t, e = () => {}) {
      if (
        (t.body &&
          t.headers &&
          !t.headers['Content-Type'] &&
          (t.headers['Content-Type'] = 'application/x-www-form-urlencoded'),
        t.headers && delete t.headers['Content-Length'],
        this.isSurge() || this.isLoon())
      )
        this.isSurge() &&
          this.isNeedRewrite &&
          ((t.headers = t.headers || {}),
          Object.assign(t.headers, { 'X-Surge-Skip-Scripting': !1 })),
          $httpClient.post(t, (t, s, i) => {
            !t && s && ((s.body = i), (s.statusCode = s.status)), e(t, s, i);
          });
      else if (this.isQuanX())
        (t.method = 'POST'),
          this.isNeedRewrite &&
            ((t.opts = t.opts || {}), Object.assign(t.opts, { hints: !1 })),
          $task.fetch(t).then(
            (t) => {
              const { statusCode: s, statusCode: i, headers: r, body: o } = t;
              e(null, { status: s, statusCode: i, headers: r, body: o }, o);
            },
            (t) => e(t)
          );
      else if (this.isNode()) {
        this.initGotEnv(t);
        const { url: s, ...i } = t;
        this.got.post(s, i).then(
          (t) => {
            const { statusCode: s, statusCode: i, headers: r, body: o } = t;
            e(null, { status: s, statusCode: i, headers: r, body: o }, o);
          },
          (t) => {
            const { message: s, response: i } = t;
            e(s, i, i && i.body);
          }
        );
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        'M+': s.getMonth() + 1,
        'd+': s.getDate(),
        'H+': s.getHours(),
        'm+': s.getMinutes(),
        's+': s.getSeconds(),
        'q+': Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) &&
        (t = t.replace(
          RegExp.$1,
          (s.getFullYear() + '').substr(4 - RegExp.$1.length)
        ));
      for (let e in i)
        new RegExp('(' + e + ')').test(t) &&
          (t = t.replace(
            RegExp.$1,
            1 == RegExp.$1.length
              ? i[e]
              : ('00' + i[e]).substr(('' + i[e]).length)
          ));
      return t;
    }
    msg(e = t, s = '', i = '', r) {
      const o = (t) => {
        if (!t) return t;
        if ('string' == typeof t)
          return this.isLoon()
            ? t
            : this.isQuanX()
            ? { 'open-url': t }
            : this.isSurge()
            ? { url: t }
            : void 0;
        if ('object' == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t['open-url'],
              s = t.mediaUrl || t['media-url'];
            return { openUrl: e, mediaUrl: s };
          }
          if (this.isQuanX()) {
            let e = t['open-url'] || t.url || t.openUrl,
              s = t['media-url'] || t.mediaUrl;
            return { 'open-url': e, 'media-url': s };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t['open-url'];
            return { url: e };
          }
        }
      };
      if (
        (this.isMute ||
          (this.isSurge() || this.isLoon()
            ? $notification.post(e, s, i, o(r))
            : this.isQuanX() && $notify(e, s, i, o(r))),
        !this.isMuteLog)
      ) {
        let t = ['', '==============📣系统通知📣=============='];
        t.push(e),
          s && t.push(s),
          i && t.push(i),
          console.log(t.join('\n')),
          (this.logs = this.logs.concat(t));
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]),
        console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s
        ? this.log('', `❗️${this.name}, 错误!`, t.stack)
        : this.log('', `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise((e) => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1e3;
      this.log('', `🔔${this.name}, 结束! 🕛 ${s} 秒`),
        this.log(),
        (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  })(t, e);
}

# 每3天的23:50分清理一次日志(互助码不清理，proc_file.sh对该文件进行了去重)
50 23 */3 * * find /scripts/logs -name '*.log' | grep -v 'sharecodeCollection' | xargs rm -rf
# 收集助力码
30 * * * * sh /scripts/docker/auto_help.sh collect >> /scripts/logs/auto_help_collect.log 2>&1
# 财富岛珍珠兑换
0 0-23/1 * * * node /scripts/jd_cfd_pearl_ex.js >> /scripts/logs/jd_cfd_pearl_ex.log 2>&1

##############短期活动##############
# 女装盲盒
35 1,22 * * * node /scripts/jd_nzmh.js >> /scripts/logs/jd_nzmh.log 2>&1
# 京东极速版红包(活动时间：2021-6-1至2021-6-30)
45 0,8,23 * * * node /scripts/jd_speed_redpocke.js >> /scripts/logs/jd_speed_redpocke.log 2>&1
# 金榜创造营 活动时间：2021-05-21至2021-12-31
0 1,22 * * * node /scripts/jd_gold_creator.js >> /scripts/logs/jd_gold_creator.log 2>&1
# 酷跑零食街
18 7,12,20 * * * node /scripts/jd_foodRunning.js >> /scripts/logs/jd_foodRunning.log 2>&1
# 京喜领88元红包
4 3,13,21 * * * node /scripts/jd_jxlhb.js >> /scripts/logs/jd_jxlhb.log 2>&1
# 众筹许愿池
20 0,2,19 * * * node /scripts/jd_wish.js >> /scripts/logs/jd_wish.log 2>&1
# 内容鉴赏官
15 2,5,20 * * * node /scripts/jd_connoisseur.js >> /scripts/logs/jd_connoisseur.log 2>&1
# 东东世界
25 0,10,21 * * * node /scripts/jd_ddworld.js >> /scripts/logs/jd_ddworld.log 2>&1
# 东东世界兑换
0 0 * * * node /scripts/jd_ddworld_exchange.js >> /scripts/logs/jd_ddworld_exchange.log 2>&1
# 京东小魔方
10 2,8,20 * * * node /scripts/jd_mf.js >> /scripts/logs/jd_mf.log 2>&1


##############长期活动##############
# 签到
7 0,17 * * * cd /scripts && node jd_bean_sign.js >> /scripts/logs/jd_bean_sign.log 2>&1
# 京喜签到
5 1,11,20 * * * node /scripts/jx_sign.js >> /scripts/logs/jx_sign.log 2>&1
# 东东超市兑换奖品
#59 23 * * * node /scripts/jd_blueCoin.js >> /scripts/logs/jd_blueCoin.log 2>&1
# 摇京豆
6 0,14,23 * * * node /scripts/jd_club_lottery.js >> /scripts/logs/jd_club_lottery.log 2>&1
# 东东农场
15 6-18/6 * * * node /scripts/jd_fruit.js >> /scripts/logs/jd_fruit.log 2>&1
# 宠汪汪
#5 */2,9,23 * * * node /scripts/jd_joy.js >> /scripts/logs/jd_joy.log 2>&1
# 宠汪汪喂食
#35 */1 * * * node /scripts/jd_joy_feedPets.js >> /scripts/logs/jd_joy_feedPets.log 2>&1
# 宠汪汪偷好友积分与喂食
#30 0-21/3 * * * node /scripts/jd_joy_steal.js >> /scripts/logs/jd_joy_steal.log 2>&1
# 宠汪汪邀请助力
#10 9-20/1 * * * node /scripts/jd_joy_run.js >> /scripts/logs/jd_joy_run.log 2>&1
# 摇钱树
23 */2 * * * node /scripts/jd_moneyTree.js >> /scripts/logs/jd_moneyTree.log 2>&1
# 东东萌宠
35 6-18/6 * * * node /scripts/jd_pet.js >> /scripts/logs/jd_pet.log 2>&1
# 京东种豆得豆
10 7-22/1 * * * node /scripts/jd_plantBean.js >> /scripts/logs/jd_plantBean.log 2>&1
# 京东全民开红包
12 0-23/4 * * *  node /scripts/jd_redPacket.js >> /scripts/logs/jd_redPacket.log 2>&1
# 进店领豆
6 0 * * * node /scripts/jd_shop.js >> /scripts/logs/jd_shop.log 2>&1
# 东东超市
#31 0,1-23/2 * * * node /scripts/jd_superMarket.js >> /scripts/logs/jd_superMarket.log 2>&1
# 取关京东店铺商品
45 23 * * * node /scripts/jd_unsubscribe.js >> /scripts/logs/jd_unsubscribe.log 2>&1
# 京豆变动通知
20 10 * * * node /scripts/jd_bean_change.js >> /scripts/logs/jd_bean_change.log 2>&1
# 京东抽奖机
0 0,12,23 * * * node /scripts/jd_lotteryMachine.js >> /scripts/logs/jd_lotteryMachine.log 2>&1
# 天天提鹅
28 * * * * node /scripts/jd_daily_egg.js >> /scripts/logs/jd_daily_egg.log 2>&1
# 金融养猪
32 0-23/6 * * * node /scripts/jd_pigPet.js >> /scripts/logs/jd_pigPet.log 2>&1
# 京喜工厂
30 * * * * node /scripts/jd_dreamFactory.js >> /scripts/logs/jd_dreamFactory.log 2>&1
# 东东工厂
26 * * * * node /scripts/jd_jdfactory.js >> /scripts/logs/jd_jdfactory.log 2>&1
# 京东汽车(签到满500赛点可兑换500京豆)
59 23 * * * node /scripts/jd_car.js >> /scripts/logs/jd_car.log 2>&1
# 领京豆额外奖励(每日可获得3京豆)
23 1,12,22 * * * node /scripts/jd_bean_home.js >> /scripts/logs/jd_bean_home.log 2>&1
# 微信小程序京东赚赚
#6 0-5/1,11 * * * node /scripts/jd_jdzz.js >> /scripts/logs/jd_jdzz.log 2>&1
# 导到所有互助码
23 7 * * * node /scripts/jd_get_share_code.js >> /scripts/logs/jd_get_share_code.log 2>&1
# 签到领现金
10 */4 * * * node /scripts/jd_cash.js >> /scripts/logs/jd_cash.log 2>&1
# 闪购盲盒
47 8,,16,22 * * * node /scripts/jd_sgmh.js >> /scripts/logs/jd_sgmh.log 2>&1
# 京东秒秒币
10 6,21 * * * node /scripts/jd_ms.js >> /scripts/logs/jd_ms.log 2>&1
# 美丽研究院
41 7,12,19 * * * node /scripts/jd_beauty.js >> /scripts/logs/jd_beauty.log 2>&1
# 京东保价
41 23 * * * node /scripts/jd_price.js >> /scripts/logs/jd_price.log 2>&1
# 京东极速版签到+赚现金任务
0 7,13,15,22 * * * node /scripts/jd_speed_sign.js >> /scripts/logs/jd_speed_sign.log 2>&1
# 京喜财富岛
1 0,6-23 * * * node /scripts/jd_cfd.js >> /scripts/logs/jd_cfd.log 2>&1
# 京喜财富岛合成月饼
5 * * * * node /scripts/jd_cfd_mooncake.js >> /scripts/logs/jd_cfd_mooncake.log 2>&1
# 京喜财富岛热气球
30 * * * * node /scripts/jd_cfd_loop.js >> /scripts/logs/jd_cfd_loop.log 2>&1
# 京东健康社区
20 2,7,16,22 * * * node /scripts/jd_health.js >> /scripts/logs/jd_health.log 2>&1
# 京东健康社区收集健康能量
5-45/20 * * * * node /scripts/jd_health_collect.js >> /scripts/logs/jd_health_collect.log 2>&1
# 幸运大转盘
10 10,23 * * * node /scripts/jd_market_lottery.js >> /scripts/logs/jd_market_lottery.log 2>&1
# 京喜牧场
23 0-23/2 * * * node /scripts/jd_jxmc.js >> /scripts/logs/jd_jxmc.log 2>&1
30 0-23/6 * * * node /scripts/jd_jxmc_help.js >> /scripts/logs/jd_jxmc_help.log 2>&1
# 京喜工厂开团
9 0-8/1 * * *  node /scripts/jd_star_dreamFactory_tuan.js >> /scripts/logs/jd_star_dreamFactory_tuan.log 2>&1
# 领券中心签到
11 0 * * * node /scripts/jd_ccSign.js >> /scripts/logs/jd_ccSign.log 2>&1

# 新增的
# 魔方兑换
38 14,20 * * * node /scripts/jd_mofang_exchange.js >> /scripts/logs/jd_mofang_exchange.log 2>&1
# 汪汪乐园
0 0,7,9,17,20 * * * node /scripts/jd_joy_park_task.js >> /scripts/logs/jd_joy_park_task.log 2>&1
# 汪汪乐园养joy
20 0-23/3 * * * node /scripts/jd_joy_park.js >> /scripts/logs/jd_joy_park.log 2>&1
# 5G超级盲盒
5 0,1-23/3 * * * node /scripts/jd_mohe.js >> /scripts/logs/jd_mohe.log 2>&1
# 天天拼图
20 5,16 * * * node /scripts/jd_ttpt.js >> /scripts/logs/jd_ttpt.log 2>&1
# 东东乐园领水滴
11 8 * * * node /scripts/jd_ddnc_farmpark.js >> /scripts/logs/jd_ddnc_farmpark.log 2>&1
# 积分换话费
13 5,17 * * * node /scripts/jd_dwapp.js >> /scripts/logs/jd_dwapp.log 2>&1
# 金贴小程序
45 0,12,14 * * * node /scripts/jd_jintie_wx.js >> /scripts/logs/jd_jintie_wx.log 2>&1
# 直播间抽奖(全局)
5 12 * * 6 node /scripts/jd_live_lottery_social.js >> /scripts/logs/jd_live_lottery_social.log 2>&1
# 宠汪汪积分兑换有就换版
#59 7,15,23 * * * node /scripts/jd_joy_reward.js >> /scripts/logs/jd_joy_reward.log 2>&1
# 京喜购物返红包助力
4 0-23/6 * * * node /scripts/jd_jx_cashback.js >> /scripts/logs/jd_jx_cashback.log 2>&1
# 跳跳乐
#1 0,11,21 * * * node /scripts/jd_jump.js >> /scripts/logs/jd_jump.log 2>&1
# 京东图形签到
14 2,10 * * * node /scripts/jd_sign_graphics.js >> /scripts/logs/jd_sign_graphics.log 2>&1
# 京喜大作战
39 1,14 * * * node /scripts/jd_jxdzz.js >> /scripts/logs/jd_jxdzz.log 2>&1
# 签到免单
18 8,12,20 * * * node /scripts/jd_speed_signfree.js >> /scripts/logs/jd_speed_signfree.log 2>&1
# 省钱大赢家之翻翻乐
20 * * * *  node /scripts/jd_big_winner.js >> /scripts/logs/jd_big_winner.log 2>&1
# 牛牛福利
1 0,19,23 * * * node /scripts/jd_nnfls.js >> /scripts/logs/jd_nnfls.log 2>&1
# 京东饭粒
40 0,9,17 * * * node /scripts/jd_fanli.js >> /scripts/logs/jd_fanli.log 2>&1
# 赚京豆(微信小程序)
0-59/20 1,2 * * * node /scripts/jd_syj.js >> /scripts/logs/jd_syj.log 2>&1
# 特务Z
23 8,20 * * * node /scripts/jd_superBrand.js >> /scripts/logs/jd_superBrand.log 2>&1
# 财富岛合成生鲜
45 * * * * node /scripts/jd_cfd_fresh.js >> /scripts/logs/jd_cfd_fresh.log 2>&1
# 财富岛合成生鲜兑换
#0 12 * * * node /scripts/jd_cfd_fresh_exchange.js >> /scripts/logs/jd_cfd_fresh_exchange.log 2>&1
# 京东答题
#22 6,18 * * * node /scripts/jd_jddt.js >> /scripts/logs/jd_jddt.log 2>&1
# 京东金榜
13 6 * * * node /scripts/jd_gold_sign.js >> /scripts/logs/jd_gold_sign.log 2>&1
# 签到翻牌
30 8 * * * node /scripts/jd_sign_graphics1.js >> /scripts/logs/jd_sign_graphics1.log 2>&1
# 美妆馆兑换
40 8,13,19 * * * node /scripts/jd_beauty_ex.js >> /scripts/logs/jd_beauty_ex.log 2>&1

# 直播红包雨
0,30 0-23/1 * * * node /scripts/jd_live_redrain_B.js >> /scripts/logs/jd_live_redrain_B.log 2>&1


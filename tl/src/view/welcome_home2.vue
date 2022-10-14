<template>
    <div class="box">
        <!-- 头部标题header -->
        <div class="header">通路老干部信息系统</div>
        <!-- 栏目column -->
        <div class="column">
            <div class="column-top"></div>
            <div class="column-bottom">
                <div class="column-bottom-scroll">·····</div>
                <div class="column-bottom-title"><img src="../assets/img/badge.png" class="badgeData"> 党建风采</div>
            </div>
        </div>
        <!-- 中间菜单栏menu -->
        <div id="menu-button">
            <div class="ceshi">
                <div class="button" v-for="(item,index) in buttonData" :key="index" @click="register">
                    <div class=""><img class="button-img" :src="item.img1"></div>
                    <div class="button-content" v-html="item.text"></div>
                </div>
            </div>
        </div>
        <!-- footer -->
        <div class="footer">
            <div class="footer-title1">活动安排</div>
            <div class="footer-logo">————— ★ —————</div>
            <div class="footer-title2">桐庐老干部局活动安排表</div>
            <table class="boxs">
                <tr>
                    <td class="table-left table-top">活动时间</td>
                    <td class="table-top">活动主题</td>
                </tr>
                <tr>
                    <td class="table-left">12月21日-上午9:00</td>
                    <td>扶贫解困、帮助困难地区和弱势群体为主要内容的“送温暖、献爱心”活动</td>
                </tr>
                <tr>
                    <td class="table-left">12月22日-下午3:00</td>
                    <td>“送温暖、献爱心”活动</td>
                </tr>
                <tr>
                    <td class="table-left"></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="table-left"></td>
                    <td></td>
                </tr>
                <tr>
                    <td class="table-left"> </td>
                    <td></td>
                </tr>
                <tr>
                    <td class="table-left"></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttonData: [
                {
                    img1: '../assets/img/img.png',
                    text: '活动公告'
                },
                {
                    img1: '../assets/img/img.png',
                    text: '通知公告'
                },
                {
                    img1: '../assets/img/img.png',
                    text: '活动风采'
                },
                {
                    img1: '../assets/img/img.png',
                    text: '签到打卡'
                },
                {
                    img1: '../assets/img/img.png',
                    text: '呼叫客服'
                }
            ],
            footerData: [
                {
                    img2: '../assets/img/img.png',
                    footertext: '2021年12月1日“XXXX”党员活动'
                },
                {
                    img2: '../assets/img/img.png',
                    footertext: '2021年12月1日“XXXX”党员活动'
                }
            ]
        }
    },
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

/* 整体页面布局 */
.box {
    width: 1080px;
    height: 1920px;
    background-image: url(../assets/img/background.jpg);
    font-family: 'PingFangSC-Semibold', PingFang SC;
    background-size: 100%;
}

.header {
    height: 121px;
    font-weight: 600;
    text-align: center;
    padding-top: 153px;
    font-size: 64px;
    color: #E00000;
    text-shadow: 0 2px 4px rgba(0, 0, 0, .5);

}

.column {
    margin: 0 auto;
    width: 850px;
}

.column-top {
    height: 344px;
    background-color: #fff;

}

.column-bottom {
    height: 95px;
    background-color: #F0E0E0;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    border-radius: 0 0 16px 16px;

}

.column-bottom-scroll {
    line-height: 95px;
    font-size: 60px;
    color: #fff;
    float: left;
    padding-left: 369px;

}

.column-bottom-title {
    float: right;
    font-size: 36px;
    line-height: 95px;
    padding-right: 28px;
    color: #E00000;
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0, 0, 0, .5);
}

.badgeData {
    width: 42px;
    height: 43px;
}

/*  中间菜单栏按钮button  */
.ceshi {
    margin: 0 0 0 128px;
}

.button {
    width: 131px;
    height: 134px;
    background: #FFFFFF;
    border-radius: 15px;
    border: 2px solid #AF3333;
    display: inline-block;
    text-align: center;
    margin: 77px 42px 91px 0;
}

.button-img {
    width: 72px;
    height: 72px;
    margin: 15px 30px 0 29px;
}

.button-content {
    font-size: 24px;
    font-family: 'PingFangSC-Medium', PingFang SC;
    font-weight: 500;
    color: #CC1E1E;
    line-height: 33px;
}

/* 尾部footer */
.footer {
    width: 850px;
    height: 826px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
    border-radius: 16px;
    margin: 0 auto;
}

.footer-title1 {
    font-weight: 600;
    font-size: 48px;
    color: #E13131;
    text-align: center;
    padding-top: 32px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, .5);
}

.footer-logo {
    font-weight: 600;
    font-size: 48px;
    color: #E13131;
    text-align: center;
}

.footer-title2 {
    border: 1px;
    border: 3px solid #DC6D6D;
    font-size: 35px;
    background: #FFB4B4;
    width: 591px;
    height: 78px;
    border-radius: 8px;
    text-align: center;
    line-height: 78px;
    color: #FFFFFF;
    margin: 0 auto;

}
.boxs {
    width: 588px;
}

table,
td {
    border: 3px solid #DC6D6D;
    width: 588px;
    height: 540px;
    font-weight: 600;
    font-family: 'PingFangSC-Semibold', 'PingFang SC';
    margin: 0 auto;
    border-collapse: collapse;
    color: #000000;
    font-weight: 600;
    font-size: 18px;
}

td {
    height: 66px;
    text-align: center;
}

.table-top {
    font-size: 25px;
}

.table-left {
    width: 201px;
}
</style>
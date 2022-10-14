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
      <div class="menu-button-box">
        <div class="button" v-for="(item,index) in buttonData" :key="index" @click="register">
          <div class=""><img class="button-img" :src="item.img1"></div>   <!-- img加载失败 -->
          <div class="button-content" v-html="item.text"></div>
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="footer">
      <div class="footer-title">活动风采</div>   <!-- 阴影 -->
      <div class="footer-logo">————— ★ —————</div>
      <div class="footer-button">
        <div class="" v-for="(items,indexs) in footerData" :key="indexs">
          <div class=""><img class="footer-img" src="items.img2"></div>    <!-- img加载失败 -->
          <div class="footer-content" v-html="items.text2"></div>
        </div>
      </div>
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
          text2: '2021年12月1日“XXXX”党员活动'
        },
        {
          img2: '../assets/img/img.png',
          text2: '2021年12月1日“XXXX”党员活动'
        }
      ]
    }
  },
  // 页面跳转
  // methods: {
  //     register:function(){
  //       this.$router.go('/')
  //     }
  // }
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
  height: 339px;
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
.menu-button-box {
  margin: 0 0 0 128px;
}

.button {
  width: 127px;
  height: 130px;
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
  font-weight: 500px;
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

.footer-title {
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

.footer-button {
  margin-top: 34px;
}

.footer-img {
  width: 500px;
  height: 281px;
  margin: 0 177px 0 173px;
}

.footer-content {
  text-align: center;
  padding: 13px 0;
  font-size: 22px;
  font-family: 'PingFangSC-Semibold', PingFang SC;
  font-weight: 600;
  color: #0C0C0C;
}
</style>
<template>
    <div class="box">
        <!-- 头部标题header -->
        <div class="header">桐庐老干部信息系统</div>
        <!-- 栏目column -->
        <div class="column">
            <div class="column-top"></div>
            <div class="column-bottom">
                <div class="column-bottom-scroll">·····</div>
                <div class="column-bottom-title"><img src="../assets/img/badge.png" class="badgeData"> 党建风采</div>
            </div>
        </div>
        <!-- 签到成功显示界面signin -->
        <div class="signin">
            <div class="content1">
                <span class="">欢迎 <span class="">张先生</span> 同志！</span>
                <div></div>
            </div>
        </div>
        <!-- footer -->
        <div class="footer">
            <div class="footer-title">通知公告</div>   <!-- 阴影 -->
            <div class="footer-logo">————— ★ —————</div>
            <div class="footer-button">
                <p>为统筹做好**年度市管领导班子和领导干部年度考核、选人用人“一报告两评议”、党员领导干部履行基层党建责任述职评议等工作，根据中央、省委和市委有关文件规定，现将有关事项通知如下：</p><br>
                <p>一、考核对象</p><br>    
                <p>领导班子考核对象为：县市区党委、人大、政府、政协，市直正处以上单位，市管国有企业领导班子。</p>
                <p>领导干部考核对象为：县市区（包括党委、人大、政府、政协、法院、检察院）、市直副处以上单位、市管国有企业中市委管理的干部，以及其他市管干部。</p> <br>
                <p>下列干部的年度考核，按照以下规定办理：</p><br> 
                <p>（一）担任多项职务的市管干部，一般在其承担主要职责的单位进行年度考核；新提拔任职的市管干部，按现任职务进行年度考核；交流任职的市管干部，一般在现工作单位考核，交流任职不足半年的，在现工作单位述职述德述廉时应报告交流前有关工作情况。 </p><br>
                <p>（二）市委委托市委组织部管理的干部，年度考核由所在地和单位组织实施，考核结果报市委组织部审定。</p><br>
                <p>（三）外地、省里派在我市挂职的干部以及我市参加挂职锻炼的市管干部，在挂职单位参加考核。</p>
                
            </div>
          </div>
    </div>
</template>

<script>
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
  }
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
.signin {
    width: 826px;
    height: 230px;
    border-radius: 31px;
    background: linear-gradient(245deg, #F72A2A 0%, #FF9046 100%);  /*渐变色*/
    margin: 34px auto 38px;
}
.text1 {
    font-size:40px;
    font-weight: 600;
    color: #FFFFFF;
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
    font-size: 25px;
    font-family: 'PingFangSC-Semibold', 'PingFang SC';
    font-weight: 600;
    color: #000000;
    width: 607px;
    margin: 0 auto;
    /*  残缺 */
  }
</style>

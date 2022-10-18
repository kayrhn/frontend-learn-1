<template>
    <div class="box">
        <div class="header">
            XZXXXX 信息系统
        </div>

        <div class="info">
            <div class="info__swiper"></div>
            <div class="info__point"></div>
            <div class="info__logo">
                <div class="info__logo__icon"></div>
                <div class="info__logo__text">党建风采</div>
            </div>
        </div>

        <div class="menu">
            <div v-for="(item, index) in menuList" class="menu__button" :class="{ 'menu__button--active': item.active }"
                :key="index" @click="onClickButton(index)">
                <img class="menu__button__icon" :src="getImgUrl(item.icon)">
                <span class="menu__button__text">{{ item.title }}</span>
            </div>
        </div>
        <!-- footer部分 -->
        <div class="footer">
            <div class="footer__title1">活动风采</div>
            <div class="footer__title2">———— ★ ————</div>
            <div class="footer__img" v-for="(item, index) in footerList" :key="index" >
                <img class="footer__img__icon" :src="getImgUrl(item.icon)">
                <span class="footer__img_text">{{ item.title }}</span>
            </div>
        </div>

        <!-- <div v-if="type === '活动安排'" class="content">
        </div> -->
    </div>
</template>

<script setup>
const menuList = $ref([
    { title: '活动安排', icon: 'img.png', active: false },
    { title: '通知公告', icon: 'img.png', active: false },
    { title: '活动安排', icon: 'img.png', active: false },
    { title: '活动安排', icon: 'img.png', active: false },
    { title: '活动安排', icon: 'img.png', active: false },
]);

let type = $ref('活动安排')

const onClickButton = (index) => {
    // function onClickButton(index) {
    menuList.forEach(o => o.active = false);
    menuList[index].active = true;
    type = menuList[index].title;
}

const getImgUrl = (path) => {
    return new URL(`../assets/img/${path}`, import.meta.url).href
}

// footer部分
const footerList = $ref([
    { title: '2021年12月1日“XXXX”党员活动', icon: 'img.png' },
    { title: '2021年12月3日“XXXX”党员活动', icon: 'img.png' },
])
</script>

<style scoped lang="scss">

.box {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(../assets/img/background.jpg);
    background-size: 100%;

    .header {
        position: absolute;
        top: 155px;
        left: 0;
        right: 0;
        text-align: center;
        font-size: 64px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        line-height: 1;
        color: #E00000;
        text-shadow: 0 2px 4px rgba(0, 0, 0, .5);
        -webkit-background-clip: text;
    }

    .info {
        position: absolute;
        width: 850px;
        margin: auto;
        height: 434px;
        top: 274px;
        left: 0;
        right: 0;
        background: rgba(240, 224, 224, 1);
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
        border-radius: 16px;

        &__swiper {
            width: 850px;
            height: 339px;
            background: #FFFFFF;
        }

        &__point {}

        /* 省略 */

        &__logo {
            position: absolute;
            top: 362px;
            right: 28px;
            display: flex;
            // justify-content: space-between;
            align-items: center;

            &__icon {
                // position: absolute;
                // top: 362px;
                // right: 182px;
                background-image: url(../assets/img/badge.png);
                background-size: 100%;
                width: 42px;
                height: 43px;
                margin-right: 10px;
            }

            &__text {
                // position: absolute;
                // top: 361px;
                // right: 28px;
                font-size: 36px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #E13131;
                line-height: 50px;
                text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.5);
            }
        }
    }

    .menu {
        position: absolute;
        top: 785px;
        left: 128px;
        right: 128px;
        height: 134px;
        display: flex;
        justify-content: space-between;

        &__button {
            width: 131px;
            height: 134px;
            background: #FFFFFF;
            border-radius: 15px;
            border: 2px solid #AF3333;
            color: black;

            &__icon {
                margin: 15px 30px 2px 29px;
                width: 72px;
                height: 72px;
                display: block;
            }
            &__text {
                font-size: 24px;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 500;
                color: #CC1E1E;
                line-height: 33px;
            }
            &--active {
                background: red;
            }
        }
    }
    .footer {
        position: absolute;
        top: 1010px;
        left: 0px;
        right: 0px;
        margin: auto;
        width: 850px;
        height: 826px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
        border-radius: 16px;
      
        
        &__title1 {
            position: absolute;
            top: 32px;
            right: 329px;
            left: 329px;
            font-size: 48px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #E13131;
            line-height: 67px;
            text-shadow: 0px 2px 4px rgba(0,0,0,0.5);
        }
        &__title2 {
            position: absolute;
            top: 104px;
            left: 183px;
            right: 184px;
            color: #E13131;
            font-size: 48px;
        }
        &__img {
            position: absolute;
            top: 184px;
            left: 173px;
            right: 177px;
            overflow: hidden;
    
            &__icon {
                width: 500px;
                height: 281px;
                background: #D8D8D8;
                border: 1px solid #979797;
            }
            &__text {
                font-size: 22px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #0C0C0C;
                line-height: 30px;
            }
        }

    }

}
</style>
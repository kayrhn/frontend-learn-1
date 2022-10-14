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
            <div
                v-for="(item, index) in menuList" 
                class="menu__button" 
                :class="{ 'menu__button--active': item.active }" 
                :key="index"
                @click="onClickButton(index)"
            >
                <img class="menu__button__icon" :src="getImgUrl(item.icon)">
                {{ item.title }}
            </div>
        </div>

        <div v-if="type === '活动安排'" class="content">

        </div>
    </div>
</template>

<script setup>
const menuList = $ref([
    { title: '活动安排', icon: '党建活动.png', active: false },
    { title: '通知公告', icon: '党建活动.png', active: false },
    { title: '活动安排', icon: '党建活动.png', active: false },
    { title: '活动安排', icon: '党建活动.png', active: false },
    { title: '活动安排', icon: '党建活动.png', active: false },
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
        box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
        border-radius: 16px;

        &__swiper {
            width: 850px;
            height: 339px;
            background: #FFFFFF;
        }

        &__point {
        }

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
                text-shadow: 0px 2px 2px rgba(0,0,0,0.5);
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
            &__icon {
                width: 72px;
                height: 72px;
                display: block;
                margin: auto;
            }
            width: 131px;
            height: 134px;
            background: #FFFFFF;
            border-radius: 15px;
            border: 2px solid #AF3333;
            color: black;

            &--active {
                background: red;
            }
        }
    }

}

</style>
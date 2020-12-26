<template>
<header :class="{openMenu: isOpen}">
    <nav>
        <router-link class="title" to="/">Mike</router-link>
        <a id="moblie_menu" href="javascript:;" @click="handleOpenManu"></a>
        <div>
            <router-link to="/rwd">RWD</router-link>
            <router-link to="/vuejs">VUEJS</router-link>
            <router-link to="/reactjs">REACTJS</router-link>
            <router-link to="/html5">HTML5</router-link>
            <router-link to="/nodejs">NODEJS</router-link>
        </div>
    </nav>
</header>
</template>

<style lang="scss" scoped>
header {
    background-color: #373c3f;
    width: 100%;
    height: 97px;
    >nav {
        position: relative;
        width: 1024px;
        height: 100%;
        margin: 0 auto;
        >.title {
            line-height: 97px;
            font-size: 18px;
            float: left;
            color: #fff;
            margin-right: 20px;
        }
        >div {
            width: 100%;
            height: 100%;
            >a {
                display: block;
                line-height: 97px;
                font-size: 15px;
                float: left;
                color: #fff;
                padding: 0 10px;
            }
        }
    }
    &.openMenu {
        height: 232px;
    }
}

a#moblie_menu {
    display: none;
}

@media screen and (max-width: 1044px) {
  header {
    > nav {
        width: 100%;
        h1 {
            margin-left: 5%;
        }
    }
  }
}

@media screen and (max-width: 640px) {
    a#moblie_menu {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 37px;
        height: 37px;
        background-image: url("~@/assets/images/menu.jpg");
        background-position: 50% 50%;
        background-size: 95% auto;
        background-repeat: no-repeat;
    }
    header {
        transition: height 0.2s;
        height: 37px;
        overflow: hidden;
        &.openMenu {
            height: 232px;
        }
        > nav {
            width: 100%;
            height: 232px;
            > h1 {
                line-height: 37px;
            }
            > div {
                clear: both;
                width: 100%;
                height: 195px;
                > a {
                    width: 100%;
                    height: auto;
                    overflow: hidden;
                    line-height: 37px;
                    text-align: center;
                }
            }
        }
    }
}
</style>

<script>
import { ref } from 'vue';
export default {
    setup() {
        const isOpen = ref(false);
        const handleOpenManu = () => {
            isOpen.value = !isOpen.value;
        }

        return {
            isOpen,
            handleOpenManu
        }
    }
}
</script>

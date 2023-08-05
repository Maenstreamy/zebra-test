<template>
    <header class="app-header">
        <img src="./assets/logo.svg" class="app-header__logo" alt="" />
    </header>
    <div class="app-content">
        <div class="page-header">
            <h2 class="page-header__title">Новости</h2>
        </div>
        <div v-if="isError" class="app-content__error">
            Ошибка получения списка новостей
        </div>
        <div v-else class="news-content">
            <CardNews v-for="item of news" :key="item.code" v-bind="item" />
        </div>
        <div
            v-if="showDownloadButton"
            class="app-content__download-btn"
            @click="loadData"
        >
            Загрузить ещё
        </div>
    </div>
    <footer class="app-footer">
        <img src="./assets/logo.svg" class="app-footer__logo" alt="" />
        <div class="app-footer__content">© alpha, 2023</div>
    </footer>
</template>

<script setup>
import CardNews from "./components/CardNews.vue";
import { ref, computed } from "vue";

let news = ref([]);
let navigation = null;
let showDownloadButton = null;
let isError = ref(null);

const loadData = async () => {
    try {
        const nextPage = navigation ? navigation.current + 1 : "";

        const data = await fetch(
            `http://flems.github.io/test/api/news/${nextPage}`
        ).then((response) => response.json());

        const { items, nav } = data;
        navigation = nav;
        items.forEach((item) => {
            item.date = dateFormatter(item.date);
            news.value.push(item);
        });

        showDownloadButton = computed(() => {
            return navigation.total !== navigation.current;
        });
    } catch (e) {
        console.error(e);
        isError.value = true;
    }
};

const dateFormatter = (int) => {
    const date = new Date(int * 1000);
    return {
        day: date.getDate(),
        monthName: date.toLocaleString("en", { month: "long" }),
        year: date.getFullYear(),
    };
};

(async function () {
    await loadData();
})();
</script>

<style lang="scss">
h2,
p {
    margin: 0;
    padding: 0;
}

html,
body {
    height: 100%;
    margin: 0;
}

#app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    font-family: "Nunito Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    max-width: 1920px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}

.app-header {
    position: absolute;
    background: #fff;
    box-sizing: border-box;
    padding: 0 100px;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
    height: 123px;
    margin-bottom: 3px;

    &__logo {
        width: 152px;
        height: 48px;
    }
}

.app-content {
    padding-top: 126px;

    &__download-btn {
        border-radius: 8px;
        border: 1px solid #002dbf;
        width: fit-content;
        padding: 16px 32px;
        color: #002dbf;
        font-size: 20px;
        font-weight: 600;
        line-height: 120%;
        letter-spacing: -0.2px;
        margin: 0 auto;
        cursor: pointer;
        margin-bottom: 72px;

        &:hover {
            background: #002dbf;
            color: #fff;
        }
    }
    &__error {
        padding: 64px 100px;
    }
}

.page-header {
    box-sizing: border-box;
    background: center / cover url("./assets/news-page-bg.jpg") no-repeat;
    height: 320px;
    display: flex;
    align-items: flex-end;
    padding: 48px 100px;

    &__title {
        font-size: 40px;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: -0.4px;
        color: #17171a;
    }
}

.news-content {
    padding: 64px 100px 72px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
    row-gap: 64px;
    column-gap: 48px;
    justify-items: center;
}
.app-footer {
    background: #f0f6fe;
    box-sizing: border-box;
    padding: 64px 100px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;

    &__logo {
        width: 114px;
        height: 36px;
    }

    &__content {
        font-size: 16px;
        font-weight: 400;
        line-height: 140%;
        color: #81899d;
    }
}
</style>

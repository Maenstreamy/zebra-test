<template>
    <div class="card-news">
        <div v-if="image" class="card-news__img-wrapper">
            <img class="card-news__img" :src="image" alt="" />
        </div>
        <div class="card-news__wrapper">
            <div class="card-news__content">
                <div class="card-content__date">
                    <div class="card-content__date-day">{{ date.day }}</div>
                    <div class="card-content__date-month-year">
                        <div>{{ date.monthName }}</div>
                        <div>{{ date.year }}</div>
                    </div>
                </div>
                <div class="card-content__name">{{ name }}</div>
                <div
                    class="card-content__preview-text"
                    v-html="previewText"
                ></div>
            </div>
            <div class="card-content__type">{{ type.value }}</div>
        </div>
    </div>
</template>

<script setup>
/* eslint-disable */

defineProps({
    name: {
        type: String,
        default: "",
    },
    date: {
        type: Object,
        default: () => {},
    },
    image: {
        type: String,
        default: "",
    },
    previewText: {
        type: String,
        default: "",
    },
    type: {
        type: Object,
        default: () => {},
    },
});
</script>

<style scoped lang="scss">
.card-news {
    box-sizing: border-box;
    border-radius: 16px;
    border: 1px solid #0f62fe;
    max-width: 536px;
    min-height: 554px;
    display: flex;
    flex-direction: column;

    &__img-wrapper {
        position: relative;
        min-height: 250px;
        height: 250px;
    }

    &__img {
        position: absolute;
        height: 100%;
        width: calc(100% + 2px);
        top: -1px;
        left: -1px;
        border-radius: 16px 16px 0 0;
        object-fit: cover;
    }

    &__wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 40px;
        padding: 32px;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
}
.card-content {
    &__date {
        display: flex;
        flex-direction: row;
        gap: 4px;
        color: #a1a7b5;
        align-items: center;
    }

    &__date-day {
        font-size: 36px;
        font-weight: 400;
        line-height: 100%;
    }

    &__date-month-year {
        font-size: 15px;
        font-weight: 700;
        line-height: 110%;
        letter-spacing: -0.15px;
    }

    &__name {
        font-size: 22px;
        font-weight: 400;
        line-height: 120%;
        color: #0c5bef;
        cursor: pointer;

        &:hover {
            color: #0029a9;
        }
    }

    &__preview-text {
        font-size: 20px;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: -0.2px;
        color: #222327;
    }

    &__type {
        padding: 4px 16px;
        width: fit-content;
        border-radius: 360px;
        background: #f0f6fe;
        font-size: 14px;
        font-weight: 400;
        line-height: 140%;
        color: #00133a;
    }
}
</style>

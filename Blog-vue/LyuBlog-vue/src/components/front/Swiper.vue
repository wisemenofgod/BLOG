<template>
    <div class="banbox ">
        <swiper class="swiper" style="height: 260px;">
            <swiper-slide v-for="(item, index) in sliders" :key="index">
                <router-link :to="item.url" target="_blank"><img :src="item.img" width="100%" alt=""/></router-link>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import 'swiper/swiper-bundle.css'
export default {
    name: 'FSwiper',
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            sliders: [
                {
                    img: 'http://localhost:3410/cms/static/img/swiper/1.jpg',
                    url: 'www.baidu.com '
                },
                {
                    img: 'http://localhost:3410/cms/static/img/swiper/2.jpg',
                    url: 'www.baidu.com '
                },
                {
                    img: 'http://localhost:3410/cms/static/img/swiper/3.jpg',
                    url: 'www.baidu.com '
                }
            ]
        }
    }
}
</script>

<style scoped></style>

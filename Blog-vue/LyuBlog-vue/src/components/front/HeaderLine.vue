<template>
    <div class="headline">
        <ul>
            <li>
                <router-link :to="'/detail/' + title1.id" :title="title1.title">
                    <img src="http://43.139.77.194:3410/cms/static/img/headline/headline_1.jpg" alt="为什么说10月24日是程序员的节日？" />
                    <span>{{ title1.title }}</span>
                </router-link>
            </li>
            <li>
                <router-link :to="'/detail/' + title2.id" :title="title2.title">
                    <img src="http://43.139.77.194:3410/cms/static/img/headline/headline_2.jpg" alt="个人网站做好了" />
                    <span>{{ title2.title }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { getRandomArticle } from '@/api/front'
export default {
    name: 'HeaderLine',
    data() {
        return {
            articles: [],
            title1: [],
            title2: []
        }
    },
    created() {
        getRandomArticle().then(data => {
            this.articles = data.data
            this.title1 = this.articles[0]
            this.title2 = this.articles[1]
        })
    }
}
</script>

<style scoped></style>

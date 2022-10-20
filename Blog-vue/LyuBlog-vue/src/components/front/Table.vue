<template>
    <div class="tab_box whitebg">
        <template>
            <div class="tab_buttons">
                <ul>
                    <li v-for="(item, index) in channels" :key="index" @click="curlist(item.id)" :class="{ newscurrent: cur == item.id }">{{ item.name }}</li>
                </ul>
            </div>
            <div class="newstab">
                <!-- <div class="newsitem" :v-show="cur == cur"> -->
                <div class="newsitem">
                    <div class="newspic">
                        <ul>
                            <li :v-if="showimg1">
                                <router-link :to="'/detail/' + xxxx.id" target="_blank"
                                    ><img src="http://43.139.77.194:3410/cms/static/img/table/table_1.jpg" /><span>{{ xxxx.title }}</span></router-link
                                >
                            </li>

                            <li :v-show="showimg2">
                                <router-link :to="'/detail/' + yyyy.id" target="_blank"
                                    ><img src="http://43.139.77.194:3410/cms/static/img/table/table_2.jpg" /><span>{{ yyyy.title }}</span></router-link
                                >
                            </li>
                        </ul>
                    </div>
                    <ul class="newslist">
                        <li v-for="(item, index) in articles" :key="index">
                            <i></i><router-link :to="'/detail/' + item.id" target="_blank">{{ item.title }}</router-link>
                            <p>{{ item.summary }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { queryByPos, getChannelArticlePos } from '@/api/front'

export default {
    name: 'Table',
    data() {
        return {
            articles: [],
            channels: [],
            xxxx: {
                id: '',
                title: ''
            },
            yyyy: {
                id: '',
                title: ''
            },
            cur: '',
            showimg1: true,
            showimg2: true
        }
    },
    mounted() {
        queryByPos('b')
            .then(data => {
                this.channels = data.data
            })
            .catch(error => {
                this.$message.error(error)
            })
        this.curlist(this.cur)
    },
    methods: {
        curlist(id) {
            this.cur = id
            //根据栏目id查询文章,查询的是全部的信息不限于abc
            getChannelArticlePos(id)
                .then(data => {
                    this.articles = data.data

                    if (data.data[0] == null) {
                        this.xxxx.id = 0
                        this.xxxx.title = ''
                        this.showimg1 = false
                    } else {
                        this.xxxx = data.data[0]
                        this.showimg1 = true
                    }

                    if (data.data[1] == null) {
                        this.yyyy.id = 0
                        this.yyyy.title = ''
                        this.showimg2 = false
                    } else {
                        this.yyyy = data.data[1]
                        this.showimg2 = true
                    }
                })
                .catch(error => {
                    this.$message.error(error)
                })
        }
    }
}
</script>

<style scoped></style>

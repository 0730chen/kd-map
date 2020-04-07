<template>
    <div id="main" :style=Size></div>
</template>

<script>
    import echarts from 'echarts'
    import options from "./options";
    import browser from "../../../lib/browser";

    export default {
        name: "EchartMap",
        data() {
            return {
                options: options,
            }
        },
        methods: {},
        created() {
        },
        computed: {
            Size: function () {
                //判断是否是移动端
               if(browser.versions.mobile){
                   return {
                       width: "100vw",
                       height: "100vh",
                   }
               }
                return {

                    width: "100vw",
                    height: "100vh",
                }
            }
        },
        mounted() {
            let MyChart = echarts.init(document.querySelector('#main'), null, {renderer: 'svg'})

            MyChart.setOption(this.options)
        },
    }
</script>

<style scoped>

</style>
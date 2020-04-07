<template>
    <div class="kdMap">
        <svg width="100vw" height="100vh">
        </svg>
    </div>
</template>

<script>
    import * as d3 from 'd3'
    import browser from "../../../lib/browser";
    import data from "./options";

    export default {
        name: "D3",
        data() {
            return {}
        },
        computed: {},
        created() {

        },
        mounted() {
            let {nodes, edges} = data
            let height = window.outerHeight
            let width = window.outerWidth
            let svg = d3.select('svg');
            let g = svg.append('g')
            //创建模型
            let scaleColor = d3.scaleOrdinal()
                .domain(d3.range(nodes.length))
                .range(d3.schemeCategory10);
            let simulation = d3.forceSimulation()
                .force("charge", d3.forceManyBody())
                .force("link", d3.forceLink())
                .force("center", d3.forceCenter(width / 2, height / 2));
            // 节点数据
            simulation.nodes(nodes).on('tick', Tick)
            //边数据
            simulation.force('link').links(edges).distance(d => {
                return d.value * 100
            })
            //中心点

            //生产边数据

            const links = svg.append("g")
                .attr("stroke", "#999")
                .selectAll("line")
                .data(edges)
                .enter()
                .append("line")
                .attr("stroke-width", d => Math.sqrt(d.value))
                .attr("stroke-width",1);


            //边上文字
            let linkText = g.append('g')
                .selectAll('text')
                .data(edges)
                .enter()
                .append('text')
                .text((d, i) => {
                    return d.relation
                })

            //节点和节点文字分组
            let gs = g.selectAll('.circle').data(nodes)
                .enter()
                .append('g')
                .attr('transform', function (d, i) {
                    return 'translate(' + d.x + ',' + d.y + ')'
                })
                .call(
                    d3.drag()//相当于移动端的拖拽手势  分以下三个阶段
                        .on('start', start)
                        .on('drag', drag)
                        .on('end', end)
                )
            //节点
            gs.append('circle').attr('r', 10).attr('fill', (d, i) => {
                return scaleColor(i)
            })
            // //文字
            gs.append("text")
                .attr("x", -10)
                .attr("y", -20)
                .attr("dy", 10)
                .text(function (d) {
                    return d.name;
                })
            //线和线文字分组


            // console.log(link.attr('x1'));

            function Tick() {
                links.attr("x1", function (d) {
                    return d.source.x;
                }).attr("y1", function (d) {
                    return d.source.y;
                }).attr("x2", function (d) {
                    return d.target.x;
                }).attr("y2", function (d) {
                    return d.target.y;
                });
                linkText.attr("x", function (d) {
                    return (d.source.x + d.target.x) / 2;
                })
                    .attr("y", function (d) {
                        return (d.source.y + d.target.y) / 2;
                    });
                gs && gs.attr('transform', function (d, i) {
                    return 'translate(' + d.x + ',' + d.y + ')'
                })
            }

            function start(d) {
                if (!d3.event.active) {//event.active 属性对判断并发的拖拽手势序列中的 start 事件和 end 事件: 在拖拽手势开始时为0，在拖拽结束最后一个手势事件时为0
                    //这里就是drag的过程中
                    simulation.alphaTarget(0.8).restart();//设置衰减系数，对节点位置移动过程的模拟，数值越高移动越快，数值范围[0，1]
                }
                d.fx = d.x;
                d.fy = d.y;
            }

            function drag(d) {

                d.fx = d3.event.x;
                d.fy = d3.event.y;
            }

            function end(d) {
                if (!d3.event.active) {
                    simulation.alphaTarget(0);
                }
                d.fx = null;
                d.fy = null;
            }


            // let simulation = d3.forceSimulation(nodes)
            //     .force('charge', d3.forceManyBody().strength(-100))
            //     .force('center', d3.forceCenter(width / 2, height / 2))
            //     .force('link', d3.forceLink().links(links))
            //     .on('tick', ticked);

            //定义更新函数
            // function updateLinks() {
            //     let u = d3.select('.links').selectAll('line').data(links)
            //     u.enter().append('line').merge(u).attr('x1', function (d) {
            //         return d.source.x
            //     }).attr('y1', function (d) {
            //         return d.source.y
            //     }).attr('x2', function (d) {
            //         return d.target.x
            //     }).attr('y2', function (d) {
            //         return d.target.y
            //     })
            //     u.exit().remove()
            // }
            //
            // //更新节点函数
            // function updateNodes() {
            //     let u = d3.select('.nodes')
            //         .selectAll('text')
            //         .data(nodes)
            //
            //     u.enter()
            //         .append('text')
            //         .text(function (d) {
            //             return d.name
            //         })
            //         .merge(u)
            //         .attr('x', function (d) {
            //             return d.x
            //         })
            //         .attr('y', function (d) {
            //             return d.y
            //         })
            //         .attr('dy', function (d) {
            //             return 5
            //         })
            //
            //     u.exit().remove()
            // }
            // function ticked() {
            //     updateLinks()
            //     updateNodes()
            // }


        },
        methods: {}
    }
</script>
<style scoped>

</style>
<style>

</style>
let categories = [];
for (var i = 0; i < 2; i++) {
    categories[i] = {
        name: '类目' + i
    };
}

let options = {
    // 图的标题
    title: {
        text: '知识图谱',
        x: 'left'
    },
    // 提示框的配置
    //点击后会触发
    tooltip: {
        show: true,
        formatter: function (x) {
            alert('点击了')
            return x.data.des;
        },
        triggerOn: 'click'
    },
    // 工具箱
    legend: [{
        // selectedMode: 'single',
        // data: categories.map(function (a) {
        //   return a.name;
        // },
        //     x:'right'
        //     )
    }],
    series: [{
        type: 'graph', // 类型:关系图
        layout: 'force', //图的布局，类型为力导图
        symbolSize: 40, // 调整节点的大小
        roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [2, 10],
        force: {
            repulsion: 2500,
            edgeLength: [10, 50]
        },
        draggable: true,
        lineStyle: {
            normal: {
                width: 2,
                color: '#4b565b',
            }
        },
        edgeLabel: {
            normal: {
                show: true,
                formatter: function (x) {
                    return x.data.name;
                },
            }
        },
        label: {
            normal: {
                show: true,
                textStyle: {}
            }
        },

        // 数据
        //是一个数组，每一项都是一个对象
        data: [{
            name: 'node01',
            des: 'nodedes01',
            next: 'node02',
            symbolSize: 70,
            category: 0,
        }, {
            name: 'node02',
            des: 'nodedes02',
            symbolSize: 50,
            category: 1,
        }, {
            name: 'node03',
            des: 'nodedes3',
            symbolSize: 50,
            category: 1,
        }, {
            name: 'node04',
            des: 'nodedes04',
            symbolSize: 50,
            category: 1,
        }, {
            name: 'node05',
            des: 'nodedes05',
            symbolSize: 40,
            category: 1,
        }],
        links: [{
            source: 'node01',
            target: 'node02',
            name: 'link01',
            des: 'link01des'
        }, {
            source: 'node01',
            target: 'node03',
            name: 'link02',
            des: 'link02des'
        }, {
            source: 'node01',
            target: 'node04',
            name: 'link03',
            des: 'link03des'
        }, {
            source: 'node01',
            target: 'node05',
            name: 'link04',
            des: 'link05des'
        }],
        categories: categories,
    }],
};

export default options
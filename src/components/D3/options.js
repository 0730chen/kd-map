let options = {
    nodes: [
        {name:"浙江"},
        {name:"杭州"},
        {name:"芜湖"},
        {name:"北京"},
        {name:"西安"},
        {name:"中国"},
        {name:"陕西"},
        {name:"成都"},
        {name:"三亚"}
    ],
    edges: [
        {source: 0, target: 4, relation: "市级", value: 1.3},
        {source: 0, target: 5, relation: "县级", value: 1},
        {source: 0, target: 6, relation: "国际", value: 1},
        {source: 4, target: 7, relation: "市级", value: 1},
        {source: 1, target: 6, relation: "县级", value: 2},
        {source: 2, target: 5, relation: "籍贯", value: 0.9},
        {source: 3, target: 7, relation: "籍贯", value: 1},
        {source: 5, target: 6, relation: "同学", value: 1.6},
        {source: 6, target: 7, relation: "朋友", value: 0.7},
        {source: 6, target: 8, relation: "职责", value: 2}
    ]
}
export default options
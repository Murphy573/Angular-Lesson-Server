let products = [
    {
        id: 1,
        title: '第1个商品',
        price: 1.99,
        stars: 2.5,
        desc: '描述1',
        categories: ['电子产品', '硬件设备']
    },
    {
        id: 2,
        title: '第2个商品',
        price: 1.99,
        stars: 1.5,
        desc: '描述2',
        categories: ['零食']
    },
    {
        id: 3,
        title: '第3个商品',
        price: 1.99,
        stars: 2.5,
        desc: '描述3',
        categories: ['宠物']
    },
    {
        id: 4,
        title: '第4个商品',
        price: 1.99,
        stars: 0.5,
        desc: '描述4',
        categories: ['电子产品']
    },
    {
        id: 5,
        title: '第5个商品',
        price: 1.99,
        stars: 2.5,
        desc: '描述5',
        categories: ['宠物', '生活']
    },
    {
        id: 6,
        title: '第6个商品',
        price: 1.99,
        stars: 2,
        desc: '描述6',
        categories: ['医疗器材']
    },
    {
        id: 7,
        title: '第7个商品',
        price: 1.99,
        stars: 3,
        desc: '描述7',
        categories: ['硬件设备']
    },
    {
        id: 8,
        title: '第8个商品',
        price: 1.99,
        stars: 5,
        desc: '描述8',
        categories: ['电子产品']
    },
];

module.exports = {
    getProducts () {
        return products;
    },
    getProductByID (id) {
        return products.find(p => {
            return p.id == id;
        })
    }
};
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        name: "Buya",
        website: 'https://www.metawise.net',
        webTag: '<a href="https://www.metawise.net">https://www.metawise.net</a>',
        age: 33,
        x: 0,
        y: 0,
        ninjas: [
            {
                "name": "Dorsey Mcknight"
            },
            {
                "name": "Cline Diaz"
            },
            {
                "name": "Wendi Estrada"
            },
            {
                "name": "Connie Hansen"
            },
            {
                "name": "Letitia Golden"
            },
            {
                "name": "Josephine Curry"
            },
            {
                "name": "Clements Richmond"
            },
            {
                "name": "Morse Sosa"
            },
            {
                "name": "Rosa Barr"
            },
            {
                "name": "Griffith Richardson"
            }
        ]
    },
    methods: {
        greeting: function(){
            return "Good morning"
        },
        add: function(inc){
            this.age += inc;
        },
        subtract: function(dec){
          this.age -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
    }
})
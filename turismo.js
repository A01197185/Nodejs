const p5 = Vue.createApp({ 
    data() {
        return{
            nA: false,
            europe: false,
            asia: false,
            oceania: false,
            r1: 'North America',
            r2: 'Europe',
            r3: 'Asia',
            r4: 'Oceania',
            bucl1:[ 
            ],
            bucl2:[
                { paises:"Germany" },
                { paises:"France" },
                { paises:'Portugal' },
                { paises:"Poland" },
                { paises:"England" },
                { paises:"Italy" },
                { paises:"Sweden" },
                { paises:"Norway" },
                { paises:"Malta" },
            ],
            bucl3:[
                { paises:"China" },
                { paises:"Korea" },
                { paises:'Japan' },
                { paises:"Malaysia" },
                { paises:"Phillipines" },
                { paises:"India" },
                { paises:"Khazakstan" },
                { paises:"Indonesia" },
            ],
            bucl4:[
                { paises:"Australia" },
                { paises:"New Zealand" },
                { paises:'Fiji' },
                { paises:"Papua New Guinea" },
                { paises:"New Caledonia" },
            ]
        }
    },
    methods: {
        rNA(){
            this.nA = !this.nA
        },
        rEU(){
            this.europe = !this.europe
        },
        rAS(){
            this.asia = !this.asia
        },
        rOC(){
            this.oceania = !this.oceania
        }
    },
});
p5.mount('#p5')

const inputs = Vue.createApp({
    data(){
        return{
        message: ''   
        }
    }
 });
 inputs.mount('#inputs')

const ej6 = Vue.createApp({
    mounted(){
        var today = new Date();
        this.$refs.p.textContent = 'Todays date is ' + today;
    }
}).mount('#ej6')
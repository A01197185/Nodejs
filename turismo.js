const p5 = Vue.createApp({ 
    data() {
        return{
            urlBase: 'http://localhost:5000',
            nA: false,
            europe: false,
            asia: false,
            oceania: false,
            r1: 'North America',
            r2: 'Europe',
            r3: 'Asia',
            r4: 'Oceania',
            pNA: [],
            pEU: [],
            pAS: [],
            pOC: [],
        }
    },
    methods: {
        async CallApi(url, method, data){
            const header = data == null? { 	method: method,
                                            headers: { 'Content-Type': 'application/json' }} :
                                         { 	method: method,
                                            body: JSON.stringify(data),
                                            headers: { 'Content-Type': 'application/json' }}
    
            try {
                const response = await fetch(url, header);
                return await response.json();
            }
            catch(error){
                alert('error');
            }
        },
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
    mounted() {
        Promise.all([
            fetch('http://localhost:5000/getNA')
            .then(res => res.json())
            .then(data => this.pNA = data)
            .catch(err => console.log(err.message)),
            fetch('http://localhost:5000/getEU')
            .then(res => res.json())
            .then(data => this.pEU = data)
            .catch(err => console.log(err.message)),
            fetch('http://localhost:5000/getAS')
            .then(res => res.json())
            .then(data => this.pAS = data)
            .catch(err => console.log(err.message)),
            fetch('http://localhost:5000/getOC')
            .then(res => res.json())
            .then(data => this.pOC = data)
            .catch(err => console.log(err.message))
        ]).then(console.log)        
    }
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
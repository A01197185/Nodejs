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
            pNA: {
                Id: null,
                paises: ''
            },
            pEU: {
                Id: null,
                paises: ''
            },
            pAS: {
                Id: null,
                paises: ''
            },pOC: {
                Id: null,
                paises: ''
            },
            urlBase: 'http://localhost:5000'
        }
    },
    methods: {
        async getNA(){
            const dbNA = await this.CallApi(this.urlBase, 'GET', null);
            this.pNA.Id = dbNA[0].id;
            this.pNA.paises = dbNA[0].countryName;
        },
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
                alert('Hubo un error favor de contactar al admnistrador.');
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
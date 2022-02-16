// Inizializzzo app vue
const app = new Vue (

    {
        el:"#app",

        data: {

            contacts: [

                {

                    name: 'Michele',

                    avatar: '_1',

                    visible: false,

                    messages: [

                        {

                            date: '10/01/2020 15:30:55',

                            text: 'Hai portato a spasso il cane?',

                            status: 'sent',


                        },

                        {

                            date: '10/01/2020 15:50:00',

                            text: 'Ricordati di dargli da mangiare',

                            status: 'sent',


                        },

                        {

                            date: '10/01/2020 16:15:22',

                            text: 'Tutto fatto!',

                            status: 'received',


                        },


                    ],



                },

                {
                    name: 'Fabio',

                    avatar: '_2',

                    visible: false,

                    messages: [

                        {
                            date: '20/03/2020 16:30:00',

                            text: 'Ciao come stai?',

                            status: 'sent'

                        },

                        {
                            date: '20/03/2020 16:30:55',

                            text: 'Bene grazie! Stasera ci vediamo?',

                            status: 'received'

                        },

                        {
                            date: '20/03/2020 16:35:00',
                            
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',

                            status: 'sent'

                        }

                    ],

                },

                {
                    name: 'Samuele',

                    avatar: '_3',

                    visible: false,

                    messages: [

                        {
                            date: '28/03/2020 10:10:40',

                            text: 'La Marianna va in campagna',

                            status: 'received'
                        },

                        {
                            date: '28/03/2020 10:20:10',

                            text: 'Sicuro di non aver sbagliato chat?',

                            status: 'sent'
                        },

                        {
                            date: '28/03/2020 16:15:22',

                            text: 'Ah scusa!',

                            status: 'received'
                        }

                    ],

                },

                {
                    name: 'Luisa',

                    avatar: '_4',

                    visible: false,

                    messages: [

                        {
                            date: '10/01/2020 15:30:55',

                            text: 'Lo sai che ha aperto una nuova pizzeria?',

                            status: 'sent'
                        },

                        {
                            date: '10/01/2020 15:50:00',

                            text: 'Si, ma preferirei andare al cinema',

                            status: 'received'
                        }
                    ],
                },


            ],

            // Nuovo testo inserito
            newText: '',

            // Chat attiva
            active: 0,

            //search
            search:'',


        },

        methods : {

            // Funzione contatto attivo 
            setContactActive(index){
                this.active=index;
            },

            //Funzione aggiunta messaggio e risposta
            sendMessage(){


                this.contacts[this.active].messages.push(

                    {
                        date: dayjs().format('DD/MM/YYYY HH:mm:ss'),

                        text: this.newText,

                        status: 'sent'

                    }

                )

                this.newText ='';

                setTimeout(() => {

                    this.contacts[this.active].messages.push(

                        {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
    
                            text: "ok!",
    
                            status: 'received'
    
                        }
    
                    ) 
                }, 1000);

     
            }, 

            // funzione mostra dropdown
            showDropdown(){

                


            }

        },

        computed : {

             // lista contatti filtrata
             filterContact(){

                const filtered = this.contacts.filter(value=>{

                    if(value.name.toLowerCase().includes(this.search.toLowerCase())){
                        return true;
                    };

                    return false;

                });

                return filtered;

            }
        }


    }

);



// Inizializzzo app vue
const app = new Vue (

    {
        el:"#app",

        data: {

            contacts: [

                {

                    name: 'Michele',

                    avatar: '_1',

                    visible: true,

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

            newText: '',


        },

        methods : {

            // Funzione cambio visibilita'
            // Cicla un array di obj e setta la visibilita' a false
            // Successivamente imposta visibilita' a true per array cliccato
            changeVisibility(array, index){

                for(let i=0; i < array.length; i++){

                    array[i].visible = false;

                }
                
                this.contacts[index].visible = true;
            },


            //Funzione aggiunta messaggio e risposta
            addMsg(index){

                // push nuovo messaggio mandato
                this.contacts[index].messages.push(

                    {

                        date: '10/01/2020',

                        text: this.newText,

                        status: 'sent'

                    },


                );
                
                // svuoto input msg
                this.newText='';

                // Funzione di risposta automatica dopo 1 secondo
                setTimeout(() => {
                    this.contacts[index].messages.push(
            
                        {
                
                            date: '10/01/2020',
                
                            text: 'ok',
                
                            status: 'received'
                
                        },
                
                
                    );
                }, 1000);

            },


        },


    }

);



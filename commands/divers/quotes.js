const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class RandomCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'quote',
            memberName: 'quote',
            group: 'divers',
            description: 'Envoie une quote aléatoire.',
            clientPermissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
            throttling: {
                usages: 2,
                duration: 5,
            },
        });
    }

    async run(msg) {
        const embed = new Discord.MessageEmbed();
        const quotes = [
            {
                nom: "Addictio",
                date: "Mars 2017",
                quote: "Je mouille dans un bain de sel et de merde qui bulle !"
            },
            
            {
                nom: "Addictio",
                date: "Mai 2017",
                quote: "Bite en cactus everyone in your ass because le Japon est fontaine !"
            },
            
            {
                nom: "Exotit",
                date: "Juin 2017",
                quote: "Ho non ! J'ai mangé le caca de mon ptéranodon, je vais mourir !! Je suis malade !!!"
            },
            
            {
                nom: "Addictio",
                date: "Juillet 2017",
                quote: "Quand j'peux jouer, j'peux pas jouer..."
            },
            
            {
                nom: "Addictio",
                date: "Août 2017",
                quote: "AAAAAAH !! J'me suis donné un coup de manette dans les couilles !!!"
            },
            
            {
                nom: "Addictio",
                date: "Septembre 2017",
                quote: "Je jute du sperme au sel."
            },
            
            {
                nom: "Exotit",
                date: "Novembre 2017",
                quote: "12+12=12"
            },
            
            {
                nom: "Addictio et Erwan",
                date: "Novembre 2017",
                quote: "Imagine Link il se serait appelé Sophie en vrai... Ouais et la princesse se serait appelée Bernard... The Legend of Bernard !"
            },
            
            {
                nom: "Addictio",
                date: "Février 2018",
                quote: "Oh putain je peux fusionner avec Adolf Hitler !!!!"
            },
            
            {
                nom: "Addictio",
                date: "Mars 2018",
                quote: "Hhdjehehdhche eh hzhsu hdhekv hs ! Traduction : Je suis un débile !"
            },
            
            {
                nom: "Exotit",
                date: "Mars 2018",
                quote: "Spoil : Luffy, il est quelque part, il fait des trucs et il se bat contre un type !"
            },
            
            {
                nom: "Addictio",
                date: "Mars 2018",
                quote: "Eh t'as vu je montre mon cul, ma gueule de cul tiens regarde ! Prout"
            },
            
            {
                nom: "Exotit",
                date: "Mars 2018",
                quote: "Si j'ai une copine qui se cosplay en Nymphali, je me cosplay en AmphinoBITE !!"
            },
            
            {
                nom: "Addictio",
                date: "Mars 2018",
                quote: "T'imagines tu vois un musulman végan, tu lui montre une saucisse il décède sur place !"
            },
            
            {
                nom: "Addictio",
                date: "Avril 2018",
                quote: "Je mange tellement épicé au KFC que mon anus te lâche des gaz flamboyants ! C'est moi qu'il aurait dû engager Hitler !"
            },
            
            {
                nom: "Addictio",
                date: "Avril 2018",
                quote: "Ah mais non ! Erwan fait chier il a mit la tunique Grocon !"
            },
            
            {
                nom: "Exotit",
                date: "Avril 2018",
                quote: "Mon petit doigt est tellement engourdi que j'ai l'impression de l'avoir laissé dans ma soeur pendant 2 semaines !"
            },
            
            {
                nom: "Addictio",
                date: "Juin 2018",
                quote: "Faut juste que je gagne mon jeu et j'ai gagné !"
            },
            
            {
                nom: "Exotit",
                date: "Octobre 2018",
                quote: "C'est comme dans Scooby-Doo ! C'est des holographes !"
            },
            
            {
                nom: "Exotit",
                date: "Mai 2019",
                quote: "Je tape sur la petite, au moins y a du goût !"
            },
            
            {
                nom: "Addictio",
                date: "Juin 2019",
                quote: "J'l'ai entendu qu'il m'entendait."
            },
            
            {
                nom: "Addictio",
                date: "Juillet 2019",
                quote: "J'ai pillé le pillage"
            },
            
            {
                nom: "Addictio",
                date: "Octobre 2019",
                quote: "La fin m'a fait bander tellement fort que j'ai percé mon plafond !"
            },
            
            {
                nom: "Addictio",
                date: "Janvier 2020",
                quote: "Pourquoi j'ai de la fumée qui sort de ma bite ?"
            },
            
            {
                nom: "MiniJinouw",
                date: "Février 2020",
                quote: "PUTAIN DE TIK TAK BLEU DE MERDE !!!!"
            },
            
            {
                nom: "Addictio",
                date: "Mars 2020",
                quote: "Homme ou femme, ils ont tous le droit à leur petit doigt dans le pétou"
            },
            
            {
                nom: "Addictio",
                date: "Mars 2021",
                quote: "Il est aussi Erwan que connard !"
            },
            
            {
                nom: "Addictio et Exo",
                date: "Juillet 2021",
                quote: "Salope no kokyu ecchi no kata !"
            },
            
            {
                nom: "Exo",
                date: "Juillet 2021",
                quote: "Un sujet trop complexe à mettre en oeuf"
            },
            
            {
                nom: "Titou Alouette",
                date: "Août 2021",
                quote: "J'adore les dialogues quand ils parlent"
            },
            
            {
                nom: "Addictio",
                date: "Août 2021",
                quote: "Tu connais mal la personne avec qui tu me trompes"
            },
            
            {
                nom: "Addictio",
                date: "Août 2021",
                quote: "J'aimerais bien qu'on me perce... "
            },
            
            {
                nom: "Addictio",
                date: "Août 2021",
                quote: "Si je maigris, je serais trop beau, c'est pour ça que je reste gros !"
            },
            
            {
                nom: "MiniJinouw",
                date: "Septembre 2021",
                quote: "ok je suis libre jusqu'à 20€ ^^'"
            },
            
            {
                nom: "Hatrax",
                date: "Octobre 2021",
                quote: "MA BITE EST EN NOUILLE ! MA BITE EST EN PASTA lINGUINI !"
            },
            
            {
                nom: "Exotit",
                date: "Octobre 2021",
                quote: "J'ai tellement pas baiser dernièrement que j'ai l'impression d'être redevenu puceau"
            },
            
            {
                nom: "Exotit",
                date: "Novembre 2021",
                quote: "Je suis en train de lécher ma glace comme je lèche ma soeur."
            },
            
            {
                nom: "Exotit",
                date: "Décembre 2021",
                quote: "Respecte moi ! J'ai peut être des boobs mais il sont plus petit !"
            },
            
            {
                nom: "Hatrax",
                date: "Janvier 2022",
                quote: "LA VIE DE MA MERE JE SUCE DES BITES SI C'EST PAS BATMAN !"
            },
            
            {
                nom: "Estelle",
                date: "Janvier 2022",
                quote: "Ecoute, y a 2 trous, faut bien les utiliser"
            },
            
        ];

        var chap = Math.floor(Math.random() * 40);

        embed
            .setColor("#00FFFF")

            .setAuthor(`${this.client.user.username}`, `${this.client.user.displayAvatarURL()}`)

            .addField(`${quotes[chap].nom} - ${quotes[chap].date}`, `"${quotes[chap].quote}"`)
            
            ;

            msg.say(embed)
    }
};
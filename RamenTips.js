/* Isaac Sheikh RamenMaker 19.06.2017
/**
    This is a simple recipe skill to help you make the perfect bowl of ramen.
    
    Whether you want to make it fancy or keep it easy, this skill will provide
    tips and tricks for a fantastic meal.
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'For the optimal amount of water, use the tip of your finger to measure while filling the pot',
                'Add some dried shitake mushrooms or meat when adding the noodles.',
                'Put the soup base and dried vegetables into the boiling water before the noodles.',
                'Add the hard white base of some ripped up cabbage when adding the noodles.',
                'Add the leafy green parts of some ripped up cabbage 3 minutes after adding the noodles.',
                'Crack an egg and dump yolk into soup 45 seconds before removing from heat.',
                'Add a slice of your favourite cheese 30 seconds before removing from heat',
                'Use utensil to break and mix yolk and cheese once the soup is in a bowl.',
                'Add a handful of sliced scallions on top of the soup once in the bowl.',
                'Add a handful of nori for a slight crunch with each bite.',
                'Don\'t forget to drink the broth after eating all the ingredients.',
                'Experimenting with water levels can lead to more or less creamy broth',
                'Use kimchi to cleanse your palate between bites',
                'Use a soup spoon to eat the noodles and extra ingredients together',
                'Slurp the noodles while eating to draw in air and cool the soup',
            ],
            SKILL_NAME: 'Ramen Helper',
            GET_FACT_MESSAGE: "Here's your tip: ",
            HELP_MESSAGE: 'You can say tell me a ramen tip, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'For the optimal amount of water, use the tip of your finger to measure while filling the pot',
                'Add some dried shitake mushrooms or meat when adding the noodles.',
                'Put the soup base and dried vegetables into the boiling water before the noodles.',
                'Add the hard white base of some ripped up cabbage when adding the noodles.',
                'Add the leafy green parts of some ripped up cabbage 3 minutes after adding the noodles.',
                'Crack an egg and dump yolk into soup 45 seconds before removing from heat.',
                'Add a slice of your favourite cheese 30 seconds before removing from heat',
                'Use utensil to break and mix yolk and cheese once the soup is in a bowl.',
                'Add a handful of sliced scallions on top of the soup once in the bowl.',
                'Add a handful of nori for a slight crunch with each bite.',
                'Don\'t forget to drink the broth after eating all the ingredients.',
                'Experimenting with water levels can lead to more or less creamy broth',
                'Use kimchi to cleanse your palate between bites',
                'Use a soup spoon to eat the noodles and extra ingredients together',
                'Slurp the noodles while eating to draw in air and cool the soup',
            ],
            SKILL_NAME: 'American Ramen Facts',
        },
    },
    'en-GB': {
        translation: {
            FACTS: [
                'For the optimal amount of water, use the tip of your finger to measure while filling the pot',
                'Add some dried shitake mushrooms or meat when adding the noodles.',
                'Put the soup base and dried vegetables into the boiling water before the noodles.',
                'Add the hard white base of some ripped up cabbage when adding the noodles.',
                'Add the leafy green parts of some ripped up cabbage 3 minutes after adding the noodles.',
                'Crack an egg and dump yolk into soup 45 seconds before removing from heat.',
                'Add a slice of your favourite cheese 30 seconds before removing from heat',
                'Use utensil to break and mix yolk and cheese once the soup is in a bowl.',
                'Add a handful of sliced scallions on top of the soup once in the bowl.',
                'Add a handful of nori for a slight crunch with each bite.',
                'Don\'t forget to drink the broth after eating all the ingredients.',
                'Experimenting with water levels can lead to more or less creamy broth',
                'Use kimchi to cleanse your palate between bites',
                'Use a soup spoon to eat the noodles and extra ingredients together',
                'Slurp the noodles while eating to draw in air and cool the soup',
            ],
            SKILL_NAME: 'British Ramen Facts',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

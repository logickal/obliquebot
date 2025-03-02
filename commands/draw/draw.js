const { SlashCommandBuilder } = require('@discordjs/builders');
const oblique = require('oblique-strategies');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('draw')
        .setDescription('Draw a random Oblique Strategy card.'),
    async execute(interaction) {
        await interaction.reply(oblique.draw());
    }
};


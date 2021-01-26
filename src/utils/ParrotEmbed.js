const { MessageEmbed } = require('discord.js')

module.exports = class ParrotEmbed extends MessageEmbed {
  constructor (user) {
    super(user)

    this.setColor('#56784d')
    if (user) this.setFooter(user.tag, user.displayAvatarURL()).setTimestamp()
  }
}
